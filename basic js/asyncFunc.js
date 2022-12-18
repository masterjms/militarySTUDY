// AsyncFunction객체를 반환하는 하나의 비동기 함수를 정의합니다.
// 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 Promise를 사용하여 결과를 반환합니다

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();

// 이 식은 async 함수의 실행을 일시 중지하고 전달 된 Promise의 해결을 기다린 다음
// async 함수의 실행을 다시 시작하고 완료후 값을 반환합니다.


// ex)
var resolveAfter2Seconds = function() { 
    console.log("starting slow promise"); // 이 문구를 내보낸다.
    return new Promise(resolve => { // 리턴값으로 promise, resolve 되면 setTimeout
      setTimeout(function() {
        resolve(20);
        console.log("slow promise is done");
      }, 2000); // 2초뒤 위 문구를 내보낸다.
    });
  };

  var resolveAfter1Second = function() {
    console.log("starting fast promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(10);
        console.log("fast promise is done");
      }, 1000); // 1초뒤 문구를 내보낸다.
    });
  };

  var sequentialStart = async function() {
    console.log('==SEQUENTIAL START==');

    // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
    const slow = await resolveAfter2Seconds();
    console.log(slow);

    const fast = await resolveAfter1Second();
    console.log(fast); // 2초뒤 실행되고, 다시 1초가 흐른뒤 실행
  }

  var concurrentStart = async function() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second(); // 두 함수가 동시에 생성되어 await시작한다. 즉 시간이 동시에 흐르기 시작한다.
// 중요한것은 동시에 시간이 흐르는 것은 맞지만, 2초뒤 첫번째함수, 1초뒤 두번째 함수가 뜨는 것이 아니라, 2초 걸리는 함수가 완료될때까지, 1초 걸리는 함수는 대기하기때문에 총 2초뒤에 두 함수가 동시에 끝난 것 처럼 보인다.
    console.log(await slow);
    console.log(await fast); // waits for slow to finish, even though fast is already done!
  }

  var stillConcurrent = function() {
    console.log('==CONCURRENT START with Promise.all==');
    Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    });
  }

  var parallel = function() {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message)=>console.log(message));
    resolveAfter1Second().then((message)=>console.log(message)); // 동시에 시간이 흐르기 시작, 1초뒤 1초짜리 함수 종료, 또 다시 1초뒤 2초짜리 함수 종료
  }

  sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
  // wait above to finish
  setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
  // wait again
  setTimeout(stillConcurrent, 7000); // same as concurrentStart
  // wait again
  setTimeout(parallel, 10000); // trully parallel: after 1 second, logs "fast", then after 1 more second, "slow"