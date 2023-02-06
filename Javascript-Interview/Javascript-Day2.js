/*let points = 10;

function displayDouble() {
  let number = 2;
  number = points * number; 
  console.log(number); 
}

displayDouble();*/

//--------------------------------------
//SHADOWING.....

/*let number = 10;

function displayDouble() {
  //a new variable is defined with the same name as variable on line 1 - outer scope
  var number =6;  // shadowing in a javascript
  number *= 2;
  console.log(number); 
}

displayDouble();
console.log(number);*/ 

//----------------------------------------//

/*let num =10;
if(true){
    var num =6;
    console.log(num);
}
console.log(num);*/

//------------------------------------------//
/*var hello =undefined;
console.log(hello());

function hello(){
    return 'hello';
}


const hello = ()=>{
    return 'hello';
}*/

//--------------------------------------//
//FIRST CLASS FUNCTIONS

/*const sayHi = () => {
    return 'Hi ';
 };
 
 const greeting = (hiFn, name) => {
   console.log(hiFn() + name);
 };
 
 // Pass `sayHi` as an argument to `greeting` function
 greeting(sayHi, 'Mikaela!');*/

const greeting2 = () => {
    return () => {
       return ()=>{
            return 6;
       }
    };
  };
  
  // invoke the inner function
// console.log('greeting2',greeting2);
// const returnedFunction = greeting2();
// console.log(returnedFunction);
// returnedFunction(); //Output
//console.log(greeting2);

//Q. Create an add function using the concept of currying
/*const add = (a) =>{
    return (b)=>{
        return a+b;
    }
}

const addSix = add(6);
const addSeven =add(7);
const addHundred = add(100);

console.log(add(6)(5),add(7)(5),add(100)(6));

add(5,6) ===> add(5)(6) //currying */

//CLOSURES----------------------

/*var a =6;

function hello(){
    let b =7;
    return a+b;
}

console.log(hello());*/

/*function numberGenerator() {

    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
       console.log(num); //
    }
    num++;
    return checkNumber;
   }
   
   var number = numberGenerator();
   number(); */


function sayHello() {
    var say = function() {
        console.log(hello);  
    }
    say();
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    say();
}
   
sayHello();




