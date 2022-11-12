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
불러온 입력값을 tostring()으로 자료형을 변환해주고 split('')으로 띄어쓰기 구분하여 input에 저장
~여기서 자료형을 string으로 변환하지 않으려면 readFileSync(0,'utf8').split(' ')으로 하여 문자열을 반환할 수 있다.


💡  참고 -  함수 선언 방법 비교
function 함수명() {
    // 코드
}
// 함수 호출은 선언 전,후 모두 가능​


const 함수명 = function() {
    // 코드
}
// 함수 호출은 선언 후에 해야함

최종적으로,
const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(inputData[0]); //parseInt는 자료형을 뜻하며 정수를 뜻함. 소수라면 parseFloat
const B = parseInt(inputData[1]);
console.log(A+B);\

최종 두번째 방법
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(input[0]) + Number(input[1]));


사칙연산 (몫과 소수점)
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2)); //나눗셈에서 소수점이 나오므로 정수만을 출력하기 위함.
console.log(num1 % num2);
  
