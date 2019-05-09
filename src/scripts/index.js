//console.log('Hello World!!!!');


// let app = (function(){
//     let carId  = 123;
//     let getId = function(){
//         return carId;
//     };

//     return{
//         getIdP: getId
//     };
    
// })();

// console.log(app.getIdP());

// //call
// let o = {
//     cardId: 123,
//     getId: function(){
//         return this.cardId;
//     }
// };

// let newCar = {cardId: 456};

// console.log( o.getId.call(newCar) );//456

//apply
// let o = {
//     cardId: 123,
//     getId: function(prefix, prefix2){
//         return prefix + this.cardId + prefix2;
//     }
// };

// let newCar = {cardId: 456};

// console.log( o.getId.apply(newCar, ['ID: ', 'd']) );//456

// //bind
// let o = {
//     cardId: 123,
//     getId: function(){
//         return this.cardId;
//     }
// };

// let newCar = {cardId: 456};

// let newFn =  o.getId.bind(newCar);
// console.log(newFn());//456

// // Arror Functions no paramenter

// let getId = () => 123;

// console.log(getId());

// //Arrow Function with parameters 

// let getId = (prefix, prefix2) => prefix + prefix2;

// console.log(getId(4,2));

// //Arrow Function with return statement 

// let getId = (prefix, prefix2) => {
    
//     return prefix + prefix2;

// };
// console.log(getId(4,2));

// //Arrow function with underscore

// let getId = _ => 123;

// console.log(getId());

//Default parameters and interpolating
// let trackCar = function(cardId, city = 'NY'){
//     console.log(`Tracking ${cardId} in ${city}.`);
// };

// console.log( trackCar(123) );

// console.log( trackCar(123, 'Chicago'));


// //Constructor Function

// function Car(id){
//     this.carId = id;
//     this.start = function(){
//         console.log('start: ' + this.carId);
//     };
// }

// let car = new Car(123);
// car.start();  

// Prototypes

// function Car(id){
//     this.cardId = id;
// }

// Car.prototype.start =  function(){
//     console.log('start: ' +  this.cardId);
// };

// let car = new Car(123);
// car.start();

// //expanding protoypes

// String.prototype.hello = function(){
//     return this.toString() + ' Hello ';
// };

// // console.log('foo'.hello()); // Foo Hello

// let car = {
//     id:123,
//     style: 'convertible'
// };

// console.log(JSON.stringify(car));



// let carIds = [
//     { carId: 123 },
//     { carId: 456 },
//     { carId: 789 }
// ];

// console.log( JSON.stringify(carIds));


// // Parsing JSON


// let jsonIn = `[
//     {"carId" : 123},
//     {"carId": 456},
//     {"carId": 789}
// ]`;

// let carIds = JSON.parse(jsonIn);
// console.log(carIds);



//Array Interation

// let carIds = [
//     {cardId: 123, style: 'sedan'},
//     {cardId: 456, style: 'convertible'},
//     {cardId: 789, style: 'sedan'}
    
// ];

// //carIds.forEach(car => console.log(car));

// carIds.forEach((car,index) => console.log(car,index));


// //Array Filtering


// let carIds = [
//     {cardId: 123, style: 'sedan'},
//     {cardId: 456, style: 'convertible'},
//     {cardId: 789, style: 'sedan'}
    
// ];

// let convertibles = carIds.filter(
//     car => car.style === 'convertible'
// );

// console.log(convertibles);

// //Array Testing

// let carIds = [
//     {carId: 123, style: 'sedan'},
//     {carId: 456, style: 'convertible'},
//     {carId: 789, style: 'sedan'}
    
// ];

// let result = carIds.every(
//     car => car.carId > 0
// );

// console.log(result);

// //Locate the first Match

// let carIds = [
//     {carId: 123, style: 'sedan'},
//     {carId: 456, style: 'convertible'},
//     {carId: 789, style: 'sedan'}
    
// ];

// let car = carIds.find(
//     car => car.carId > 500
// );

// console.log(car);

/********CLASSES AND MODULES *******/


// class Car{

//     constructor(id){
//         this.id = id;
//     }
//     indentity(suffix){
//       return `Car Id: ${this.id} ${suffix}`;
//     }
// }

// let car = new Car(5);
// car.id = 456;
// console.log(car.indentity('!!!'));

// //Inheritance

// class Vehicle{
//     constructor(){
//         this.type = 'car';
//     }
//     start(){
//         return `Starting: ${this.type}`;
//     }
// }

// class Car extends Vehicle{
//    start(){
//        return 'In car ' + super.start();
//    }
// }

// car = new Car();

// console.log(car.start());


// //Creating a Module

// import { Car } from './models/car.js';

// let car = new Car(123);
// console.log(car.id);

// /****PROGRAMMING THE BOM AND DOM**** */
// //Window Object
// import {Car} from './models/car.js';

// year = 1956;

// console.log(innerWidth);

//Timers

////Set time out - runs once
// let timeOutId = setTimeout(function(){
//     console.log('1 second passed');

// }, 1000);

// clearTimeout(timeOutId);// if need to cancel...


// //set Interval --keeps running

// let intervalId = setInterval(function(){
//     console.log('1 second passed');
// }, 1000);

// clearInterval(intervalId);//if need to cancel


// //The location Object

// console.log(location.href);

// // The document Object

// console.log(document.body);

// //Selecting DOM Elements

// let first = document.getElementById("first");
// let p1 = document.getElementsByClassName("p1");
// let name1 = document.getElementsByClassName("name1");
// let p3 = document.getElementsByClassName("p3");
// let tag = document.getElementsByTagName("p");

// console.log(tag);


// //Modifying DOM Elements

// let first = document.getElementById("first");

// first.style.color = 'blue';

// console.log(first);









