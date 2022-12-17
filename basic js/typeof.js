// typeof 연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환합니다.

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"
