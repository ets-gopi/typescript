const add = (a: number, b: number) => {
  return a + b;
};

function divide(a: number, b: number) {
  return a / b;
}

const mul = function (a: number, b: number) {
  return a * b;
};

function test(): number {
  return 1;
}

function getId(id: string | number) {
  if (typeof id === 'string') {
    return id.toLocaleLowerCase();
  }
}

getId('gopi');
