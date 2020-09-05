const express = require("express");//express 모듈을 가져옴
const app = express(); //새로운 express app을 만듬
const port = 5000   //port number은 마음대로 설정 가능
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

//application.x-ww-form-urlencoded
//해당 type 문서를분석해서 가져오게해줌
app.use(bodyParser.urlencoded({ extended: true }));
//json

const mongoose = require("mongoose")
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false//to prevent error
}).then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))


app.get('/', (req, res) => {//루트 디렉토리로 가면 hello world 출력 가능
    res.send('happy jaewon');
})

app.post('/register', (req, res) => {
    //회원 가입할 때 피욯나 정보를 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다
    const user = new User(req.body)//request body에 정보를 넣어줌
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })//실패시
        return res.status(200).json({
            success: true
         })
         //json형식으로 성공했음을 전달해줌
     })
 })

 app.post('/login', (req, res) => {
    //database에서 email 번호 찾기
    User.findOne({email:req.body.email}, (err, userInfo) => {
        if (!userInfo){
            return req.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
    })
    //요청된 이메일을 데이터베이스에서 있다면 비밀번호가 맞는 비밀번호인지 확인

    user.comparePassword(req.body.password ,  (err, isMatch) => {
        if (!isMatch) 
        return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."})
    //비밀번호까지 맞다면 토큰을 생성하기
        user.generateToken((err, user) =>{

        })
    })
 })

app.listen(port, () =>  //port 5000번에서 출력을 해줌
    console.log(`Example app listening at http://localhost:${port}`)
);