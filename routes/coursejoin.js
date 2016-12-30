var express = require('express');
 var router = express.Router();
 var Course=require('../models/course_model');
 
router.get('/:id?',function(req,res,next){


    Course.getAllCoursesjoin(function(err,rows){

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