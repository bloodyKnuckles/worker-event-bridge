# worker-event-bridge

### main (UI) thread usage

```
var eventBridge = require('worker-event-bridge/main')

var worker = new Worker('./worker.js')
eventBridge(worker)
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

[A Cycle.js implementation example.](https://github.com/bloodyKnuckles/cycle-web-worker)

### license

MIT
