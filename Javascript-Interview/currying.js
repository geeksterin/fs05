
//console.log(sum(3)(4));

function sum(n1){
  return (n2)=>{
  	return n1+n2;
  }
}
// Infinite currying
//sum(1)(2)(3)(4)(5)....(n)()
/*console.log(sum(1)(2)(3)(4)(5)(6)(7)());
console.log(sum(1)(2)(3)());
console.log(sum(19)(2000)(3000)());

function sum(n1){ //28
		return (n2)=>{ //7
        if(!n2)
          return n1; //28
    	return sum(n1+n2); //5019 + undeined
    }
}*/

// Flattening an array
let unflattenedArr = [1,8,9,[2,3],[4,5,[6,7,[9,10,[11,12]]]]]; //[1,2,3,4,5,6,7]

let flattenedArr=[];
function flattenArr(unflattenedArr=[9,10]){

    unflattenedArr.forEach((el,i)=>{  
        if(Array.isArray(el)){
            flattenArr(el);
        }
        else{
            flattenedArr.push(el);
        }
    });  
    return flattenedArr; 
}
console.log('x is',flattenArr(unflattenedArr));

//flattening of objects