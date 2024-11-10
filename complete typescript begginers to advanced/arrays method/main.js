"use strict";
// arrays methods
let grocery = ["atta", "chawal", "1kg milk", "chenni"]; // array type concatination and annotation
console.log(grocery.length); // this method check the length of array.// array counts from 0 1 2 3 4 5.
console.log(grocery[2]); // in computer science counting start from 0.
let multitype = [1, "hello"]; // if we want to store multipletype in array so we this method.
console.log(multitype);
let myFriends = [" Lariab", "Nehal", "Hunain", "Samar"];
myFriends.push("sangeen"); // push method its add elemnt in array at last
console.log(`\n this is first method push : ${myFriends} \n`);
let myFriends2 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
myFriends2.pop(); // removing element from array at last                          
console.log(` \n this is secound method pop : ${myFriends2} \n`);
let myFriends3 = [" Lariab", "Nehal", "Hunain", "Samar"];
myFriends3.shift(); // remove first element in array
console.log(`\n this is third method shift : ${myFriends3} \n`);
let myFriends4 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
myFriends4.unshift("laraib"); // add first element from array
console.log(`\n this is fourth method unshift : ${myFriends4} \n`);
let myFriends5 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
let newfr = myFriends5.slice(1, 5); // its delete from start to end as you chose like 0 to 3.for example that you slice some thing
console.log(`\n this is fifth method slice : ${newfr} \n`);
let myFriends6 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
let newfr1 = myFriends5.splice(2, 0, "suleman"); // its adding or removing from middle of the array
// index , remove elem count ,    //  to add some thing   // expected 1,2,3 elements
console.log(`\n this is sixth method splice : ${newfr1} \n`);
let myFriends7 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
let newfr2 = myFriends7.reverse(); // its reverse total complete array
console.log(`\n this is seventh method reverse : ${newfr2} \n`);
let myFriends8 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
let res = myFriends8.map((elem, index, refarr) => {
    // its take the arrow function to return and provide us a new array
    return refarr;
});
console.log(res);
let myFriends9 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
myFriends9.forEach((elem, index, refarr) => {
    console.log(elem + index + refarr); // this take three or much as 2 arguments
});
let myFriends10 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
// Filter friends whose names have a length greater than 3
let newfr3 = myFriends10.filter(friend => friend.length > 3);
console.log(`\nThis is the filtered array: ${newfr3}\n`);
let myFriends11 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
let age = [23, 18, 22, 22, 23];
let responce = [true, true, true, true, true];
// Concatenate the arrays
let newfr4 = myFriends11.concat(responce, age);
console.log(`\nThis is the concatenated array: ${newfr4}\n`);
let number10 = [25, 12, 23, 5, 75];
let newNum = number10.toString(); // this method replace any type of value to string
console.log(`\n this is to string method ${newNum} \n `);
let arr = ["HELLO", "BRO"];
let arr1 = arr.join("my"); // this is join method this was joined to deiffrent values to each other
console.log(`\n this is join method ${arr1} n`);
let str = ["hello my name is saad"], nums = [22];
let New = str.sort(); // this method was sorted each varaible in diffrent lines of code
let New1 = nums.sort();
console.log(New, New1);
let myFriends12 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
//    index of array if you want   //  add element
myFriends12[3] = "suleman"; // if you want any index of array and replace with other value
let myFriends13 = ["laraib", "nehal", "hunain", "samar", "sangeen"];
let myf = myFriends13.length - 1; // if you want last elem of array 
// multi dimension array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[2][1]); // each array content unother value.
let saman = ["milk", "bread", "eggs"];
let [item1, item2, item3] = grocery; // distructing method of array
console.log(item1);
console.log(item2);
console.log(item3);
