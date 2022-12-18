###덧셈과 뺄셈
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




###사칙연산 (몫과 소수점)
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(Math.floor(num1 / num2)); //나눗셈에서 소수점이 나오므로 정수만을 출력하기 위함.
console.log(num1 % num2);

###숫자를 받고 계산을 한뒤 리턴
let input = require('fs').readFileSync("/dev/stdin").toString();
const A = parseInt(input); //꼭 A라고 선언을 하지않아도 toString을 빼면 숫자로 적어도됨.
console.log(A-5);
 

### map 메서드 - 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열로 반환
ex)
const array1 = [1,4,5,6];
const map1 = array1.map(x => x*2); //이때 array1은 1,4,5,6그대로임. map1이 바뀐 숫자로 저장됨.
console.log(map1);
알아야할점 : 배열값이 들어있는 인덱스에 대해서만 호출. 할당이 안되거나 삭제되면 호출안됨.



### map을 이용한 문제 backjoon 3003
let input = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
// map(숫자)를 이용하여 배열을 바꿀수있도록 해줌.

const chess = [1, 1, 2, 2, 2, 8];
let answer = input.map((i, index) => {      //원래 개수 - 내가 가지고 있는 개수
  return chess[index] - i;
})
//정확하지 않지만 내 해석 : input.map(i,index) 여기서 i는 위의 map(number)값을 의미하고, index는 또 다른 배열을 받을 공간임.
//chess[index]를 받으므로써 위에 선언한 chess의 배열 값을 하나씩 데려옴.

console.log(...answer);
// 나온 값을 배열해야하므로 ...answer 사용

###각 숫자들을 하나씩 나누어 생각해야하는 경우
// array.split('')로 분리하여 구한다.
const fs=require('fs');
const [num1,num2]=fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num=parseInt(num1);
const multipleNum=num2.split('').map(Number);
let result=multipleNum.reverse().map(x=>x*num); //reverse()를 통해 일의 자리 수부터 하나씩 넣는다.
result.push(num*parseInt(num2));
console.log(result.join('\n');
추가적으로 출력할때 각 줄에 하나씩 값을 출력해야할때 array.join('\n')을 통해 가능
string.split('')을 이용해 쉽게 한 문자마다 끊어낼수있다. ex) '123' -> 1, 2, 3

###Number()와 parseInt()
공통점: 둘 다 문자열 타입의 숫자를 Number 타입으로 바꿔주는 역할을 함. 흔히 연산을 위해 사용된다.

차이점 :
parseInt() : 문자열을 파싱해서 숫자를 찾는 기능이 있다. 하지만 문자열로 시작하면 이 함수도 찾지 못한다. 그리고 소수점 아래는 출력하지 못한다.
Number() : 숫자를 생성하는 역할을 한다. 소수점도 OK



