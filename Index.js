const express = require('express')
const app = express()
const port = 3000
//!Revenues
const getAllRevenues=require('./Revenues/getAllRevenues.js')
const getTrainerRevenues=require('./Revenues/getTrainerRevenues.js')
// *Members
const getMembers=require('./Members/getMembers.js')
const getMember=require('./Members/getMember.js')
const postMembers=require('./Members/PostMembers.js')
const updateMember=require('./Members/updateMember.js')
const deleteMember=require('./Members/deleteMember.js')
// ^Trainers
const getTrainers=require('./Trainers/getTrainers.js')
const getTrainer=require('./Trainers/getTrainer.js')
const postTrainers=require('./Trainers/postTrainers.js')
const updateTrainers=require('./Trainers/updateTrainers.js')
const deleteTrainers=require('./Trainers/deleteTrainers.js')
app.use(express.json())
//?1-Get all revenues of all members
app.use('/',getAllRevenues)
//*2- Get the revenues of a specific trainer.
app.use('/',getTrainerRevenues)

//! 1-Add Member (must be unique)
app.use('/',postMembers)
//~ 2- Get all Members and Member’s Trainer
app.use('/',getMembers)
//^3-Get a specific Member (if his membership expired return “this member is not allowed to enter the gym”)
app.use('/',getMember)
// &4-Update Member (name, membership, trainer id)
app.use('/',updateMember)
// *5- Delete Member (soft delete)
app.use('/',deleteMember)

//! 1-Add a trainer.
app.use('/',postTrainers)
//~ 2- Get all trainers and trainer’s members.
app.use('/',getTrainers)
// &3-Update Trainers
app.use('/',updateTrainers)
// *4- Delete Member (soft delete)
app.use('/',deleteTrainers)
//^5-Get a specific trainer and trainer’s members
app.use('/',getTrainer)

app.use('*',(req,res)=>res.status(404).json({Message:"Error 404"}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))