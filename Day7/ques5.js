/*Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased */

var cylinder = {
  radius: 3,
  height: 4,
  volume: function () {
    var volume = 2 * 3.14 * this.radius * this.height;
    volume = volume.toFixed(4);
    return volume;
  },
};

console.log(cylinder.volume());
