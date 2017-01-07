var express = require('express');
 var router = express.Router();
 var Question=require('../models/question_model');

/* router.get('/',function(req,res,next){
    
Question.getAllQuestionjoin(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
 });*/


 router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    Question.getQuestionByIdJoin(req.params.id,function(err,rows){

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
    Question.getAllQuestionjoin(function(err,rows){

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



 module.exports=router;