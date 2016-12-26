var db=require('../dbconnection'); //reference of dbconnection.js
 
 var Subject={

getAllSubjects:function(callback){
 
return db.query("Select * from subject_tbl",callback);
 
},
 getSubjectById:function(id,callback){
 
return db.query("select * from subject_tbl where sub_id=?",[id],callback);
 },
 addSubject:function(Subject,callback){
 return db.query("Insert into subject_tbl values(?,?,?,?)",[Subject.sub_id,Subject.sub_name,Subject.fk_que_id,Subject.fk_u_email_id],callback);
 },
deleteSubject:function(id,callback){
  return db.query("delete from subject_tbl where sub_id=?",[id],callback);
 },
 
 updateSubject:function(id,Subject,callback){
  return db.query("update subject_tbl set sub_name=? where sub_id=?",[Subject.sub_name,id],callback);
 }
 
};
 module.exports=Subject;
 