const express = require('express')//express 모듈을 가져옴
const app = express() //새로운 express app을 만듬
const port = 5000   //port number은 마음대로 설정 가능


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://fulladdr:<980402>@fulladdr.id96y.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false//to prevent error
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {//루트 디렉토리로 가면 hello world 출력 가능
    res.send('Hello World!')
})

app.listen(port, () => { //port 5000번에서 출력을 해줌
    console.log(`Example app listening at http://localhost:${port}`)
})