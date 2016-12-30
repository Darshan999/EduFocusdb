var express = require('express');
 var router = express.Router();
 var Group=require('../models/group_model');
 
router.get('/:id?',function(req,res,next){


    Group.getAllGroupsjoin(function(err,rows){

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