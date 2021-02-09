// function merge(leftArr, rightArr) {

//     let sortedArr = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//         if (leftArr[leftIndex] <= rightArr[rightIndex]) {
//             sortedArr.push(leftArr[leftIndex]);
//             leftIndex++;
//         }
//         else {
//             sortedArr.push(rightArr[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return [...sortedArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
// }

// function mergeSort(array) {

//     if (array.length < 2) return array;

//     const middle = Math.floor(array.length / 2);
//     const leftArr = array.slice(0, middle);
//     const rightArr = array.slice(middle);

//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// console.log(mergeSort([1, 2, 5, 4, 6, 2, 1, 3, 8, 9, 7]));

// function quickSort(array) {

//     if (array.length === 1) {
//         return array;
//     }

//     let leftArr = [];
//     let rightArr = [];
//     let pivot = array[array.length - 1];

//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] < pivot) {
//             leftArr.push(array[i]);
//         }
//         else {
//             rightArr.push(array[i]);
//         }
//     }

//     if (leftArr.length > 0 && rightArr.length > 0) {
//         return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
//     }
//     else if (leftArr.length > 0) {
//         return [...quickSort(leftArr), pivot];
//     }
//     else {
//         return [pivot, ...quickSort(rightArr)]
//     }
// }

// const arr = [1, 2, 5, 4, 6, 2, 1, 3, 8, 9, 7];
// console.log(quickSort(arr));

// function class1() {
//     let name = "Nir Huri";
//     let age = 30;
//     let city = "Modiin";

//     return {
//         setName: function (newName) {
//             name = newName;
//         },
//         getName: function () {
//             return name;
//         },

//     }
// }

// const person = new class1();
// person.setName("Orian Huri")
// console.log(person.getName())
// person.name = "NirHuri"
// console.log(person.getName());


// const os = require('os');

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.homedir())
// console.log(os.uptime())

// obj = new Map();
// arr = ['a', 'b', 'c', 'b', 'a']

// for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] == 0) {
//         obj[arr[i]] += 1;
//     }
//     else {
//         obj[arr[i]] = 0;
//     }

// }

// let temp = -1;

// for (let [key, val] of obj.entries()) {
//     if (val === 0) {
//         console.log(key)
//     }
// }

// function getByValue(map, searchValue) {
//   for (let [key, value] of map.entries()) {
//     if (value === searchValue) return key;
//   }
// }

// let people = new Map();
// people.set("1", "jhon");
// people.set("2", "jasmein");
// people.set("3", "abdo");

// console.log(getByValue(people, "jhon"));
// console.log(getByValue(people, "abdo"));

// arr = ['a', 'b', 'c', 'b', 'a'];
// obj = {}

// arr.forEach(element => {
//     if (obj[element] >= 0) {
//         obj[element] += 1
//     } else {
//         obj[element] = 0;
//     }
// });

// let keys = Object.keys(obj);

// keys.forEach(e => {
//     if (obj[e] == 0) {
//         console.log(e)
//     }
// })


const { logger } = require('./src/helpers/logger');
const { test } = require('./test2')
logger.log("Hi there");
test();
logger.printLogCount();