

var arr=["hello","welcome","Hi","333"];
var arrString = JSON.stringify(arr);
console.log(arrString);

var cars=[{name:"fiat", year:2020}];
var carsString = JSON.stringify(cars);
localStorage.setItem("cars", carsString);
console.log(carsString);
//קריאה בחזרה
var readcarsString = localStorage.getItem('cars');
//string to object:
var readcarsObject = JSON.parse(readcarsString);
console.log (readcarsString); //an object

localStorage.removeItem('cars');

localStorage.clear();