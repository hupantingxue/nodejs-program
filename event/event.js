var EventEmitter = require('events').EventEmitter;
var event_obj = new EventEmitter();

event_obj.on("some_event", function(arg1, arg2){
    console.log("listen1 " + arg1 + arg2);
});

event_obj.on("some_event", function(arg1, arg2){
    console.log("listen2 " + arg1 + arg2);
});

setTimeout(function() {
    event_obj.emit("some_event", "hupantingxue", " need money");
}, 1000);
