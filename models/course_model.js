var db=require('../dbconnection'); //reference of dbconnection.js
 
 var Course={

getAllCourses:function(callback){
 
return db.query("Select * from course_tbl",callback);
 
},
 getCourseById:function(id,callback){
 
return db.query("select * from course_tbl where course_id=?",[id],callback);
 },
 addCourse:function(Course,callback){
 return db.query("Insert into course_tbl values(?,?,?,?)",[Course.course_id,Course.course_name,Course.fk_sub_id,Course.fk_u_email_id],callback);
 },
deleteCourse:function(id,callback){
  return db.query("delete from course_tbl where course_id=?",[id],callback);
 },
 
 updateCourse:function(id,Group,callback){
  return db.query("update course_tbl set course_name=? where course_id=?",[Course.course_name,id],callback);
 }
 
};
 module.exports=Course;
 