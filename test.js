// let ame = 'Gopi';

// console.log(ame.toUpperCase());

// ame()

// function test(){

// }
// const a = 10;

//console.log(globalThis);
// function r(p, q, r, s, ...re) {
//   console.log(arguments);
// }
class A {
  name = 'thinng';
  getName() {
    console.log(this);

    console.log(this.name);
  }
}
const a = new A();
const d = {
  a: 10,
  b: 20,
  add: function () {
    console.log(this);
  },
  f: 'def',
  getName: a.getName
};


//d.getName();
console.log(this);
