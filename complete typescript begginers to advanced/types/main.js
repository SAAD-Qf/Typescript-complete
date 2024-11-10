"use strict";
let User1 = {
    name: "saad qureshi",
    age: 22,
    email: "saadq77109@gmail.com",
    check: true
};
let User2 = {
    name: "nehal qureshi",
    age: 18,
    email: "nehalkhalid77109@gmail.com",
    check: true,
};
// type litearal
let Shirts;
Shirts = "Large";
Shirts = "Small";
// type unions // we also provide specific value in it .
let saad_qureshi;
saad_qureshi = "saad";
saad_qureshi = 22;
let total_plan = {
    wearshorts: true,
    wearsunglases: true,
    weart_shirt: true,
    wearpajama: true,
    wears_shirt: false
};
console.log(total_plan);
let school1 = {
    name: "saad",
    age: 22,
    rollno: 123456789,
    check: true,
    name1: "mubashir",
    subject: "information tech IT ",
    check1: true
};
console.log(school1);
var drinks;
(function (drinks) {
    drinks["Small"] = "Small";
    drinks["Mediaum"] = "Mediaum";
    drinks["Large"] = "Large";
    drinks["mega"] = "mega";
})(drinks || (drinks = {})); // the diffrence between enum and type literal the blue print of typeliteral is not showing in java script
let order = drinks.Large; // the diffrence between both is reverse mapiing
console.log(order);
let student2 = {
    name: "Nehal",
    age: 16,
};
console.log(student2);
let merge = { diameter: 30 };
let merge1 = { diameter: 40 };
merge = merge1;
merge1 = merge;
let result1 = {
    name: "xyz",
    email: "xyz@gmail.com",
};
console.log(result1);
// still object vs fresh object
// the structure of fresh object is completly same as still object so its run othervise thats give us error
// array of object for store multiple data // that is use for optinal ? in any type of value
