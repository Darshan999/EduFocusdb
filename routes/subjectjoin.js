var express = require('express');
 var router = express.Router();
 var Subject=require('../models/subject_model');

  router.get('/',function(req,res,next){
    
Subject.getAllSubjectjoin(function(err,rows){

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