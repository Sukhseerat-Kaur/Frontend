/*3. Write a JavaScript program to get the length of a JavaScript object. 
Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; */

function lenObj(obj) {
  var arrKeys = Object.keys(obj);
  return arrKeys.length;
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(lenObj(student));
