const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser')
const config = require('./config/key')
const { User } = require("./models/User")
//application/x-www-form-urlencoded 타입의 데이터를 분석해서 가져올 수 있게해줌
app.use(bodyParser.urlencoded({ extended: true }))
//application/json 타입의 데이터를 분석해서 가져올 수 있게해줌
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI
).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))




app.get('/', (req, res) => res.send('Hello Dsdaaabin!'))

app.post('/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ //status(200)은 성공했다는 표시.
            success: true
        })
    }) //몽고DB에서 오는 메소드 -> 위의 정보들이 유저모델에 저장이 됨.

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//lsof -i TCP:5001