const express = require('express')
const router = express.Router()
const fs=require('fs')
let Members=JSON.parse(fs.readFileSync("./Members.json"))
router.delete('/Members/:id', (req, res) =>{
    let id=req.params.id
    let index=Members.findIndex((i)=>i.id==id)
    Members.splice(index,1)
    fs.writeFileSync("Members.json", JSON.stringify(Members));
    res.status(200).json({Message:"Success"})
} )
module.exports = router