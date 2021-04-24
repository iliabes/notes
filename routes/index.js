let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
const Schema = mongoose.Schema;

// let todoScheme = require('../cheme/myMongooseScheme')

var cors = require('cors');
router.use(cors())
router.use(express.urlencoded({extended:false}))
router.use(express.json())
// const jsonParser = express.json();
// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({extended: true});


const todoScheme = new Schema({
  header:String,
  value: String,
})


const Todo  = mongoose.model("Todo", todoScheme);







router.get('/bd',(req,res)=>{
    Todo.find({},(err,data)=>{
      res.json(data)
    })

})

router.get('/',(req,res)=>{
  console.log('this is /')
  res.send('<h1>this is server</h1>')
})

router.post('/',(req,res)=>{
  const obj = JSON.parse(JSON.stringify(req.body))// req.body = [Object: null prototype] { title: 'product' }
  // console.log(req.body.header); // { title: 'product' }
  // console.log(req.body.value)
  // todo.header = req.body.header
  // todo.value = req.body.value
  let todo = new Todo({
    header:req.body.header,
    value: req.body.value,
  });
  todo.save(()=>{console.log('save',todo)})
  res.json({'123':'345'})
})


router.put('/',(req,res)=>{
  console.log(req.body)
  
  Todo.updateOne({_id: req.body.id}, {header: req.body.header,value:req.body.value}, function(err, result){
     
    if(err) return console.log(err);
    console.log(result);
});


})

router.delete('/',(req,res)=>{
  console.log('delete',req.body.id)
  Todo.findOneAndDelete({_id:req.body.id}, function(err, result){
    if(err) return console.log(err);
    console.log(result);
});

})


module.exports = router;
