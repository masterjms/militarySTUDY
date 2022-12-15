// 문자열의 조합을 표현의 단순화

var clickCount = 0;

function showClickCount() {
   clickCount++;
   var msg = '버튼의 클릭 횟수는 ' + clickCount + '회 입니다.';
   alert( msg );
}
// format 함수를 사용하면
var clickCount = 0;

function showClickCount() {
   clickCount++;
   var msg = format( '버튼의 클릭 횟수는 {0}회 입니다.', clickCount );
   alert( msg );
}

//쉽게 보면
let soMany = 10;
console.log(`This is ${soMany} times easier!`);
// "This is 10 times easier!"