
class MsgError<T> {
  m: T;
  constructor(m: T) {
    this.m = m;
  }
}
const me = new MsgError<string>('test');
function r(){
  console.log(this);
}
r()

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
