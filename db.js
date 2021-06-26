const mongoose = require('mongoose')
const mongourl = 'mongodb+srv://digboi123:digboi123@cluster0.80gsg.mongodb.net/mern-pizza'
mongoose.connect(mongourl, {useUnifiedTopology:true,useNewUrlParser: true})
const db = mongoose.connection
db.on('connected',()=>{
    console.log('mongodb connect successfully')
})
db.on('error',()=>{
    console.log('failed connection')
})

module.exports = mongoose