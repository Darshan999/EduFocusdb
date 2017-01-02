var db=require('../dbconnection'); //reference of dbconnection.js
 
 var Course={

getAllCourses:function(callback){
 
return db.query("Select * from course_tbl",callback);
 
},


 getCourseById:function(id,callback){
 
return db.query("select * from course_tbl where course_id=?",[id],callback);
 },
 addCourse:function(Course,callback){
 return db.query("Insert into course_tbl values(?,?)",[Course.course_id,Course.course_name],callback);
 },
deleteCourse:function(id,callback){
  return db.query("delete from course_tbl where course_id=?",[id],callback);
 },

  deleteAll:function(item,callback){

      var delarr=[];
    for(i=0;i<item.length;i++){

        delarr[i]=item[i].course_id;
    }
    return db.query("delete from course_tbl where course_id in (?)",[delarr],callback);
 },

 
updateCourse:function(id,Course,callback){
  return db.query("update course_tbl set course_name=? where course_id=?",[Course.course_name,id],callback);
 }
 
};
 module.exports=Course;
 