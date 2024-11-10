// type interfaces // small brother of type aliass but syentex is not same

interface student {
    name:string,
    age?:number,

}

let student1:student = {
    name :"Nehal",
    age:18
}

console.log(student1);

// structurer typing // importitant part to satisfied our structure // that typescrpit follows

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




