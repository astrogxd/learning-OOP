/* what is Object oriented programming ---  

// why use and do OOP ---- 
* often asked in technical interviews 
* modularity for easier troubleshooting
* Reuse of code through
* effective problem solving

*/

// const student = {
//   id: 9737,
//   name: "Amogelang Matlala",
//   age: 20,
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   },
// };

// student.addSubject("afrikaans");
// student.addSubject("Maths");
// student.addSubject("Physics");
// student.addSubject("Bio");
// console.log(student);

/*constructer function = instantiate objects
/function student(id, name, age, subjects) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.subjects = subjects;
}
const Amo = new student(1, "Amogelang", 20, ["English", "Maths"]);
console.log(Amo);
*/

/* class --- basically a blueprint
class Student {
  constructor(id, name, age, subjects) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.subjects = subjects;
  }
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
    console.log(this.subjects);
  }
}

const amo = new Student(1, "Amogelang", 20, ["English", "Maths"]);
amo.addSubject("Visual-arts");
const lebo = new Student(2, "Lebo", 20, ["English", "Maths", "Afrikaans"]);
console.log(amo, lebo);

// addicng functions in class
class Movie {
  constructor(id, title, starring, genres) {
    this.id = id;
    this.title = title;
    this.starring = starring;
    this.genres = genres;
  }

  addGenre(...genre) {
    this.genres = [...this.genres, ...genre];
  }

  addStars(...stars) {
    this.starring = [...this.starring, ...stars];
  }
}

const ted = new Movie(2, "Ted", ["Mark wallberg"], ["comedy"]);
ted.addStars("Seth Mcfarley", "that one guy");
ted.addGenre("drama");

console.log(ted);

*/

// inheritence  can make a super class where you can make sub classes that can use the function of the superclass
//POLYMORPHISM
//
class Person {
  constructor(id, name, age, email) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }
  showDetails() {
    return `
    ID: ${this.id}
    Name: ${this.name}
    age: ${this.age}
    email: ${this.email}
    `;
  }
}

class Student extends Person {
  constructor(id, name, age, subjects, email) {
    super(id, name, age, email);
    this.subjects = subjects;
  }
  addSubject(...subject) {
    this.subjects = [...this.subjects, ...subject];
    console.log(this.subjects);
  }

  showDetails() {
    // using polymorphism basically overriding and using our own details function
    console.log(` 
    ${this.name} is a student 
    ${super.showDetails()}
    Subjects: ${this.subjects}`);
  }
}

class Teacher extends Person {
  constructor(id, name, age, subjects, email) {
    super(id, name, age, email);
    this.subjects = subjects;
  }
  showDetails() {
    // using polymorphism basically overriding and using our own details function
    console.log(` 
    ${this.name} is a teacher 
    ${super.showDetails()}
    Subjects: ${this.subjects}`);
  }
}
class Parent extends Person {
  constructor(id, name, age, email) {
    super(id, name, age, email);
  }
  showDetails() {
    // using polymorphism basically overriding and using our own details function
    console.log(` 
    ${this.name} is a Parent 
   details: ${super.showDetails()}`);
  }
}

const amo = new Student(
  1,
  "Amogelang",
  20,
  ["Maths", "English", "Science"],
  "amatlala1510@gmail.com"
);
amo.addSubject("uhm testing");
amo.showDetails();

const parent = new Parent(14, "Hope", 47, "hopeluv@gmail.com");
parent.showDetails();
