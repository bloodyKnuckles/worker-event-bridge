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

eventBridgeWorker('select', 'change', 'target.value', function (val) {
  console.log(val) // reports selected value
})
```

[A Cycle.js implementation example.](https://github.com/bloodyKnuckles/cycle-web-worker)

### license

MIT
