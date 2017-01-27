
var express = require('express');
 var router = express.Router();
 var Blog=require('../models/blog_model');
 

router.get('/:id?',function(req,res,next){


    Blog.getAllBlogjoinflag(function(err,rows){

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
 
Blog.updateBlogflag(req.params.id,req.body,function(err,rows){
 
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