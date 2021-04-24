const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoScheme = new Schema({
  header:String,
  value: String,
})



module.export = todoScheme;