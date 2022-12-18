// await연산자는 Promise를 기다리기 위해 사용됩니다.
// await 문은 Promise가 fulfill되거나 reject 될 때까지 async 함수의 실행을 일시 정지하고, 
//  Promise가 fulfill되면 async 함수를 일시 정지한 부분부터 실행합니다.
// 이때 await 문의 반환값은 Promise 에서 fulfill된 값이 됩니다.
// 만약 Promise가 reject되면, await 문은 reject된 값을 throw합니다. << 중요

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x); // 내보낼 값 = x
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  
  f1(); // 즉 2초 뒤 x 값인 10을 프린트한다.


// then 문법도 가능하다.
  async function f2() {
    const thenable = {
      then: function(resolve, _reject) {
        resolve('resolved!')
      }
    };
    console.log(await thenable); // resolved!
  }

  f2();


// Promise가 아니라면, 해당 값은 resolve된 Promise로 변환되며 이를 기다립니다.
async function f2() {
    var y = await 20;
    console.log(y); // 20
  }
  f2();

//만약 Promise가 reject되면, reject된 값이 throw됩니다.
async function f3() {
    try {
      var z = await Promise.reject(30); // promise의 reject경우 30을 보내라.
    } catch(e) {
      console.log(e); // 30
    }
  }
  f3();
//아래와 같이 try를 안쓰고도 가능하다.
var response = await promisedFunction().catch((err) => { console.error(err); });
  // response will be undefined if the promise is rejected