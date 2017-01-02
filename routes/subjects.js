var express = require('express');
 var router = express.Router();
 var Subject=require('../models/subject_model');
 
router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    Subject.getSubjectById(req.params.id,function(err,rows){

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
    Subject.getAllSubjects(function(err,rows){

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
 
Subject.addSubject(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 or 0
  }
  });
 });


 router.post('/:id',function(req,res,next){
 
    Subject.deleteAllSubject(req.body,function(err,count){
    
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

router.delete('/:id',function(req,res,next){
 
Subject.deleteSubject(req.params.id,function(err,count){
 
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
 
Subject.updateSubject(req.params.id,req.body,function(err,rows){
 
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