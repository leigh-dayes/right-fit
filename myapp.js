const myApp = {
    name: "Demo app for Git course",
    version: "2.0.0",
    author: "leigh",
    description: "this is a simple app",
    licence: "MIT",
    year: "2023",
    sayHello: function () {
        console.log(`Hello from ${this.name} v${this.version}`)
    },
    init: function() {
        console.log(`${this.name} ${this.version}`)
    }
};
myApp.init()