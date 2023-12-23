// console.log('start');
// const myProm = new Promise(function (resolve, reject) {
// console.log('running');
// resolve();
// }).then(() => console.log('resolved'));
// console.log('end of main block');

console.log('start');
const test = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("done!"), 2000);
    setTimeout(resolve, 2000)
});
test.then(() => console.log('Resolved'));
console.log('End');
