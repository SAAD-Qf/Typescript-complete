"use strict";
// tuples
let array = ["saad qureshi", 22, true];
console.log(array);
// optional perameter in tuple if you want
let array1 = ["Nehal", "laraib", "samar", "hunain", { name: "saad" }];
// add last element in tuple
array1.push("sangeen");
// add first element in tuple
array1.unshift("sulaiman");
// add and remove without use any method
array1[3] = "Nabeel bhai";
// add and remove with splice method
array1.splice(3, 1, "maher bhai");
// reversed tuple
array1.reverse();
// remove first element of tuple
array1.shift();
// remove last element of tuple
array1.pop();
// it takes callback function and three arguments and returns new tuple
array1.forEach((element, index, refarr) => {
    console.log(element, index, refarr);
});
// the difference between both each take return and each print directlley
array1.map((ele, ind, refarr) => {
    return refarr;
});
let arr2 = array1;
console.log(arr2);
console.log(array1);
