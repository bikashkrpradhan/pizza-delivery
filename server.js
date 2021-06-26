const express = require('express')
const db = require('./db')
const pizza = require('./models/pizzaModel')
const pizzasRoute = require('./routes/pizzasRoute')

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('server is working')
})

app.use('/api/pizzas/', pizzasRoute)

const port = process.env.PORT || 8000
app.listen(port,()=>'server is listening')