// make a network request to fetch some JSON and print the result.
import axios from 'axios';
const fs = require('fs');
const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`The Todo with ID: ${ID} \nHas a title of: ${title}\nIs it finished ? ${finished}`);
});

function test() {
  console.log('start');
  Promise.resolve('10').then((res) => {
    console.log('res :', res);
    
  });

  console.log('end');
}
test();
