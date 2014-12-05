function Hello() {
    var name;
    this.setName = function (nameParam) {
        name = nameParam;
    };

    this.sayHello = function () {
        console.log("Hello " + name);
    };
};
module.exports = Hello;
