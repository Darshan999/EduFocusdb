var db=require('../dbconnection'); //reference of dbconnection.js
 
var AnswerLike={

getAllAnswerLike:function(callback){
 
return db.query("Select * from like_answer_tbl",callback);
 
},
 getAnswerLikeById:function(id,callback){
 
return db.query("select * from like_answer_tbl where like_answer_id=?",[id],callback);
 },

 addAnswerLike:function(AnswerLike,callback){
 return db.query("Insert into like_answer_tbl values(?,?,?,?,?,?)",[AnswerLike.like_answer_id,AnswerLike.like_answer_flag,AnswerLike.like_answer_time,AnswerLike.like_answer_date,AnswerLike.fk_ans_id,AnswerLike.fk_u_email_id],callback);
 },

deleteAnswerLike:function(id,callback){
  return db.query("delete from like_answer_tbl where like_answer_id=?",[id],callback);
 },
 
 updateAnswerLike:function(id,AnswerLike,callback){
  return db.query("update like_answer_tbl set like_answer_flag=? where like_answer_id=?",[AnswerLike.like_answer_flag,id],callback);
 }

};

 module.exports=AnswerLike;