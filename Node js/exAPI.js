const express = require('express')
const app = express()
const port = 3000


app.get('/',(req,res) => { 
    res.send('Hello World') 
})

app.get('/dog',(req,res) => {  // localhost:3000/dog라고 입력했을때 강아지라고 나옴
    res.send('<h1>강아지<h1>') 
})

app.get('/cat',(req,res) => { 
    res.send("<a href = 'https://www.youtube.com'>유튜브</a>") //html로도 보낼수있음
})

app.get('/dog',(req,res) => { 
    res.send({'sound':'멍멍'})  //JSON형태로 보낼수도있다. send 대신 json이라고 써도됨
})

app.listen(port, ()=> {
    console.log(`listening on port ${port}`) 
})