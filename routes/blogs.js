
var express = require('express');
 var router = express.Router();
 var Blog=require('../models/blog_model');
 

router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    Blog.getBlogById(req.params.id,function(err,rows){

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
    Blog.getAllBlog(function(err,rows){

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
 
Blog.addBlog(req.body,function(err,count){
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
 
Blog.deleteBlog(req.params.id,function(err,count){
 
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
 
Blog.updateBlog(req.params.id,req.body,function(err,rows){
 
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