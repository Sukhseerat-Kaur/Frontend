/*Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/


a1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var freqMap = {};
for(var i=0; i<a1.length; i++){
    if(a1[i] in freqMap) freqMap[a1[i]]+=1;
    else freqMap[a1[i]]=1;
}

console.log(freqMap);

var mostFreq=a1[0];
for(var i=0; i<a1.length; i++){
    if(freqMap[a1[i]] > freqMap[mostFreq]) mostFreq=a1[i];
}
console.log(mostFreq);
