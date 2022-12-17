// getAttribute() 은 해당 요소에 지정된 값을 반환 합니다. 
var attribute = element.getAttribute(attributeName);

// ex)
let div1 = document.getElementById("div1");
let align = div1.getAttribute("align");

alert(align); // id가 "div1"인 요소(element)의 align 값을 보여줍니다.

// 값이 존재하지 않으면, null 이나 ""을 반환한다.