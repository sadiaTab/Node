var Emitter = require('events');
var eventConfig = require('./config').events;

var util = require('util');

function Greetr(){
    Emitter.call(this);
    this.greeting = 'Hello world';
}

util.inherits(Greetr, Emitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting +':' + data);
    this.emit('greet',data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone greeted: '+data);
});

greeter1.greet('Sadia');

//Template Literal ES6
var name = 'John Doe';
var greetName = `Hello ${name}`;
console.log(greetName);

var obj = {
    name: 'John',
    greets: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greets();
obj.greets.call({name: 'Jane Doe'});
obj.greets.apply({name: 'Jane Doe'});