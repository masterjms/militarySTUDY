//email AJAX 코드 분석

var form = document.getElementById("my-form"); // 문서에서 my-form 부분을 가져와 form이라고 선언.
                     
async function handleSubmit(event) { // promise구문을 포함한 함수 hadleSubmit함수 선언
event.preventDefault(); // 기본 제출 동작을 방지하기 위한 메서드 
// 기본 동작은 특정 정해진 방식으로 서버에 요청을 보내는 것. 이 메서드가 없으면 폼은 기본 동작을 사용하여 제출되고 나머지 스크립트 fetch 등의 이벤트 수신기 는 실행되지 않는다.
var status = document.getElementById("my-form-status"); // 메세지가 보내졌는지 오류인지 나타내는 공간을 status라고 선언.
var data = new FormData(event.target); // 새로운 폼데이터 개체를 만들고 event.target이라는 이벤트 트리거 요소를 나타낸다.
// formdata 로 가져오면 양식의 데이터를 검색하여 키-값 쌍으로 직렬화할 수 있기 때문이다.
fetch(event.target.action, { // event.target에서 일어난 action에 대해 가져오는 양식을 정한다.
method: form.method,
body: data,
headers: {
'Accept': 'application/json' // json을 이용했음을 헤더에 남김.
}
}).then(response => { // 응답에 대한 경우를 정한다.
if (response.ok) { // 응답이 성공적인 경우
status.innerHTML = "Thanks for your submission!"; // my-form-status에 글을 남긴다.
form.reset() // 그 뒤에 폼의 텍스트 상자에 있는 글을 모두 지운다.
    } else { // 아닌경우, 즉 응답이 성공적으로 오지 않은 경우
response.json().then(data => { // 응답을 json으로 분석하고 서버에서 반환된 오류를 확인한다.
if (Object.hasOwn(data, 'errors')) { // 데이터에 errors라는 프로퍼티가 존재하는 경우
status.innerHTML = data["errors"].map(error => error["message"]).join(", ") // 데이터의 오류 내용을 문자열에 매핑되어 상태메세지에 표시. .join을 통해 여러 오류가 존재하면 연결해준다.
 } else { // 오류가 없으면
    status.innerHTML = "Oops! There was a problem submitting your form" // 이 문구를 보낸다.
}
})
}
}).catch(error => { // 데이터를 가져오거나 응답을 구문 분석하는 동안 오류가 발생했을 경우를 대비한 캐치 메소드
status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit); // submit버튼을 누르면 위 함수가 작동한다.