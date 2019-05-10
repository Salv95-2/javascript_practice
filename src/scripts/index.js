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

// Promise and Error Handling




/*******PROMISES AND ERROR HANDLING ******/

// //Errors in Javascript

// let car = newCar;

// console.log('continuing...');

// //Error Handling Using try and catch

// try{
//     let car = newCar;
// }
// catch(error){
//     console.log('error: ', error);
// }

// console.log('continuing...');

// //Finally

// try{
//     let car = newCar;
// }
// catch(error){
//     console.log('error: ', error);
// }
// finally{
//     console.log('this always executes');
// }

// //Developer Defined Errors


// try{
//     //code here...
//     throw new Error('my customer error');
// }
// catch(error){
//     console.log('error: ', error);
// }
// finally{
//     console.log('This always executes');
// }

// //Creating a Promise - reperents a value we do not have access to yet

// let promise = new Promise(function(resolve, reject){
//     setTimeout(resolve, 100, 'someValue');
// });

// console.log(promise);

// //Settling a Promise

// let promise = new Promise(function(resolve, reject){
//     setTimeout(resolved, 1000, 'someValue');
// });

// promise.then(
//     value => console.log('fullfilled: ' + value),
//     error => console.log('rejected' + error)
// );


/****DATA ACESS USING HTTP *****/

// //HTTP Request Using XHR
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         console.log(this.responseText);
//     }
// };

// xhttp.open("GET", "http://5cd4e3f29c31c600148a9303.mockapi.io/api/v1/users"
// , true);
// xhttp.send();

//HTTP Requests Using jQuery


// import $ from 'jquery';

// let promise = $.get("http://5cd4e3f29c31c600148a9303.mockapi.io/api/v1/users");

// promise.then(
//     data => console.log('success: ', data),
//     error => console.log('error: ', error)
// );

// //HTTP POST Using jQuery

// import $ from 'jquery';
// let user = {
//     name: 'Super Man',
//     avatar: 'mark.jpg'
// };
// let promise = $.post(
//     "http://5cd4e3f29c31c6001 48a9303.mockapi.io/api/v1/users", user
// );
//  promise.then(
//      data => console.log('data: ', data),
//      error => console.log('error:', error) 
//  );

/*******Forms********/

// //Preventing Form Submission
// let form = document.getElementById('user-form');

// console.log(form);

// form.addEventListener('submit', event => {
//     //prevent the browser from submitting the form
//     event.preventDefault();
// });

//Accessing Form Fields

// let form = document.getElementById('user-form');

// console.log(form);

// form.addEventListener('submit', event => {
//     let user = form.elements['user'];
//     let avatarFile = form.elements['avatar-file'];

//     console.log(user.value, avatarFile.value);
//     event.preventDefault();
// });

// //Showing Validation Errors

// let form = document.getElementById('user-form');

// console.log(form);

// form.addEventListener('submit', event => {
//     let user = form.elements['user'];
//     let userError = document.getElementById("user-error");

//     if(user.value.length < 4){
//         userError.textContent = 'Invalid entry';
//         userError.style.color = 'red';
//         user.style.borderColor = 'red';
//         user.focus();

//         let avatarFile = form.elements['avatar-file'];

//         console.log(user.value, avatarFile.value);
//         event.preventDefault();
        
//     }
    
// });


// //Posting From Javascript

// import $ from 'jquery';


// let form = document.getElementById('user-form');



// form.addEventListener('submit', event => {
//     let user = form.elements['user'];
//     let avatarFile = form.elements['avatar-file'];

//     let posting = {
//         user: user.value,
//         avatarFile: avatarFile.value
//     };

//     let promise = $.post(
//         "http://5cd4e3f29c31c600148a9303.mockapi.io/api/v1/users",posting);

//     promise.then(
//         data => console.log("success: ", data),
//         error=> console.log("error: ", error)
//     );
    
//     event.preventDefault();

//     console.log("hello");
// });



/********SECURITY AND BUILDING FOR PRODUCTION ******/

// //Chrome Developer Tools and Security
// window.foo = 'secret code';

// //Application Data Security
// //Don't store passwords, secrets or other sensitive information
// //Don't use global variables
// //Aasume hackers can read your JS code and access all data sent
// //to a browser


// //Security and the eval() Function

// let inputString = "alert('Hello');";
// eval(inputString);


//Building your Application from Production

console.log("Hello World!");












