const express = require("express");
const router = express.Router();
const fs = require("fs");
let Members = JSON.parse(fs.readFileSync("./Members.json"));
let Trainers = JSON.parse(fs.readFileSync("./Trainers.json"));
router.get("/AllRevenues/:id", (req, res) => {

  let cost = 0;
  
  for (let i = 0; i < Members.length; i++) {
    if(req.params.id==Members[i].trainerId){
        cost += Members[i].memberShip.cost;
    }
  }
  res.status(200).json({ Cost: `${cost} EGP` });
});
module.exports = router;
