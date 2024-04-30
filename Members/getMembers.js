const express = require('express')
const router = express.Router()

const fs=require('fs')
let Members=JSON.parse(fs.readFileSync("./Members.json"))
let Trainers = JSON.parse(fs.readFileSync("./Trainers.json"));

router.get('/Members', (req, res) =>{
    

    for(let i=0;i<Members.length;i++){
        let index=Trainers.findIndex((t)=>t.id==Members[i].trainerId)
        Members[i].trainer=Trainers[index]
    }
  
    
    res.status(200).json(Members)

} )
module.exports = router