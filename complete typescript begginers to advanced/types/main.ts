type User = {
    name: string,
    age: number,
    email: string,           // type aliase
    check: boolean,
};

let User1: User = {

    name : "saad qureshi",
    age : 22,
    email: "saadq77109@gmail.com",
    check : true

};

let User2 : User = {

    name : "nehal qureshi",
    age : 18 ,
    email : "nehalkhalid77109@gmail.com" ,
    check : true,
};


// type litearal

let Shirts : "Small"|"Meduim"|"Large"

Shirts = "Large"
Shirts = "Small"


// type unions // we also provide specific value in it .

let saad_qureshi : string | number ;

saad_qureshi = "saad";
saad_qureshi = 22;

// type intersection

type beachgear = {
    wearshorts : boolean,
    wearsunglases : boolean,
    weart_shirt : boolean
}

type slepping = {
    wearpajama : boolean,
    wears_shirt : boolean,
}

type picnic = beachgear & slepping ;

let total_plan = {
    wearshorts : true,
    wearsunglases : true,
    weart_shirt : true,
    wearpajama : true,
    wears_shirt : false


};

console.log(total_plan);


// onthier example of intersection // its work that merge two properties 

type student = {
    name:string,
    age:number,
    rollno:number
    check:boolean
}

type teacher = {
    name1:string,
    subject:string,
    check1:boolean
}

type school = student & teacher ;

let school1:school = {
    name:"saad",
    age:22,
    rollno:123456789,
    check:true,
    name1:"mubashir",
    subject:"information tech IT ",
    check1:true
}

console.log(school1);


enum drinks {      // similar than type union // enum gives us index number // union gives us exact value
    Small = "Small",
    Mediaum = "Mediaum",
    Large = "Large",        //enum and const enum is similar but diifrence on compilation time
    mega = "mega",

}        // the diffrence between enum and type literal the blue print of typeliteral is not showing in java script

let order : drinks = drinks.Large   // the diffrence between both is reverse mapiing

console.log(order);
 
// type interfaces // small brother of type aliass but syentex is not same

interface student1 {
    name:string,
    age?:number,

}

let student2 :student1 = {
    name :"Nehal",
    age:16,
    
}

console.log(student2);

// structurer typing // importitant part to satisfied our structure 

interface triangle{
    diameter:number
}
interface square{
    diameter:number
}

let merge : triangle = {diameter : 30};
let merge1: square = {diameter : 40};

merge = merge1;
merge1 = merge;

// complex type of structure   // structure typing is more important for exam step no :5c on sir zia repo


// index signature

type result = {   // this is value
    [key:string]: string;
}

let result1 : result = {
    name:"xyz",
    email:"xyz@gmail.com",
    
}
console.log(result1);

// still object vs fresh object

// the structure of fresh object is completly same as still object so its run othervise thats give us error


// array of object for store multiple data // that is use for optinal ? in any type of value