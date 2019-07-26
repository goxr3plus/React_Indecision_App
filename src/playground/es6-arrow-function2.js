// arguments object - no longer bound with arrow functions

const add = function(a, b) {
  return a + b;
};

console.log(add(55, 1));

const add2 = (a, b) => {
  return a + b;
};

console.log(add2(55, 1));

// this keyword - no longer bound

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Miami"],
  printPlacesLined() {
    const cityMessages = this.cities.map(
      city => this.name + "has lived in " + city + "!"
    );
    cityMessages.forEach(message => console.log(message));
    return cityMessages;
  }
};

user.printPlacesLined();

// Challenge area

const multiplier = {
  number: [1, 2, 3, 4, 5],
  multiplyBy: 3,
  multiply() {
    return this.number.map((value, index) => value * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
