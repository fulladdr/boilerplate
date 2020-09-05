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
    var user = this;
    //비밀번호를 암호화 시킨다.
    if (user.isModified('password')){//password 변환될때만
        bcrypt.genSalt(saltRounds, function(err, salt) {//error가 나면 error, 아니면 salt를 가져온다
            if (err) return next(err)//error가 났을 경우
            bcrypt.hash(user.password,salt,function(err, hash){
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    }else{
        next()
    }
})//User model을 저장하기 전에 function

userSchema.methods.comparePassword = function(plainPassword, cb){
    //plain password와 암호화된 비밀번호 비교
    //복호화가 불가능하기 때문에 암호화해서 두가지를 비교한다
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err), //다를 경우
        cb(null, isMatch)
    })
}

const User = mongoose.model('User', userSchema)

module.exports = { User } //다른 곳에서도 쓸 수 있게 하기