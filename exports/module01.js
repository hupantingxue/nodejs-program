var name;

exports.setName = function(name_param) {
    name = name_param;
};

exports.sayHello = function() {
    console.log("Hello " + name);
};
