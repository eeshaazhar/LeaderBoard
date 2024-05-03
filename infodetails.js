const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  Team: String,
  Picture: String,
  Score: Number
});

const infomodel = mongoose.model("info", infoSchema)
module.exports=infomodel