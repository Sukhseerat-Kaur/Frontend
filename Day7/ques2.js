/* Write a JavaScript program to delete the rollno property from the following object. 
Also print the object before or after deleting the property. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };*/

function delProperty(obj, property) {
  delete obj[property];
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(student);
delProperty(student, "rollno");
console.log(student);

//changes have already been made in the object even when it is printed before calling. !!
