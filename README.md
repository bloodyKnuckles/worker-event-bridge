# worker-event-bridge

### main (UI) thread usage

```
var eventBridgeMain = require('worker-event-bridge/main')

var worker = new Worker('./worker.js')
eventBridgeMain(worker)
```

### worker thread usage

```
var eventBridgeWorker = require('worker-event-bridge/worker')

eventBridgeWorker('select', 'change', function (val) {
  console.log(val) // reports selected value
})
```

[A Cycle.js implementation example.](https://github.com/bloodyKnuckles/cycle-web-worker)

### use in existing message channels

*main.js*
```
var eventBridgeMain = require('worker-event-bridge/main')

var worker = new Worker('./worker.js')
worker.addEventListener('message', function (evt) {
  evt.data.forEach(function (data) {
    if ( 'event' === data.cmd ) {
      eventBridgeMain.addListener(worker, data.event)
    }
  })
}, false)
```

*worker.js*
```
var eventBridgeWorker = require('worker-event-bridge/worker')

eventBridgeWorker.send('select', 'change')

self.addEventListener('message', function (evt) {
  eventBridge.receive(evt, 'select', 'change', function (val) {
    console.log(val)
  })
}, false)
```

### license

MIT
