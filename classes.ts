class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    console.log('hello ' + this.message);
  }
}
const me = new MsgError('test');
me.sayHello();
console.log(me instanceof MsgError);

// constructor
// how many ways can class constructor can be initate.
// A constructor can be initiated in as many ways as you explicitly support, using:

// Overloads

// Default values

// Optional parameters

// Union types

// JavaScript initializes class instances in this order:

// Base class field initializers

// Base class constructor

// Derived class field initializers

// Derived class constructor
