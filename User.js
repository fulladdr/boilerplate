const mongoose = require('mongoose');//moongoose 가져오기

const bcrypt = require('bcrypt');

const saltRounds = 10

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //delete space
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,//일반 user, 관리자
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {//token 유효기간
        type: Number
    }

})

userSchema.pre('save', function(next){
    //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function(err, salt) {//error가 나면 error, 아니면 salt를 가져온다
        if (err) return next(err)//error가 났을 경우
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {//hash를 하는데, postman에 넣는 비밀번호를 넣어줌
            // Store hash in your password DB.
        });
    });
    next()
})//User model을 저장하기 전에 function

const User = mongoose.model('User', userSchema)

module.exports = { User } //다른 곳에서도 쓸 수 있게 하기