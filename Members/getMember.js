const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const fs=require('fs')
let Members=JSON.parse(fs.readFileSync("./Members.json"))
router.get('/Members/:id', (req, res) =>{
    let id=req.params.id
    let index=Members.findIndex((i)=>i.id==id)
    if(Members[index].status=="freeze"){
        return res.json({Message:"this member is not allowed to enter the gym"})
    }else{
        let member=Members[index]
        res.json(member)
        res.status(302).json({Message:"Success"})
    }
   
} )
module.exports = router