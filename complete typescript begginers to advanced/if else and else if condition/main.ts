// if else condition

let num : number = 4;
let num2 : number = 6;

if(num == num2){
    console.log("4 is not equal to 6");
}
else if(num != num2){
    console.log("6 is not equal to 4");
}
else if(num < num2){
    console.log("4 is smaller than 6");
}
else if(num > num2){
    console.log("4 is not greater than 6");
}
else {
    console.log(undefined);
}


// if / else and else if condition

let bike = "this is my sport bike";

if (bike == bike){
    console.log("this is my bike ");
}
else if (bike != bike){
    console.log("this is my simple bike");
}
else if (bike < bike){
    console.log("thsi is my sport bike");
}
else{
    console.log("this is not my bike");
}


                        // conditinal ternary operaters unother object of if else statement


 let israining = false
  let ischected = israining ? "wear a raincoat" : "wear sunglasses"
                                                
  console.log(ischected);
                                                
 let num3 = 60;
 console.log(num3===50? "your grade is B" : "you are passed");