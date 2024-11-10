for (let index = 0;  index < 5 ; index ++){
    console.log("12:00");
    
}

let i = 0;

while(i < 10){
    console.log("2 + 1 = 3"); // Corrected the math as well
    i++; // Increment i by 1
}


// working around array with for loop

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// working around array with for of loop

let colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}

// Function to generate multiplication table for the number 2
function generateTableOfTwo(): void {
    let number = 2;
    console.log(`Multiplication Table of ${number}`);
    
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

generateTableOfTwo();


let Names :string [] = ["saad","zain","hasnain","nehal","taha","laraib","hunain"];

let Names1 = Names .splice(1,2,"saad ali");

Names1.slice(2,4);

Names1.push("sangeen");

console.log(Names1);

// while

let index = 1;

while(index <= 10){
    console.log(2 + 1);
    index++
    
    

}

let my_name :string = "Nehal";

if(my_name === "Saad"){
    console.log(" you are correct");
}
else if (my_name !== "Saad "){
    console.log("you are wrong");
}
else{
    console.log("plz write right name");
}

function usersall() {
    type my_users = {
        name: string,
        age: number,
        id: number,
        check: boolean
    };

    const user1: my_users = {
        name: "nehal",
        age: 17,
        id: 21,
        check: true
    };

    const user2: my_users = {
        name: "sangeen",
        age: 22,
        id: 25,
        check: true
    };

    const user3: my_users = {
        name: "nabeel", 
        age: 28,
        id: 20,
        check: true
    };

    const user4: my_users = {
        name: "laraib",
        age: 23,
        id: 26,
        check: true
    };

    // Create an array to hold all user objects
    const allUsers: my_users[] = [user1, user2, user3, user4];

    return allUsers;
}

const pers = usersall();
console.log(pers);



let arr:number [] = [1,2,3,4,5,6,7,8,9];

arr.toString();
arr.reverse();
arr.splice(0 , 0 , 0);
console.log(arr);


function party(name:string,time:number) {
    console.log(`\n Hello my friend ${name} i have arrange bbq party at ${time} o,clock \n `);
    
    
};
party("Nehal",9);
party("Laraib",9);

// struectural typing

interface square {
    redius:number,
}

interface rectengle {
    redius:number
}

let merge : square = {redius:10}
let merges : rectengle = {redius:25}

merges = merge

type box = {
    surfece:number,
    length:number
}

type triangle = {
    surfece:number
}

let mix : box = {surfece:10,length:40};
let mixed :triangle = {surfece:25};

mixed = mix 

// simple example of if else and else if

let alian :string = "blue";

if (alian === "green") {
    console.log("shot him and you got 5 points");
}
else if (alian === "red") {
    console.log("shot him and you got 10 points");
}
else if (alian === "white") {
    console.log("shot him and you got 20 points");
}
else{
    console.log("game over !");
}

let bike = (model:string,color:string,make:number,brand:string,owner:string) => {
    let new_bike = {
        model:model,
        color:color,
        make:make,
        brand:brand,
        owner:owner
    }
return new_bike;
};

let own_bike = bike("gto 125","black",1998,"kawasaki","Saad qureshi");
console.log(own_bike);

// play with array and loops

let number : number [] = [0,1,2,3,4,5,6,7];

for (let index = 0; index < number.length; index++) {
    const element = number[index];
    
}
    console.log(number);

let my_num = [0,1,2,3,4,5,6,7,8,9];


while (index < my_num.length) {
    index++;
}

console.log(my_num);

let own_num = [1,2,3,4,5,6,7,8,9];

do {
    console.log("thats my do while loop");
    
} while (index < own_num .length);

// nested array

let my_mat :string [][] = [
    ["saad","nehal","laraib"],
    ["hasnain","hunain","ali"],
    ["zain","hamza","nabeel"]

];
console.log(my_mat [0][1]);




    


