const express = require('express')
const router = express.Router()
const fs=require('fs')
let Members=JSON.parse(fs.readFileSync("./Members.json"))

router.post('/Members', (req, res) =>{
    req.body.id=Members.length+1
    let index=Members.findIndex((m)=>m.id== req.body.id)
    if(index!==-1){
        req.body.id=Members.length+2
    }
    Members.push(req.body)
    fs.writeFileSync("./Members.json", JSON.stringify(Members));
    res.status(201).json({Message:"Success"})
} )
module.exports = router