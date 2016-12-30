var express = require('express');
 var router = express.Router();
 var Video=require('../models/video_model');
 
router.get('/:id?',function(req,res,next){


    Video.getAllVideosjoin(function(err,rows){

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