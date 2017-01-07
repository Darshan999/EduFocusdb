var express = require('express');
 var router = express.Router();
 var Answer=require('../models/answer_model');

 /*router.get('/',function(req,res,next){
    
Answer.getAllAnswerjoin(function(err,rows){

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
*/

router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    Answer.getAnswerByIdJoin(req.params.id,function(err,rows){

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
    Answer.getAllAnswerjoin(function(err,rows){

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