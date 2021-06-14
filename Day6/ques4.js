/*Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red Green White Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

function arrayToStringJoin(arr, ch) {
  return arr.join(ch);
}

myColor = ["Red", "Green", "White", "Black"];
console.log(arrayToStringJoin(myColor, " "));
console.log(arrayToStringJoin(myColor, ","));
console.log(arrayToStringJoin(myColor, "+"));
