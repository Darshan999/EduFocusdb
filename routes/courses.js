var express = require('express');
 var router = express.Router();
 var Course=require('../models/course_model');
 
router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    Course.getCourseById(req.params.id,function(err,rows){

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
    Course.getAllCourses(function(err,rows){

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
 
Course.addCourse(req.body,function(err,count){
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
 
    Course.deleteAll(req.body,function(err,count){
    
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
 
Course.deleteCourse(req.params.id,function(err,count){
 
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
 
Course.updateCourse(req.params.id,req.body,function(err,rows){
 
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

