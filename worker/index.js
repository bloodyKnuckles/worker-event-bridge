function eventBridgeWorker (selector, eventname, response, fn) {
  if ( 'function' === typeof response ) {
    fn = response
    response = undefined
  }
  send(selector, eventname, response)
  self.addEventListener('message', function (evt) {
    receive(evt, selector, eventname, fn)
  }, false)
}

module.exports = {
  'send': send,
  'receive': receive
}

function send (selector, eventname, response) {
  response = response || 'target.value'
  self.postMessage([{
    'cmd': 'event',
    'event': {
      'element': selector, 'event': eventname, 'response': response
    }
  }])
}

function receive (evt, selector, eventname, fn) {
  if (
    'event' === evt.data.cmd &&
    selector === evt.data.event.element &&
    eventname === evt.data.event.event
  ) {
    fn(evt.data.event.response);
  }
}

eventBridgeWorker.send = send
eventBridgeWorker.receive = receive
module.exports = eventBridgeWorker
