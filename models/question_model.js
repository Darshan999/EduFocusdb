var db=require('../dbconnection'); //reference of dbconnection.js
 var fs = require('fs');
var Question={

getAllQuestion:function(callback){
 
return db.query("Select * from question_tbl",callback);
 
},
 getQuestionById:function(id,callback){
 
return db.query("select * from question_tbl where que_id=?",[id],callback);
 },

 getQuestionByIdJoin:function(id,callback){
 
return db.query("Select q.*,s.*,u.* from question_tbl as q,subject_tbl as s,user_tbl as u where q.fk_sub_id=s.sub_id and q.fk_u_email_id=u.u_email_id and que_id=?",[id],callback);
 },


 addQuestion:function(Question,callback){

     
       var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    //var base64d=property.pro_image.replace(/^data:image\/png;base64,/, "");

   // base64d=property.pro_image.replace(/^data:image\/jpg;base64,/, "");
    // base64d=property.pro_image.replace(/^data:image\/jpeg;base64,/, "");
    var pos=Question.que_photo.indexOf(",");
    var base64d=Question.que_photo.substring(pos+1);
    console.log(base64d);
    var path="./public/images/question/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    var path1="/images/question/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
        return console.log(err);
        }
        console.log("The file was saved!");
    });
 return db.query("Insert into question_tbl values(?,?,?,?,?,?,?,?,?,?)",[Question.que_id,Question.que_title,Question.que_desc,Question.que_date,Question.que_time,path1,Question.flag,Question.view,Question.fk_u_email_id,Question.fk_sub_id],callback);
 },

deleteQuestion:function(id,callback){
  return db.query("delete from question_tbl where que_id=?",[id],callback);
 },

 deleteAll:function(item,callback){

var delarr=[];
    for(i=0;i<item.length;i++){

        delarr[i]=item[i].que_id;
    }
    return db.query("delete from question_tbl where que_id in (?)",[delarr],callback);
 },
 
 updateQuestion:function(id,Question,callback){
  return db.query("update question_tbl set que_title=?,que_desc=?,que_photo=? where que_id=?",[Question.que_title,Question.que_desc,Question.que_photo,id],callback);
 },
getAllQuestionjoin:function(callback){
 
return db.query("Select q.*,s.*,u.* from question_tbl as q,subject_tbl as s,user_tbl as u where q.fk_sub_id=s.sub_id and q.fk_u_email_id=u.u_email_id",callback);
 
}
 


};

 module.exports=Question;