// api만들기 실습 
// get/sound/:name 으로 주소를 바꾸어 name에 따라 다른 울음을 내도록 하자

const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name == "dog") {
        res.json({'sound':멍멍})
    } else if (name == "cat") {
        res.json({'sound':야옹})
    } else {
        res.json({'sound':알수없음})
    }
})

// CORS 설치
app.use(cors())