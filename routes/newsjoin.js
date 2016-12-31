var express = require('express');
 var router = express.Router();
 var News=require('../models/news_model');
 
router.get('/',function(req,res,next){


    News.getAllNewsjoin(function(err,rows){

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