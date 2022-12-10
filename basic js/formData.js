const formData = new FormData(); 
//formdata는 일련의 key와 value쌍을 생성한다.
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123'); // formData.append(name, value) : 새로운 key값과 value 를 지정한다.
formData.append('avatar', fileField.files[0]);
// 키와 벨류 이외에 파일 이름도 지정할 수 있다.

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData,
})
.then((response) => response.json())
.then((result) => {
  console.log('성공:', result);
})
.catch((error) => {
  console.error('실패:', error);
});
