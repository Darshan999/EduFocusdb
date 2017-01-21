var db=require('../dbconnection'); //reference of dbconnection.js
 
var Answer={

getAllAnswer:function(callback){
 
return db.query("Select * from answer_tbl",callback);
 
},
 getAnswerById:function(id,callback){
 
return db.query("select * from answer_tbl where ans_id=?",[id],callback);
 },

 getAnswerByIdJoin:function(id,callback){
 
return db.query("Select a.*,q.*,u.* from answer_tbl as a,question_tbl as q,user_tbl as u where a.fk_que_id=q.que_id and a.fk_u_email_id=u.u_email_id and ans_id=?",[id],callback);
 },

 addAnswer:function(Answer,callback){
     var d=new Date();
     var x=d.getDate()+"-";
     x+=(d.getMonth()+1)+"-";
     x+=d.getFullYear();

     var x1=d.getHours()+":";
     x1+=(d.getMinutes()+":");
     x1+=d.getSeconds();

 return db.query("Insert into answer_tbl values(?,?,?,?,?,?,?,?)",[Answer.ans_id,Answer.ans_desc,x,x1,Answer.flag,Answer.view,Answer.fk_que_id,Answer.fk_u_email_id],callback);
 },

deleteAnswer:function(id,callback){
  return db.query("delete from answer_tbl where ans_id=?",[id],callback);
 },
 
 updateAnswer:function(id,Answer,callback){
  return db.query("update answer_tbl set ans_desc=? where ans_id=?",[Answer.ans_desc,id],callback);
 },
 getAllAnswerjoin:function(callback){
 
return db.query("Select a.*,q.*,u.* from answer_tbl as a,question_tbl as q,user_tbl as u where a.fk_que_id=q.que_id and a.fk_u_email_id=u.u_email_id",callback);
 
},


getAnswerByQuestionId:function(id,callback){

    return db.query("select  a.*,u.* from answer_tbl as a,user_tbl as u where  a.fk_u_email_id=u.u_email_id and a.fk_que_id=?",[id],callback);
}

};

 module.exports=Answer;