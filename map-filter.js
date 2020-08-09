// const numbers =[2,3,4,5,6,7,8,9];
// const output =[];
// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);

// const numbers =[2,3,4,5,6,7,8,9];
// numbers.map(function square(element, index , array) {
//     console.log(element, index, array);
// })

// const numbers = [3,4,5,6,7,8,9];
// const result = numbers.map(function (element) {
//    return element*element;
// })
// console.log(result);

// const numbers = [3,4,5,6,7,8,9];
// const result = numbers.map( element => element*element);
// console.log(result);

const numbers = [2,3,4,4,6,7,8,9,3];
const result = numbers.filter(x=> x<5);
console.log(result);

const isThere = numbers.find(x=> x>5);
console.log(isThere);