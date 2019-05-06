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


//Constructor Function

function Car(id){
    this.carId = id;
    this.start = function(){
        console.log('start: ' + this.carId);
    };
}

let car = new Car(123);
car.start();  