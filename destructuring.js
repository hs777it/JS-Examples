const arr = [1, 8, 3, 5, 9];
const [num1, num2, , num4] = arr;
//console.log(num1, num2, num4);

const obj = { id: '1', title: 'Macbook pro' };
const { id, title } = obj;
console.log(title, id);

const obj2 = [
    { id: '1', title: 'Macbook pro' },
    { id: '2', title: 'samsung 45' }
];
const list = obj2.map(item => item.title);
console.log('List is:', list);