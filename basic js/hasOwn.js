// 지정된 객체가 자신의 속성 으로 표시된 속성을 가지고 있는 경우
// Object.hasOwn()정적 메서드가 반환 됩니다 . 
// 속성이 상속되었거나 존재하지 않는 경우 메서드는 true,false를 반환합니다 . 

hasOwn(instance, prop)

const object1 = {
    prop: 'exists'
  };
  
  console.log(Object.hasOwn(object1, 'prop'));
  // expected output: true
  
  console.log(Object.hasOwn(object1, 'toString'));
  // expected output: false
  
  console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
  // expected output: false
  

// 사용 목적 : 속성의 존재를 테스트하기 위해 hasOwn 사용하기
const example = {};
Object.hasOwn(example, 'prop');   // false - 'prop' has not been defined

example.prop = 'exists';
Object.hasOwn(example, 'prop');   // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, 'prop');   // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, 'prop');   // true - own property exists with value of undefined