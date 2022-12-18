// fetch 가져오다.
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // 또는 'PUT' 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), //data를 가져오고 형태를 json 문자열 방식으로 한다.
})
.then((response) => response.json())
.then((data) => {
  console.log('성공:', data); //then응답으로 리스폰스를 json 형태로 가져오고 성공하면 진행, 오류가 발생하면 catch로 오류 내보냄.
})
.catch((error) => {
  console.error('실패:', error);
});
