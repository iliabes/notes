let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Todo = require('../cheme/myMongooseScheme')
let change = 0;

//get all items
router.get('/bd',(req,res)=>{
    Todo.find({},(err,data)=>{
      res.json(data)
    })
})

router.post('/subscribe',(req,res)=>{
  console.log(change)
    if(change){
      res.send('hello from subscribe')
    }
})

//create
router.post('/',(req,res)=>{
  const obj = JSON.parse(JSON.stringify(req.body))// req.body = [Object: null prototype] { title: 'product' }
  let todo = new Todo({
    header:req.body.header,
    value: req.body.value,
  });
  todo.save(()=>{
    console.log('save',todo)
      res.json({'ok':'ok'})
  })
  // res.status()
})

//update
router.put('/',(req,res)=>{
  change = 0
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
