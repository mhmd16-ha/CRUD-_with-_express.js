const express = require("express");
const router = express.Router();
const fs = require("fs");
let Members = JSON.parse(fs.readFileSync("./Members.json"));

router.get("/AllRevenues", (req, res) => {
  let cost = 0;
  for (let i = 0; i < Members.length; i++) {
    cost += Members[i].memberShip.cost;
    
  }
  res.status(200).json({ Cost: `${cost} EGP` });
});
module.exports = router;
