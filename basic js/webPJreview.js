// 코드 분석해보기 
const reviews = [ //reviews 라는 변수 선언하고 reviews 라는 객체에 id, name, job 등 여러 아이템을 담음.
    { //총 3개의 array를 추가했다. 추가한 array의 내부에는 5가지의 세부사항을 담았다. [{a},{b}.{c}] 형식의 array.
      id: 1,
      name: "WEB DEVELOPER",
      job: "Jang Min-Sung",
      img:
        "https://itimg.chosun.com/sitedata/image/202203/03/2022030300868_0.jpg",
      text:
        "Welcome to my place. This is my first web site dev-proj. We ultimately persue concise code and synchronized to user. We avoid the simple visual effect but also not stylish. Our design and technology will lead the world.",
    },
    {
      id: 2,
      name: "Git Hub",
      job: "portpolio",
      img:
        "https://miro.medium.com/max/318/1*1OKmA2EdGln8O6RCVORgGg.png",
      text:
        "Introduce My Git page! We study HTML, C, JavaScript, Python. We hope to see you in here. > https://github.com/masterjms <",
    },
    {
      id: 3,
      name: "How to make this?",
      job: "develop process",
      img:
        "https://cdn.codingworldnews.com/news/photo/202103/img_2676_0.jpg",
      text:
        "In past, I want to make my own web site. Because people who develop something big, all of them have their own site. They talk about their code review, or feeling after completing the project. So I conclude to make it while studying. It was harder than I thought to renew things that had already been made. It takes larger hours than I expected. Now, I did it.",
    },
  ];


  // select items
  const img = document.getElementById("person-img"); //person-img라는 html class를 img라고 선언
  const author = document.getElementById("author"); // getElementById : id가 지정된 경우에 속성이 지정된 문자열과 일치하는 객체를 가져온다.
  const job = document.getElementById("job"); // id가 없는 경우는 아래와 같이 querySelector()를 사용하여 요소를 찾는다.
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn"); // .prev... 는 id가 없으므로 querySelector로 가져온다.
  const nextBtn = document.querySelector(".next-btn");

//let과 const차이 - let은 변수에 재할당이 가능하다. 하지만 const는 변수 재선언과 변수 재할당이 모두 불가능하다.
// let 과 var의 차이 - let과 const는 한번 변수를 정하면 변하지 않는다. var은 변수 변경이 가능.

// set starting item 
let currentItem = 0;

// load initial item - 첫번째 아이템만 보여준다. 이는 next버튼을 누르면 다시 나오지 않는다.
//DOMcontentLoaded : (event)초기 hmtl문서를 완전히 불러오고 분석했을때 발생. 스타일 시트나 이미지는 기다리지 않음
window.addEventListener("DOMContentLoaded", function () { // 즉 window 운영체제에서 html문서를 다불러왔는지 확인
  const item = reviews[currentItem]; // review의 array에 currentItem이라는 숫자 변수를 넣고 item이라고 선언.
  img.src = item.img; // review[]번째 array의 이미지 소스를 img.src라고 선언. 즉 currentItem은 0이므로 reviews[0]의 값을 불러온다.
  author.textContent = item.name; // review[]번째 array의 이름 텍스트를 author.textcontent라고 선언
  job.textContent = item.job; // "
  info.textContent = item.text; // "
});
// addEventListener(type,listener)


// show person based on item
function showPerson(person) {  //함수선언 
  const item = reviews[person]; // review[]번째 array값을 item이라고 선언
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () { //nextBtn이라는 html class에서 이벤트리스너로 클릭이라는 기능을 듣도록 선언, 이때 일어날 일을 함수로 선언.
  currentItem++; // nextBtn을 클릭했을때 -> currentItem의 값을 1추가
  if (currentItem > reviews.length - 1) { // reviews.length는 [{0},{1},{2}] 로 총 3이다. 1을 빼면 2다.
    currentItem = 0; //currentItem의 값이 2보다 크면 currentItem을 0으로 초기화한다. 반복을 시키기 위함.
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem); // showPerson함수의 숫자에 따라 next 또는 prev 가 나온다.
});

//궁금증 
// 1. 왜 initial item을 만들었을까? - 로드 처음만 나오는 페이지를 만들기위함인가? 이렇게 하면 next또는 prev버튼을 눌러도 이 화면은 나오지않는다.
// 2. showPerson함수를 복잡하게 만든 느낌이든다. intial item과 showperson함수를 통합할수없는가? (const item으로 변수를 통일시킨 이유가 궁금함.)
// 3. 위의 대한 아이디어 : currentItem = 0으로 선언하고 review[currentItem]으로 통합해버리고, nxt, prev으로 +또는-시켰으면 되지않을까.

// remade
let currentItem = 0 ;
function personinfo(currentItem) {
    const Item = reviews[currentItem];
    img.src = Item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}