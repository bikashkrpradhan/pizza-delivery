const express = require('express')
const router = express.Router()
const Pizza = require('../models/pizzaModel')

router.get('/getallpizzas', async(req,res)=>{
    try{
       const pizzas = await Pizza.find({})
       res.send(pizzas)
    }
    catch(err){
        return res.status(400).json({msg:err})
    }
})


module.exports = router