// for...in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 
// 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다.

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"



// for..of 구문
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

// ex2)
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30