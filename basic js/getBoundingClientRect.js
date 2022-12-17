// Element.getBoundingClientRect() 메서드는 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 
// 제공하는 DOMRect 객체를 반환합니다.
// 한마디로 사용자의 움직임을 파악하여 가져오는 객체이다.

//html
div {
    width: 400px;
    height: 200px;
    padding: 20px;
    margin: 50px auto;
    background: purple;
  }

//script
let elem = document.querySelector('div'); // div 구역 선택 
let rect = elem.getBoundingClientRect(); // div element의 경계 클라이언트 사각형을 나타내는 DOMRect객체를 찾는다.
for (var key in rect) { // rect에서 나온 key값을 순서대로 가져옴.
  if(typeof rect[key] !== 'function') { // rect[key]가 함수가 아닌 경우
    let para = document.createElement('p'); // 아래 텍스트가 추가될 공간을 para라고 선언.
    para.textContent  = `${ key } : ${ rect[key] }`; // 가져온 key 값과 rect array의 value값 가져옴. 이를 택스트로 para에 넣음.
    document.body.appendChild(para); // html문서에 para 텍스트 노드를 추가한다.
  }
}

//expect
x : 33
y : 50
width : 440
height : 240
top : 50
right : 473
bottom : 290
left : 33


 
//*********** scrolling *********//

// html
<div></div>
    <div id="example"></div>
    <div id="controls"></div>

// css
div#example {
    width: 400px;
    height: 200px;
    padding: 20px;
    margin: 50px auto;
    background: purple;
    }
      
    body { padding-bottom: 1000px; }
    p { margin: 0; }

// script
    function update() {
        const container = document.getElementById("controls"); // controls 문서를 container라고 선언.
        const elem = document.querySelector('div'); // div로 선언된 문서 선택
        const rect = elem.getBoundingClientRect(); // div로 선언된 문서에서 일어나는 정보를 rect로 선언.
      
        container.innerHTML = ''; // container에 들어갈 문자 예시
        for (let key in rect) { // div 문서에서 일어나는 정보의 키값을 순서대로 가져온다.
          if(typeof rect[key] !== 'function') { // rect array가 함수가 아닌 경우
            let para = document.createElement('p');
            para.textContent  = `${ key } : ${ rect[key] }`;
            container.appendChild(para);
          }
        }
      }
      
      document.addEventListener('scroll', update); // scroll 활동이 이루어 질때마다, update함수가 작동된다.
      update();