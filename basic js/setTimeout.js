// 전역 setTimeout()메서드는 타이머가 만료되면 함수 또는 지정된 코드 조각을 실행하는 타이머를 설정합니다.

setTimeout(code)
setTimeout(code, delay)

setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, 1000) // 1초뒤 위 문자열이 프린트된다.

//주의할점
setTimeout(() => {console.log("this is the first message")}, 5000);
setTimeout(() => {console.log("this is the second message")}, 3000);
setTimeout(() => {console.log("this is the third message")}, 1000);
  // Output:

  // this is the third message
  // this is the second message
  // this is the first message
  
// 위와같이 다른 함수의 실행을 일시중지 시키지 않는 비동기 함수다. 
// 다른 함수가 종료된 뒤 실행되는 코드를 작성하려면 promise 문법을 사용하자