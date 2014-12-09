var EventEmitter = require('events').EventEmitter;
var event_obj = new EventEmitter();

event_obj.on("some_event", function(){
    console.log("some_event occured!");
});

setTimeout(function() {
    event_obj.emit("some_event");
}, 1000);
