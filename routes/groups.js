var express = require('express');
 var router = express.Router();
 var Group=require('../models/group_model');
 
router.get('/:id?',function(req,res,next){

if(req.params.id)
{
    Group.getGroupById(req.params.id,function(err,rows){

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
    Group.getAllGroups(function(err,rows){

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

router.post('/',function(req,res,next){
 
Group.addGroup(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else{
  res.json(req.body);//or return count for 1 or 0
  }
  });
 });

router.delete('/:id',function(req,res,next){
 
Group.deleteGroup(req.params.id,function(err,count){
 
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

 
 module.exports=router;