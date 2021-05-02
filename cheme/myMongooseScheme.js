const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoScheme = new Schema({
  header:String,
  value: String,
})

const Todo  = mongoose.model("Todo", todoScheme);

//!!!s
module.exports = Todo;