const lowerCase = (str) => {
    return str.toLowerCase();
}
const transform = (word, fun) => {
    fun(word);
}
//console.log(lowerCase('HUSSEIN'));
//console.log(transform('AHMED ALI', lowerCase));


// Function Accept a function
const SayHi = (str) => {
    return () => {
        console.log(str);
    }
}
console.log(SayHi('Hi Ahmed')); // Function (anonymous)
const say = SayHi('Hi Ahmed');
say(); 