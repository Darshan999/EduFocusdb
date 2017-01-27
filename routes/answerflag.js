var express = require('express');
 var router = express.Router();
 var Answer=require('../models/answer_model');
 

router.get('/:id?',function(req,res,next){

    Answer.getAllAnswerjoinflag(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


router.delete('/:id',function(req,res,next){
 
Answer.deleteAnswer(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });


router.put('/:id',function(req,res,next){
 
Answer.updateAnswerflag(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 
 module.exports=router;