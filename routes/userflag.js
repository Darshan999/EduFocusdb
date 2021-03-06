var express = require('express');
 var router = express.Router();
 var User=require('../models/user_model');
 

router.get('/:id?',function(req,res,next){

    User.getAllUsersflag(function(err,rows){

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
 
User.deleteUser(req.params.id,function(err,count){
 
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
 
User.updateUserflag(req.params.id,req.body,function(err,rows){
 
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
