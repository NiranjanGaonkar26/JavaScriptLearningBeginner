// Events are things that happen in the system you are programming - the system fires some kind of a signal when an event occurs, 
//  and provides a mechanism by which an action can be automatically taken (i.e, some code running) when the event occurs.

// Event handling use cases:
// System events: eg - Execute some kind of a clean up code when the application is about to terminate
// **Browser events: eg - Mouse clicks (execute some code when a button is clicked)
//                      Key presses
// Async progress events: eg - execute some code when async event provides some progress status

import EventEmitter from "node:events";             //EventEmitter allows us to both listen for events and also create custom events

const emitter = new EventEmitter();

// Add an event listener
emitter.on('listenForHello', message => {
    console.log(`Event handled: ${message}`);
})

// Logic to call this function(which is emitting/firing the event) automatically after 3 seconds
setTimeout(() => {
    emitter.emit('listenForHello', 'This is a message from the event');             //'listenForHello' is the event id
}, 3000);

