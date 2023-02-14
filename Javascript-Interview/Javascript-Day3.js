
//Lexical Scope Closure

/*var x=5;

function a(){  //  x =5
    var y=3;
    function b(){ // y ,x
        let z=4;
        function c(){   
            let m =7;
        }
    }
}*/



function quesTwo(){
    console.log('before')
    let a=50; 
    setTimeout(()=>{
        let b=a;
        console.log('timeout executed',b);
    },0);
    
    console.log('after');
}
//quesTwo();




//callback function---->makes javascript asynchronous.

// setTimeout(()=>{},2000)

/*function a()
{
    var k=50;
    function b()
    {
        console.log('b called');
    }
    return b;  
}

var m=a()();*/


//How we accessed an inside function in outside scope.



/***** CLOSURE START ********************************/


// EXAMPLE-1
function a()
{
    let x=100;
    function b()
    {
        console.log(x);
        return x;
    }
    return b; // This doesnt only returns the function but the complete closure.
}
//This b function remembers its lexical scope and hence value of x is preserved.
var returnedFunction=a();
returnedFunction();




//EXAMPLE-2
function a()
{
    var x=100;
    function b()   // Closure formed for b x=100 or x=200? x=100
    {
        return x;
    }
    var x=200;
    return b;
}
// var m=a();
// console.log(m());



//EXAMPLE-3
function a()
{
    var x=100;
    function b()
    {
        var y=200;
        function c()
        {
            console.log(x,y); //100,200
            return x+y;
        }
        return c;
    }
    return b;
}

// console.log('hewllo',a()()());
 



//Data-hiding

/*function dataHiding(){
    let x=1;
    function multiply()
    {
        console.log(x);
        x=x*2;
    }
    return multiply;
}

var mult = dataHiding();*/

/*function a()
{
   let a=20;
   function b()
   {
      let c=10;
      return a+c;
   }
   return b;
}

var callLater=a();
console.log(callLater()());*/

//1 2 3 4 5

// for(let i=1;i<=5;i++){ 
//     setTimeout(()=>{
//         console.log(i);   // closures
//     },i*1000);
// }
function testingClosure(){
    {
        let i =1;
        setTimeout(()=>{
            console.log(i);   // closures  [i=4]
        },i*1000);
    }
    {
        let i =2;
        setTimeout(()=>{
            console.log(i);   // closures [i=4]
        },i*1000);
    }
    {  
        let i =3;
        setTimeout(()=>{
            console.log(i);   // closures [i=4]
        },i*1000);
    }

}
//testingClosure();

console.log(mult());


