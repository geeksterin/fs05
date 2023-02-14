
// ES6 QUESTIONS .................................

let array =[1,[1,2],3,4];
let barray = [...array];


//console.log(array,barray);

//------SPREAD OPERATOR------------
function sum(x,y,z) {
    return x + y + z;
  }
  
const numbers =[1,2,3];

//console.log(sum(...numbers));


//-------- REST OPERATOR-----------


function abc(...values) {
    return values;
  }
//console.log(abc(1,2,3));  //[1,2,3];

function sum(...args) {
    let sum =0 ;
    for (let arg of args) {
      sum += arg;
    }
    console.log(sum);
  }
sum(1,2,3,4,5,6,7,8,100);   // 10




// function multiply(a)
// {
//    return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }


// multiply(2)(4)(5);

// let arr=['hello','world'];

/*----------OBJECTS AND PROTOTYPES AND PROTOTYPE INHERITANCE-----*/

let obj={
    name:'Vijit',
    age: 28,
    getData: function(){
        console.log(this.name+' '+this.age);
    }
}

console.log(obj.getData()); //


//Objects can be created in 2 ways:


//constructor function 

function PersonNew (name,age) {
    this.name = name,
    this.age = age
}

const person2 = new PersonNew('Vijit',27);
const person3 = new PersonNew('Ashish',26);
console.log(person2.name);
console.log(person3.name);

// function Person(name)
// {
//     this.name=name;
// }
// Person.prototype.title='Hello customer';
// let person1=new Person('Vijit');
// let person2=Person('Vijit');



// console.log(person1.title);

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let admin = new Person();
let guest = new Person();

// adding new property to constructor function
Person.prototype.passwordFunc = function(pass)
{
    if(pass=='123')
        return true;
    else 
        return false;
};

// console.log(guest.passwordFunc(234)); // Male
// console.log(person2.gender); // Male


// let person3=new Person();
// console.log(person3.gender);


let animal = {
    eats: true
   };
   
   
let rabbit = {
    jumps: true,
    sleeps: true
};
   
rabbit.__proto__ = animal; 
console.log('rabbit',rabbit,animal);

let animal2 = {
    eats: true,
    walk() {
     alert("Animal walk");
   } 
};
   let rabbit2 = {
    jumps: true, 
    __proto__: animal2 
   };
   
   //rabbit2.walk(); // Animal walk


/* arr.__proto__  Array.prototype
arr.__proto__.__proto__ and Object.prototype
arr.__proto__.__proto__.__proto__ = null(End of chain)
This is prototype chaining*/

/*fun.__proto__ and Function.prototype
fun.__proto__.__proto__ is Object.prototype
*/

// Array double function which doubles anything in an array.



//Questions on Prototype:

// Q. Array  you have to modify the array and create a function which doubles the array?

let arr3=[1,2,3,4,5];

function double(x){
    return x*2;
}

console.log('double map',arr3.map(double));

// Array.prototype.double=function ()
//     {
//         console.log('value of this',this);      
//     }

arr3.__proto__.double = function(){
    return this.map((item)=>item*2);
}
//pollyfill for double
console.log('arr double',arr3.double());



// let arr4=[5,6,7,8];
// console.log(arr4.double());

//Q.What are pollyfills in javascript?

let arrayMap = [1,2,3,4,5];

// arrayMap.map((item)=>{
//     return item*item;
// },);

Array.prototype.myMap = function(callback){
   
    let finalArr=[]
    for(let i=0;i<this.length;i++){
        finalArr.push(callback(this[i]));
    }
    return finalArr;
}

console.log('my map solution',arrayMap.myMap((item)=>{
    return item*item}));


// MAP

/*const arr1=[6,2,3,4,5];

console.log(arr1.map((item)=>{
    if(item%2==0)
        return item*2;
    else
        return item;
}));*/



//FILTER

const arr2=[15,24,-2,45,50];

let moreThan40 =arr2.filter((item)=>{
    return item>30;
});

// 0 false undefined null ----?false in javascript
console.log('filter',moreThan40);


/*const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
   ];

const moreThan90 = students.filter(item=>item.grade>=90).map(item=>item.name).filter(item=>item==='Katie');

console.log(moreThan90);*/


//Reduce

/*let arr3=[2,3,4,5,1];

let sum=0;
for(let i=0;i<arr3.length;i++)
{
    sum+=arr3[i];
}

let arr4=arr3.reduce((accumulator,currentValue)=>{
    accumulator+=currentValue;
    return accumulator;
},0); 


// maximum of the array using reduce and minimum

console.log(arr3.reduce((acc,curr)=>{
    if(curr<acc)
        acc=curr;
    return acc;
},arr[0]));*/

   







// some extra questions

const users=[
    {fname:'vijit',lname:'mishra',weight:85},
    {fname:'saurav',lname:'patel',weight:65},
    {fname:'luke',lname:'cage',weight:85},
    {fname:'logan',lname:'paul',weight:25}
]



//Q1.Calculate fullname apply map,filter and reduce array of fullnames
let fullnames=users.map(item=>item.fname+' '+item.lname);
//console.log(fullnames);

//Q2. fullnames of people whose weight<70;
let fullnames70=users.filter(item=>item.weight<70).map(item=>item.fname+' '+item.lname);
//console.log(fullnames70);

//Q3. Create an object {85:2,65:1,25:1} initialValue 
// frequency counting according to wieghts
let frequencyCount = {85:2,65:1,25:1}


let fq ={};

for(let i=0;i<users.length;i++){
    if(!fq[users[i].weight])
        fq[users[i].weight] = 0;
    fq[users[i].weight]+=1;
}

arr2.reduce((acc,curr)=>{

})

console.log(fq);

//CLOSURES/CURRYING QUESTIONS --------------------------


//Q3. Create a function addNumber which adds any function with n number?

// addTen(6); 16
// addSix(11); 17

const addFunc = (num1) =>{
    
    return (num2)=>{
        return num1+num2;
    }
}

// let addTen = addFunc(10); //
// console.log(addTen(20)); //30
// console.log(addTen(5));
// console.log(addTen(25));
// console.log(addTen(40));



// console.log(addTen(7));
function square()
{
    let arr =[];
    for(let i=0;i<10000000;i++)
    {
        arr[i]=i*i; //0 1 4 9 16 25 .....
    }
    return (index)=>{
        return arr[index];  
    }
}

// console.time();
// let newSquare = square(); 
// console.timeEnd();
// console.time();
// console.log(newSquare(1000));
// console.timeEnd();
// console.time();
// console.log(newSquare(2));
// console.timeEnd();



