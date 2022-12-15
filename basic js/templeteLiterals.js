// 템플릿 리터럴은 이중 따옴표 나 작은 따옴표 대신 백틱(` `) (grave accent) 을 이용합니다. 
// 템플릿 리터럴은 또한 플레이스 홀더를 이용하여 표현식을 넣을 수 있는데, 
// 이는 $와 중괄호( $ {expression} ) 로 표기할 수 있습니다.


// 1. Multi-line strings
// 일반적으로 엔터를 입력하기 위한 방법 : \n 을 사용한다.
console.log("string text line 1\n"+
"string text line 2");
// "string text line 1
// string text line 2"

//하지만 백틱 `` 을 사용하면 아래와 같이 그냥 엔터를 갈기면 된다.
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2


// 2. Expression interpolation
//백택을 사용하면 아래와 같이 읽기 쉬운 코드(syntactic suger)를 쓸수있다.
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."


// 3. Tagged templates
var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {

  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  // 사실 이 예제의 string에서 표현식이 두 개 삽입되었으므로
  // ${age} 뒤에는 ''인 string이 존재하여
  // 기술적으로 strings 배열의 크기는 3이 됩니다.
  // 하지만 빈 string이므로 무시하겠습니다.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // 심지어 이 함수내에서도 template literal을 반환할 수 있습니다.
  return str0 + personExp + str1 + ageStr;

}

var output = myTag`that ${ person } is a ${ age }`;

console.log(output);
// that Mike is a youngster
