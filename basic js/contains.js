// Node.contains() 메소드는 주어진 인자가 node 의 자손인지, 아닌지에 대한 Boolean 값을 리턴합니다.

//이 함수는 요소가 페이지의 body 안에 있는지 검사합니다.
function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
  }