import subby, { square, add } from "./util";
// import addy, { square, subby } from "./util";
import { isAdulty, canDrinky as canDrinkk } from "./person1";
import * as a from "./person2";
import validator from "validator";

console.log(validator.isEmail("test"));
console.log(validator.isEmail("email@alex.com"));

console.log(`-----------------`);

console.log(`Square ${square(23423)}`);
console.log(`Add ${add(4, 5)}`);
console.log(`Substract ${subby(4, 5)}`);

console.log(`-----------------`);

console.log(`Person1 IsAdult : ${isAdulty(14)}`);
console.log(`Person1 Add : ${canDrinkk(15)}`);

console.log(`-----------------`);

console.log(`Person2 IsAdult : ${a.isAdult(12)}`);
console.log(`Person2 Add : ${a.canDrink(24)}`);