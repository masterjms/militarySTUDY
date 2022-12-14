// 코드 분석해보기
const months = [ //먼저 각각 달에 대한 array 선언.
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [ // 그다음 요일에 대한 array 선언.
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const giveaway = document.querySelector('.giveaway'); // .giveaway라는 html class를 giveaway로 선언.
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  let tempDate = new Date(); // 시간에 대한 전체데이터(년,월,일)를 가져오고 이를 tempdate로 선언
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate(); // tempDate에서 date를 가져온값을 tempday라고 선언.;
  // months are ZERO index based;
  const futureDate = new Date(2023, 10, 16, 8, 30, 0); // 새로운 날짜-디데이를 선언. futuredate라고 선언. 
  // Date () 에는 year, month, day, hour, minutes, second 의 값을 받을 수 있음

  const year = futureDate.getFullYear(); // 위에 입력한 미래날짜의 년도를 가져오고 이를 year로 선언.
  const hours = futureDate.getHours(); // 시간을 가져옴
  const minutes = futureDate.getMinutes(); // 분을 가져옴.
  
  let month = futureDate.getMonth(); // 미래 월을 가져오고 month라고 선언.
  month = months[month]; // month는 위에 달이름을 모두 적어둔 months array의 month값이다. 이때 (month) 속의 자료형은 숫자다.
  const weekday = weekdays[futureDate.getDay()]; // 위에 요일을 적어둔 weekdays array [미래 날짜] 로 들어간다. 
  var dates = futureDate.getDate(); // date -> app.js와 선언 함수 충돌. dates로 변경
  // 날짜 또한 미래 날짜에서 가져온 날짜를 dates라고 선언.

  giveaway.textContent = `giveaway ends on ${weekday}, ${dates} ${month} ${year} ${hours}:${minutes}am`;
  // html 텍스트 중에 giveaway class의 textContent에 적힌 문자에서 값을 가져온다.

  const futureTime = futureDate.getTime(); //마찬가지로 시간도 미래 시간에서 가져오고 futureTime이라고 선언.
  function getRemaindingTime() { //남아있는 시간을 계산하는 함수
    const today = new Date().getTime(); //오늘, 즉 현재의 시간을 가져온다.
    //Date 객체의 getTime() 메서드는 1970년 1월 1일 00시 00분 00초 UTC를 기준으로 경과 한 밀리초를 반환합니다.
    // ex) 1671017671738


    const t = futureTime - today; //미래 시간에서 현재시간을 빼어 남은 시간을 계산한다.
    // 1초 = 1000미리초
    // 1분 = 60초
    // 1시간 = 60분
    // 1일 = 24시간
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000; //
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay; // 24시간, 60분 60초, 1000밀리초를 나누면 날짜가 나온다.
    days = Math.floor(days); // math.floor 함수는 소수점을 버리고 정수만 남겨준다.
    let hours = Math.floor((t % oneDay) / oneHour); // 각각 남은 시간을 계산한다.
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
    // set values array
    const values = [days, hours, minutes, seconds]; // 각각 계산된 시간들을 하나의 array로 만들어 value로 묶는다.
    function format(item) { // 남은 시간을 나타내는 틀을 잡는 함수선언
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  }
  // countdown;
  let countdown = setInterval(getRemaindingTime, 1000);
  //set initial values
  getRemaindingTime();
  footer;
