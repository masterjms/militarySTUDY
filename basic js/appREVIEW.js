// 이 스크립트는 html 화면 네브 사이드바와 버튼 화면 스크롤등의 기능을 담은 스크립트다.
// ********** set date ************
// select span
const date = document.getElementById("date"); // footer 부분에 추가될 년도를 가져오기 위한 선언이다.
date.innerHTML = new Date().getFullYear(); // 가져온 년도를 innerHtml에 넣는다.

// ********** close links ************ 
// 토글을 클릭했을때 바가 열리고 닫히는 기능. 즉 넓은 화면에서는 쓰이지 않고 바가 생기는 좁은 화면에서 쓰이는 기능임
const navToggle = document.querySelector(".nav-toggle"); // 네브부분의 토글을 연결하는 선언이다. 
const linksContainer = document.querySelector(".links-container"); // 네브바에 있는 버튼전체를 가르키는 선언이다.
const links = document.querySelector(".links"); // 버튼 하나하나를 가르키는 선언이다.

navToggle.addEventListener("click", function () { // 네브 토글에 대한 이벤트 리스너 함수다. 클릭을 했을 때 함수가 작동된다.
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;  // links의 height값을 가져오는 선언이다.
  const containerHeight = linksContainer.getBoundingClientRect().height; //links들이 뭉쳐있는 컨테이너 구역의 height를 가져오는 선언.
  if (containerHeight === 0) { // links들이 뭉쳐있는 컨테이너의 높이 값이 0일때
    linksContainer.style.height = `${linksHeight}px`; // 컨테이너 css 높이 값은 links버튼 높이 크기의 픽셀이 된다.
  } else {
    linksContainer.style.height = 0; // 컨테이너 값이 0이 아니면, 컨테이너 높이 값은 0이다.
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav"); // nav 구역 문서를 navbar라고 선언.
const topLink = document.querySelector(".top-link"); // 탑링크 문서를 toplink라고 선언.

window.addEventListener("scroll", function () { // 윈도우 화면에서 스크롤이 일어나면 다음 함수를 진행한다.
  const scrollHeight = window.pageYOffset; // 스크롤 양에 대하여 scrollHeight로 선언
  const navHeight = navbar.getBoundingClientRect().height; // 네브바의 높이 이동량을 navHeight로 선언
  if (scrollHeight > navHeight) { // 만약 아래로 스크롤 한 픽셀값이 네브바의 높이 이동량보다 많다면
    navbar.classList.add("fixed-nav"); // 네브바의 class를 추가하고 그 이름을 fixed-nav라고 한다.
  } else { // 아니면, 즉 아래로 스크롤 한 픽셀값보다 네브 바 높이 값이 더 많다면
    navbar.classList.remove("fixed-nav"); // fixed-nav를 지운다.
  }
  // setup back to top link
  if (height > 500) { // 높이가 500보다 높으면 
    topLink.classList.add("show-link"); // 탑링크에 있는 show-link클래스를 보여준다
  } else {
    topLink.classList.remove("show-link"); // 아니면 지운다.
  }
});

// ********** smooth scroll ************ // 버튼 클릭하면 그 배너로 이동하는 기능
// select links
const scrollLinks = document.querySelectorAll(".scroll-link"); // scroll-link문서 전체를 선택하는 선언
scrollLinks.forEach((link) => { // 스크롤 링크들 각각 하나의 버튼 마다 다음의 행동을 실시한다.
  link.addEventListener("click", (e) => { // scroll-link에 속한 클릭한 링크 엘리먼트에 대한 행동
    // prevent default
    e.preventDefault(); // ?
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1); // scroll-link에 속해있는 href에 속해진 값 array의 1번째 값부터 끝까지 반환하는 선언
    const element = document.getElementById(id); // 이를 줄여서 element라고 부르도록 한다.

    const navHeight = navbar.getBoundingClientRect().height; // nav바의 높이를 navHeight라고 선언.
    const containerHeight = linksContainer.getBoundingClientRect().height; // 링크 컨테이너의 높이를 containerHeight라고 선언.
    const fixedNav = navbar.classList.contains("fixed-nav"); // fixed-nav가 있는 지에 대한 boolean값을 fixedNav라고 선언
    // 이때 fixed-nav는 맨 위 화면에서 아래로 내려가면서 따라오는 기능이다.
    let position = element.offsetTop - navHeight; // element의 외부 테두리 거리에서 nav의 높이를 뺀값을 position이라고 선언
    // 즉 클릭했을때 그 위치로 이동하기 위해서는 element.offsetTop위치로 이동해야하는데, 이는 nav의 값을 반영한것이 아니므로 빼주어 위치를 맞게 조정한다.

    if (!fixedNav) { // fixedNav상태가 아닌 경우, 즉 페이지 맨 위에 위치한 경우
      position = position - navHeight; // 포지션 값 = 포지션값에서 nav높이를 뺀 값
    }
    if (navHeight > 82) { // navHeight가 82보다 큰경우, 즉 좁은 화면에서 바를 눌러 링크 컨테이너를 연 경우
      position = position + containerHeight; // 포지션보다 링크 컨테이너의 높이만큼 더 이동해서 가야함.
    }

    window.scrollTo({  // 문서의 지정된 위치로 스크롤된다.
      left: 0, // 왼쪽으로는 0픽셀만큼
      top: position, // 상단으로는 position값 픽셀 만큼
    });
    // close
    linksContainer.style.height = 0; // 링크컨테이너가 열려있는 경우 스크롤 되면서 컨테이너의 height를 0으로 해줌으로써 닫는다.
  });
});
// calculate heights