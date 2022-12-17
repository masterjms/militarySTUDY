// HTMLElement.offsetTop있는 상위 요소인 의 상단 내부 테두리를 기준으로 현재 요소의 외부 테두리 거리를 반환합니다 .

const d = document.getElementById("div1");
const topPos = d.offsetTop;

if (topPos > 10) {
  // object offset is more
  // than 10 pixels from its parent
}