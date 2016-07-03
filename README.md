# worker-event-bridge

### main (UI) thread usage

```
var eventBridge = require('worker-event-bridge/main')

var worker = new Worker('./worker.js')
worker.addEventListener('message', function (evt) {
  evt.data.forEach(function (data) {
    if ( 'event' === data.cmd ) {
      eventBridge(worker, data.event)
    }
  })
}, false)
```

### worker thread usage

```
var eventBridge = require('worker-event-bridge/worker')

eventBridge.send('select', 'change', 'target.value')

self.addEventListener('message', function (evt) {
  eventBridge.receive(evt, 'select', 'change', function (response) {
    console.log(response) // reports selected value
  })
}, false)
```

### license

MIT
