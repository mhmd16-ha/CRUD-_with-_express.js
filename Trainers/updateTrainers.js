const express = require('express')
const router = express.Router()
const fs=require('fs')
let Trainers=JSON.parse(fs.readFileSync("./Trainers.json"))
router.put('/Trainers/:id', (req, res) =>{
    let id=req.params.id
    let index=Trainers.findIndex((i)=>i.id==id)
    Trainers[index]={...Trainers[index],...req.body}
    fs.writeFileSync("Trainers.json", JSON.stringify(Trainers));
    res.status(200).json({Message:"Success"})
} )
module.exports = router