
let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let cors = require('cors');
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let port = 4000 || process.env.PORT;


app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/pixi'))



app.use('/', indexRouter);




async function start() {
  try {
    await mongoose.connect('mongodb+srv://bes:1q2w3e@cluster0.hxqw5.mongodb.net/listForExpressGenerate', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => { console.log('mongoose connected') })
    app.listen(port, console.log(`server is starting in ${port}`))
  } catch (e) {
    console.log('error:' + e)
  }
} start()



