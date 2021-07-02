'use strct'

//state : pending ->fulfilled or rejected
// Producer vs Consumer

// 1. Producer


//시간이 꽤 걸리는 거.. ex. 네트워크에서 가져오는거, 파일을 읽어오는거
//=> 비동기적으로 처리해야함


// 1. PRODUCER
// 새 프로미스가 만들어질 땐 , executor 콜백이 자동으로 바로 실행된다.
const promise = new Promise((resolve, reject)=> {
    // doing some heacy work()
    console.log('doing something');
    setTimeout(()=>{
      resolve('ellie');
   //     reject(new Error('no network')) //Reject는 Error 리턴함
    },2000);
});

// 2. Consumer: then, catch, finally,

promise
.then((value)=> {// Promise가 정상적으로 수행될 떄 이렇게 코드
    console.log(value);
})
.catch(error =>{// then 이 Promise 반환해서 catch가능 (Chaining이라고함)
    console.log(error);
})
.finally(()=>{console.log('finally')}) //성공 실패 관계없이 이거 수행


//3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve(1), 1000);
});


fetchNumber
.then(num => num *2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num -1), 1000);
    });
})
.then(num => console.log(num));