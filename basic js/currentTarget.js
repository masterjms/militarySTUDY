// 인터페이스 의 currentTarget읽기 전용 속성은 Event이벤트가 DOM을 통과할 때 이벤트의 현재 대상을 식별합니다.

function hide(e) {
    e.currentTarget.style.visibility = 'hidden';
    console.log(e.currentTarget);
}

// 마치 this와 같은 역할을 한다. this === e.currentTarget