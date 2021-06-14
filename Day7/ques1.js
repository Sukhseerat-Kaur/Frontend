/*Write a JavaScript program to list the properties of a JavaScript object. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
Sample Output: name,sclass,rollno*/

function listProperties(obj) {
  console.log(Object.keys(obj));
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
listProperties(student);
