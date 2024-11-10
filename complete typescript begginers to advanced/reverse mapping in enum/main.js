"use strict";
var coffee;
(function (coffee) {
    coffee[coffee["latte"] = 0] = "latte";
    coffee[coffee["capichino"] = 1] = "capichino";
    coffee[coffee["black"] = 2] = "black";
    coffee[coffee["hard"] = 3] = "hard";
})(coffee || (coffee = {}));
let my_coffee = coffee[1];
console.log(my_coffee); // the enum is sapport reverse mapping but const enum cant
