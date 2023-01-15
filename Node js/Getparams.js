const express = require('express')
const app = express()
const port = 3000

// 파라미터값으로 라우팅하기
// get방식은 주소창으로 정보를 전달한다. params, query
// 파라미터로 값을 받는 이유 : 수많은 주소창이 있는데 그때마다 코드를 추가할 수 없기때문

// param 사용
app.get('/user/:id',(req,res) => { 
    const q = req.params
    console.log(q.id)
    res.send({'userid': q.id}) 
})

// query 사용
app.get('/user/:id',(req,res) => { 
    const q = req.query // 주소창에 ?뒤에 key와 value구조로 입력
    res.send({'userid':q.name}) 
})

