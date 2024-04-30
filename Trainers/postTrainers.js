const express = require('express')
const router = express.Router()
const fs=require('fs')
let Trainers=JSON.parse(fs.readFileSync("./Trainers.json"))

router.post('/Trainers', (req, res) =>{
    req.body.id=Trainers.length+1
    let index=Trainers.findIndex((m)=>m.id== req.body.id)
    if(index!==-1){
        req.body.id=Trainers.length+2
    }
    Trainers.push(req.body)
    fs.writeFileSync("./Trainers.json", JSON.stringify(Trainers));
    res.status(201).json({Message:"Success"})
} )
module.exports = router