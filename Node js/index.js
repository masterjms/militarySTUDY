const express = require('express')
const app = express()
const port = 3000

// app.get -> http메소드 : 요청의 목적, 종류를 알리는 수단. get과 post가 있다. 
// get은 주소창에서 데이터를 전달. post는 내부적으로 body에 정보를 담아 전달
// 슬래쉬는 상세정보를 담기위한 라우팅이다. /만 있으면 기본 정보를 뜻한다.
app.get('/',(req,res) => { // 기본 루트로 들어오는 요청과 응답에 대하여 받는다면
    res.send('Hello World') // 응답으로 다음과 같은 문자열을 보내라
})

app.listen(port, ()=> { // 서버는 듣고 있다. 다음과 같은 포트(3000)로 들어오면
    console.log(`listening on port ${port}`) // 다음과 같은 포트 번호로 듣고 있다고 프린트
})
