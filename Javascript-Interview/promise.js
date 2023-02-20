
//Q. What is a callback hell
const makeBurgerCallbackHell = nextStep => {
    getBeef(function(beef) {
      cookBeef(beef, function(cookedBeef) {
        getBuns(function(buns) {
          putBeefBetweenBuns(buns, beef, function(burger) {
            nextStep(burger);
          });
        });
      });
    });
  };


const makeBurgerPromise = () => {
    return getBeef()
      .then(beef => cookBeef(beef))
      .then(cookedBeef => getBuns(beef))
      .then(bunsAndBeef => putBeefBetweenBuns(bunsAndBeef));
  };
  
  // Make and serve burger
//makeBurgerPromise().then(burger => serve(burger));
 
/*console.log('before');
let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Promise resolved!')
        },3000);
});
console.log('between');
setTimeout(()=>{
    console.log('in settimeout');
},2000);

promise.then((res)=>{
    console.log('res is',res);
});

console.log('after');*/

//Another way of writing promises


// Promise chaining
/*const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
let promiseChain = new Promise((resolve,reject)=>{
    fetch(API_URL).then((res)=>{
        res.json().then((finalRes)=>{
            console.log('final res',finalRes);
        })
    })
})

promiseChain.then((res)=>{
    console.log('res from api is',res);
});*/

//Q1.
/*const promise = new Promise((resolve, reject) => {
    reject(Error('Some Error Occurred'));
  })
  .catch(error => console.log(error))
  .then(error => console.log('in then',error));*/


/*const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
  });
  
promise1.then(() => {
    console.log(3);
  });
console.log(4);*/

/*const promise1 = new Promise((resolve, reject) => {
    console.log(1);
  });
  promise1.then(() => {
    console.log(3);
  });
  console.log(4);*/

/*const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve('resolve1')
  })
  const promise2 = promise1.then(res => {
    console.log(res)
  });
  promise2.then((res)=>{
    console.log('promise 2 return',res);
  })
  console.log('promise1:', promise1);
  console.log('promise2:', promise2);*/




// let count =(function count(){
//   let c = 0;
//   return ()=>{
//       c+=1;
//       return c;
//   }
// }());


//  console.log(count()); //1
//  console.log(count()); //2
//  console.log(count()); //3

//https://blog.bitsrc.io/recent-advances-and-improvements-to-javascript-promises-561790897a5d

//promise.all vs promise.race vs promise.allSettled and promise.any

let promise1 = new Promise((res,rej)=>{
  setTimeout(()=>{
    res('promise 1 res');
  },1000)
});

let promise2 = new Promise((res,rej)=>{
  setTimeout(()=>{
    res('promise 2 res');
  },2000)
});

let promise3 = new Promise((res,rej)=>{
  setTimeout(()=>{
    res('promise 3 res');
  },3000);
});


Promise.all([promise1,promise2,promise3]).then((final)=>{
  console.log('final output',final);
});

// Promise.race([promise1,promise2,promise3]).then((final)=>{
//   console.log('final',final);
// })

Promise.any([promise1,promise2,promise3]).then((final)=>{
  console.log('final',final);
});

//Pollyfill of promise1.all,promise.race,promise.any




 





