const mongoose = require('mongoose');//moongoose 가져오기

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

const user = mongoose.model('User', userSchema)

module.exports = { User } //다른 곳에서도 쓸 수 있게 하기