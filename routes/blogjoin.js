
var express = require('express');
 var router = express.Router();
 var Blog=require('../models/blog_model');

 router.get('/',function(req,res,next){
    
Blog.getAllBlogjoin(function(err,rows){

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