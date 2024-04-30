const express = require('express')
const router = express.Router()

const fs = require("fs");
let Members = JSON.parse(fs.readFileSync("./Members.json"));
let Trainers = JSON.parse(fs.readFileSync("./Trainers.json"));

router.get('/Trainers', (req, res) =>{

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
    res.status(200).json(trainers)

} )
module.exports = router