// Event 인터페이스의 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우,
// 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.

var myTextbox = document.getElementById('my-textbox');
myTextbox.addEventListener('keypress', checkName, false);

function checkName(evt) {
    var charCode = evt.charCode;
    if (charCode != 0) {
      if (charCode < 97 || charCode > 122) {
        evt.preventDefault();
        displayWarning(
          "영문 소문자만 입력하세요."
          + "\n" + "charCode: " + charCode + "\n"
        );
      }
    }
  }
  