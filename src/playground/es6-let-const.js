var nameVar = " Andrew";
var nameVar = "Mike"; //re-define
console.log("nameVar", nameVar);

let nameLet = " Jen";
nameLet = "Julie"; //re-assign
console.log(nameLet);

const nameConst = "Frank";
console.log(nameConst);


//Block Scoping

let firstName;

if(true){
    var fullName = "FULL NAME";
    firstName = "Alex";
}


console.log(fullName); //var can be accessed outside block scope

console.log(firstName);

