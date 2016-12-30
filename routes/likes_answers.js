
var express = require('express');
 var router = express.Router();
 var AnswerLike=require('../models/like_answer_model');
 

router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    AnswerLike.getAnswerLikeById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
}
else
{
    AnswerLike.getAllAnswerLike(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
}
});


router.post('/',function(req,res,next){
 
AnswerLike.addAnswerLike(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 or 0
  }
  });
 });

router.delete('/:id',function(req,res,next){
 
AnswerLike.deleteAnswerLike(req.params.id,function(err,count){
 
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
 
AnswerLike.updateAnswerLike(req.params.id,req.body,function(err,rows){
 
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