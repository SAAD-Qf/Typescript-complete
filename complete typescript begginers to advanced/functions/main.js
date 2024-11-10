"use strict";
// functions
// aroow function
let gretings = (name) => {
    console.log(gretings);
};
// function and function syntex with type annotation
function car(color) {
    let car = (`the ${color} of the car is black `);
    console.log(car);
}
// making a function
function My_Car(my_car) {
    let myCar = {
        brand: "rolls royce",
        model: "ghost",
        color: "jet black",
    };
    console.log(myCar); // Use 'myCar' instead of 'My_Car'
}
// Call the function
My_Car(console.log("\n THIS IS MY CAR \n"));
// making a function with return method
function My_Bike(my_bike) {
    let MY_bike = {
        brand: "yamaha",
        model: "rx115",
        color: "jet black",
    };
    return MY_bike;
}
;
let MY_bike = My_Bike("\n this is my bike \n");
console.log(MY_bike);
// making a function a with type concatination
function my_House(place, address, postaLcode) {
    let my_house = {
        place: place,
        address: address,
        postaLcode: postaLcode,
    };
    console.log(my_house);
}
// Call the function with actual values
my_House("Karachi", "Soldier Bazar", 450251);
// peramiters and arguments unother part of function
// (peramiters)
function greet(name) {
    console.log(`hello ${name} do you want to go dinner with me?`);
}
// (arguments)
greet("nehal");
greet("laraib");
greet("hasnain");
// utilize and callback by many time with type concatination or without
greet("hunain");
greet("samar");
greet("sangeen");
greet("suleman");
greet("nabeel");
// default perameters
function performOperation(Add, Sub, mult, div) {
    if (Add === "add") {
        console.log("You are performing addition.");
    }
    else if (Sub === "subtract") {
        console.log("You are performing subtraction.");
    }
    else if (mult === "multiply") {
        console.log("You are performing multiplication.");
    }
    else if (div === "divide") {
        console.log("You are performing division.");
    }
    else {
        console.log("Please choose a valid operation!");
    }
}
// Example usage:
performOperation("add", "subtract", "multiply", "divide");
// optinal perameters
function data(name) {
    if (name) {
        console.log(`\n hello : ${name} \n`);
    }
    else {
        console.log("hello how are you");
    }
}
data(" NEHAL ");
data("LARAIB");
// rest perameters
// syntex
function car_t(color, model, brand, ...employe) {
    let car_T = {
        color: color,
        model: model,
        brand: brand,
    };
    console.log(employe);
    return car_T;
}
;
let owner1 = car_t("Black", "phantom", "rolls royce", "laraib", "nehal", "hasnain", "hunain");
console.log("list of employe:");
console.log(owner1);
// arrow function // small type of usign a function
// syntex
let egg = () => {
    let Egg = [1, 1.5, 4];
};
egg();
let car7 = (color, height, weight, brand) => {
    let responce = {
        color: color,
        height: height,
        weight: weight,
        brand: brand,
    };
    return responce;
};
let result = car7("black", 5.2, 800, "mercedes");
console.log(result);
// anoynoumus function
function fryegg() {
    return 1 + 2 + 3; // simple function      return 1+2+3
}
fryegg();
let my = function (a, b, c) {
    return a + b + c;
};
my(1, 2, 4);
// imeditatily invoking functions  // freehand // for making private scopes
(function () {
    console.log("hello");
    let username = "class";
})();
// recursive function // its call the function under the function
function countdown(number) {
    if (number <= 0) { // if we dont provide if condition so we stuck in loop
        console.log("done !");
        return;
    }
    console.log(number);
    countdown(number - 1);
}
countdown(10);
function battery(number) {
    if (number <= 0) {
        console.log("charge your mobile phone !");
        return;
    }
    console.log(number);
    battery(number - 10);
}
battery(100);
// nested function // function under function
function outer() {
    let innerfun = function () {
        console.log("hello !");
    };
    innerfun();
}
;
outer();
console.log(" \n function chapter is close at this point \n");
console.log("\n array method is start from here \n");
function add(a, b) {
    return a + b;
}
add(1, 4);
add("hello", "world");
add(true, false);
// call back function
function my_call_back(text) {
    console.log("my call back function" + text);
}
function call_back(itext, call_back) {
    call_back(itext);
}
call_back("my text", my_call_back);
