let sum = (...args) => {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total;

}

let filter = (...args) => {
    return args.filter(item => item === 1)
}

//console.log(sum(1, 2, 3, 4, 5));
console.log(filter(1, 2, 3, 4, 5));