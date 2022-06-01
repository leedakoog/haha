const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,    //공백을 없애주는 역할
        unique: 1      //같은 이메일은 사용하지 못하게
    },
    password: {
        type: String,
        maxlength: 50
    },
    lastlname: {
        type: String,
        maxlength: 50
    },
    role: {            //관리자 or 유저
        type: Number,
        default: 0
    },
    Image: String,
    token: {           //유효성 관리
        type: String
    },
    tokenExp: {        //토큰을 사용할 수 있는 기간 관리
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸줌

module.exports = { User } //다른 파일에서도 사용가능하게