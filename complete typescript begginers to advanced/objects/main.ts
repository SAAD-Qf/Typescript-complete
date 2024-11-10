
// making an object

let Car = {
    model:"tundra",
    color:"black",
    brand:"toyota",
    height:"4.0",
    weight:"2.5 tuns",
};
console.log(Car.brand);
console.log(Car["Honda"]);

// if you want to change intial value of object

Car.model = "Civic";


console.log(Car);

// making a multiple object // nested obeject obeject under object


let myData = {
    my_self: {
        Name: "SAAD",
        Cast: "QURESHI",
        date_of_birth: "24 / 6 / 2002",
        Qualification: "intermediate",
    },
    courses: {
        course1: "typescript",
        course2: "python",
        course3: "react native engineer",
        course4: "generative AI engineer",
    },
    Family: {
        persons: "6 persons",
    },
    friends: {
        friend1: "laraib",
        friend2: "nehal",
        friend3: "hunain",
        friend4: "samar",
        friend5: "faisal",
    },
    IT_class_Friends: {
        it_friend: "sanggen khan",
        it_friend2: "nabeel bhai",
        it_friend3: "muzaamil",
        it_friends4: "sulaiman",
        it_friends5: "maher bhai",
        it_friends6: "saad gujjer",
    },
};

console.log(myData);


console.log("myData");

// object type annotation

let person:{name:string ; age:number; } = {
    name:"mubashir ali",
    age : 25,

}

// if we want to change the properteys

person.name = "ameen alam";

person.age = 30;

console.log(person);









