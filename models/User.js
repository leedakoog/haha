const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,  //공백을 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    lastlname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    Image: String,
    token: {
        type: Stirng
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}