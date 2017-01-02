var db=require('../dbconnection'); //reference of dbconnection.js
 
 var Subject={

getAllSubjects:function(callback){
 
return db.query("Select * from subject_tbl",callback);
 
},
 getSubjectById:function(id,callback){
 
return db.query("select * from subject_tbl where sub_id=?",[id],callback);
 },
 addSubject:function(Subject,callback){
 return db.query("Insert into subject_tbl values(?,?,?,?,?)",[Subject.sub_id,Subject.sub_name,Subject.sub_photo,Subject.fk_course_id,Subject.fk_u_email_id],callback);
 },
deleteSubject:function(id,callback){
  return db.query("delete from subject_tbl where sub_id=?",[id],callback);
 },

  deleteAllSubject:function(item,callback){

    var delarr=[];
    for(i=0;i<item.length;i++){

        delarr[i]=item[i].sub_id;
    }
    return db.query("delete from subject_tbl where sub_id in (?)",[delarr],callback);
 },

 
 updateSubject:function(id,Subject,callback){
  return db.query("update subject_tbl set sub_name=?,sub_photo=? where sub_id=?",[Subject.sub_name,Subject.sub_photo,id],callback);
 },
 getAllSubjectjoin:function(callback){
 
return db.query("Select s.*,c.*,u.* from subject_tbl as s,course_tbl as c,user_tbl as u where s.fk_course_id=c.course_id and s.fk_u_email_id=u.u_email_id",callback);
 
}
 
};
 module.exports=Subject;
 