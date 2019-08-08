class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi i am ${this.name} :)`;
  }

  getDescription() {
    return `${this.getGretting()} i am ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  getDescription() {
    if (!this.semester) {
      return `${super.getDescription()}`;
    } else {
      return `${super.getDescription()} , Semester: ${this.semester}`;
    }
  }
}

class Traveler extends Person {
  constructor(name,age,homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getDescription() {
    if (!this.homeLocation) {
      return `${super.getDescription()}`;
    } else {
      return `${super.getDescription()} , i am visiting from  ${
        this.homeLocation
      }`;
    }
  }
}

const me = new Student("Alex Kentros", 24, 2);
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const me2 = new Traveler("Alex Kentros", 24, "California");
console.log(me2.getDescription());

const other2 = new Traveler(undefined,undefined,"Miami");
console.log(other2.getDescription());
