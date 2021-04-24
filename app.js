
let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
var cors = require('cors');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const port = 4000 || process.env.PORT;


app.use(express.static(__dirname +'/client/build/'))
app.use('/', indexRouter);
// app.use(cors());
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())


async function start() {
  try {
    await mongoose.connect('mongodb+srv://bes:1q2w3e@cluster0.hxqw5.mongodb.net/listForExpressGenerate', { useNewUrlParser: true ,useUnifiedTopology: true})
    .then(()=>{console.log('mongoose connected')})
    app.listen(port,console.log(`server is starting in ${port}` ))
  } catch (e) {
    console.log(e)
  }
}start()



