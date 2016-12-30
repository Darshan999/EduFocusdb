var express = require('express');
 var router = express.Router();
 var Note=require('../models/note_model');

  router.get('/',function(req,res,next){
    
Note.getAllNotesjoin(function(err,rows){

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