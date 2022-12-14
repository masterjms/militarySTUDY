// 웹페이지의 특정 부분을 주기적으로 업데이트해줘야 하거나,
// 어떤 API로 부터 변경된 데이터를 주기적으로 받아와야 하는 경우가 있는데요. 
// 이럴 때는 자바스크립트의 setInterval() 함수를 사용할 수 있습니다.
// setInterval() 함수는 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 
// 사용합니다. 함수 API는 setTimeout() 함수와 대동소이한데요. 
// 첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 
// 두번째 인자로 반복 주기를 밀리초(ms) 단위로 받습니다.

// 대표
setInterval(code, delay)
// ex)
setInterval(() => console.log(new Date()), 2000);