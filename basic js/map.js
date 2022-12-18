// Object에서 .map()함수

var ex = {'a':1,'b':2,'c':3};
object1.keys(ex).map(function(el)) {
    ex[el] *= 2;
};
console.log(ex);
// {a:2,b:4,c:6}
//기존의 ex 배열은 새로운 value값을 가진 배열이 된다.