//변수 선언이 런타임에서 되는 것이 아니라, 그 이전 단계에서 먼저 실행되기 때문이다. 
//자바스크립트 엔진은 소스코드를 한 줄씩 순차적으로 실행하기에 앞서, 변수 선언을 포함한 
//모든 선언문(ex. 변수 선언문, 함수 선언문 등)을 찾아내 먼저 실행한다. 
//즉, 변수 선언이 어디에 있든 상관없이 다른 코드보다 먼저 실행되는 특징을 호이스팅(hoisting)이라 한다.
//변수 선언 뿐만 아니라, var, let, const, function, function*, class 키워드를 사용해 선언한 모든 식별자(변수, 함수, 클래스 등)는 호이스팅이 된다.


// var 키워드의 문제점
//변수 중복 선언 가능하여, 예기치 못한 값을 반환할 수 있다.
// 함수 레벨 스코프로 인해 함수 외부에서 선언한 변수는 모두 전역 변수로 된다.
// 변수 선언문 이전에 변수를 참조하면 언제나 undefined를 반환한다.


// let 키워드로는 변수 중복 선언이 불가하지만, 재할당은 가능하다.
let name = 'kmj'
console.log(name) // output: kmj

let name = 'howdy' // output: Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'howdy'
console.log(name) // output: howdy


// const도 let과 마찬가지로 재선언이 불가하며, 더 나아가 재할당도 불가하다. 재할당의 경우, 원시 값은 불가능하지만,
//객체는 가능하다. const 키워드는 재할당을 금지할 뿐, '불변'을 의미하지 않는다.
// 원시값의 재할당
const name = 'kmj'
name = 'howdy' // output: Uncaught TypeError: Assignment to constant variable.

// 객체의 재할당
const name = {
  eng: 'kmj',
}
name.eng = 'howdy'

console.log(name) // output: { eng: "howdy" }