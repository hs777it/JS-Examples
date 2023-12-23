
const arr = [1, 2, 3, 4, 5, 6];

const newArr = arr.map((item, index) => {
    return { Number: item, Index: index };
});
//console.log(newArr);

// ============================================================
const cars = ["Ford", "Volvo", "BMW", "Fiat", "Honda", "Lada"];
const newCars = [...cars, "Skoda", "Mazda"];

// console.log(newCars);
// console.log(newCars.slice(2));
// console.log(newCars.slice(2, 5));
// console.log(newCars.slice(-1));

// const carsArr = cars.splice(2);
// const carsArr = cars.reverse();
// const carsArr = cars.concat(["Skoda", "Mazda"]); //OR console.log([...cars, ...newCars2]);
// console.log(carsArr);

// delete two items from zero index and add "Skoda" ,"Mazda"
// console.log(cars.splice(2, 0, "Skoda", "Mazda"));

// console.log(cars.join('-'));


const carsMap = cars.map((item) => {
    return item === "BMW" ? "BMW" : "";
})
//console.log(carsMap);


// console.log(cars.filter(item => item === "Honda")); //return all items match condition
// console.log(cars.find(item => item === "Honda")); //return only first item
console.log(cars.sort());
console.log(cars.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}));

// const numArr = [9, 10, 100];
// console.log(numArr.reduce((prevVal, currentVal) => prevVal + currentVal, 1));

// const textArr = ['a', 'b', 'c'];
// console.log(textArr.reduce((prevVal, currentVal) => prevVal + currentVal, '1'));



console.log("Cars Brand:", cars);
