const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const fs=require('fs')
let Trainers=JSON.parse(fs.readFileSync("./Trainers.json"))
let Members = JSON.parse(fs.readFileSync("./Members.json"));

router.get('/Trainers/:id', (req, res) =>{
    let id=req.params.id
   let trainers=JSON.parse(JSON.stringify(Trainers))
    for(let i=0;i<Members.length;i++){
        for(let j=0;j<Trainers.length;j++){
            if(Members[i].trainerId == Trainers[j].id){
                if( trainers[j].Members == undefined){
                    trainers[j].Members=[]
                    trainers[j].Members.push(Members[i])
                }else{
                    trainers[j].Members.push(Members[i])
                }
            }
        }
    }
    let index=trainers.findIndex((i)=>i.id==id)
        let trainer=trainers[index]
        res.json(trainer)
        res.status(302).json({Message:"Success"})
    
   
} )
module.exports = router