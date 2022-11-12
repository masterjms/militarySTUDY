#덧셈과 뺄셈
/*두 정수 a와 b를 입력받고 a+b 출력*/

입력값이 있으므로
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('')

여기서 fs모듈이란? - 파일 시스템에 접근하는 모듈  - 파일 생성 및 삭제, 읽거나 쓰기 가능

const fs = require('fs')로 모듈을 불러옴.
모듈이란? - 기능들 function이 모여있는 하나의 파일 - 라이브러리?

예를들어 1번 경우
const printHelloWorld = () => {
  console.log('Hello Wolrd');
};

module.exports = {
  printHelloWorld
};
2번경우
const func = require('./a.js');
func.printHelloWorld();

const input = fs.readFileSync("/dev/stdin").toString().split(' ')를 해석해보자면
fs모듈에서 readFileSync함수로 standard input을 참조해서 불러온다.
불러온 입력값을 tostring()으로 자료형을 변환해주고 split('')으로 띄어쓰기 구분하여 input에 저장\


💡  참고 -  함수 선언 방법 비교
function 함수명() {
    // 코드
}
// 함수 호출은 선언 전,후 모두 가능​


const 함수명 = function() {
    // 코드
}
// 함수 호출은 선언 후에 해야함
