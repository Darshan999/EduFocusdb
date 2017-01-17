var db=require('../dbconnection'); //reference of dbconnection.js
  var fs = require('fs');
 var Subject={

getAllSubjects:function(callback){
 
return db.query("Select * from subject_tbl",callback);
 
},
 getSubjectById:function(id,callback){
 
return db.query("select * from subject_tbl where sub_id=?",[id],callback);
 },
 addSubject:function(Subject,callback){

       var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    //var base64d=property.pro_image.replace(/^data:image\/png;base64,/, "");

   // base64d=property.pro_image.replace(/^data:image\/jpg;base64,/, "");
    // base64d=property.pro_image.replace(/^data:image\/jpeg;base64,/, "");
    var pos=Subject.sub_photo.indexOf(",");
    var base64d=Subject.sub_photo.substring(pos+1);
    console.log(base64d);
    var path="./public/images/subject/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    var path1="/images/subject/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
        return console.log(err);
        }
        console.log("The file was saved!");
    });

 return db.query("Insert into subject_tbl values(?,?,?,?,?)",
 [Subject.sub_id,Subject.sub_name,path1,Subject.fk_course_id,Subject.fk_u_email_id],callback);
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
 