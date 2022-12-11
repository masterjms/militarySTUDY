// arguments 객체는 함수에 전달된 인수에 해당하는 Array 형태의 객체입니다.
// arguments 객체는 모든 함수 내에서 이용가능한 지역 변수이다. 객체를 이용하여 함수 내에서
// 모든 인수를 참조할 수 있다. 호출할때 제공한 인수 각각에 대한 항목을 가지고 있다.
// 인덱스는 [0]부터 시작한다.

function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3
  }
  
  func1(1, 2, 3);
//주의 할것은 array 속성인 map,pop같은 기능은 없다. 그러나 array로 변환가능하다.

function func(a) {
    arguments[0] = 99; // updating arguments[0] also updates a
    console.log(a);
  }
  func(10); // 99
  
  function func2(a) {
    a = 99; // updating a also updates arguments[0]
    console.log(arguments[0]);
  }
  func2(10); // 99

  // 기본 매개변수를 사용하는 함수에서는, 아래와 같은 결과가 나온다.
  function bar(a=1) {
    arguments[0] = 100;
    return a;
  }
  bar(10); // 10
