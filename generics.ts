function getFirstItem<T>(arr: T): T {
  return arr[0];
}

const res1 = getFirstItem(['gopi', 90]);
const res2 = getFirstItem(12);

console.log(res1, res2);
const promise = Promise.resolve('10');
