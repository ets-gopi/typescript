class MsgError<T> {
  m: T;
  constructor(m: T) {
    this.m = m;
  }
}
const me = new MsgError<string>('test');
class A {
  name = 'thinng';
  getName(this: A) {
    console.log(this.name);
  }
  getPorps() {
    return this;
  }
}
const a = new A();
console.log(a);

const d = {
  a: 10,
  b: 20,
  add: function () {
    console.log(this);
  },
  f: 'def',
  getName: a.getName
};
//console.log(a.getPorps());

// d.getName();

// function df() {
//   console.log(this); // true in non-strict mode
// }

// df();

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
