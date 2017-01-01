var db=require('../dbconnection'); //reference of dbconnection.js
 
var User={

getAllUsers:function(callback){
 
return db.query("Select * from user_tbl",callback);
 
},
 getUserById:function(id,callback){
 
return db.query("select * from user_tbl where u_email_id=?",[id],callback);
 },

 addUser:function(User,callback){
 return db.query("Insert into user_tbl values(?,?,?,?,?,?,?,?,?)",[User.u_email_id,User.u_name,User.u_password,User.u_photo,User.u_mobile_no,User.u_gender,User.u_active,User.u_status,User.u_type],callback);
 },
 
deleteUser:function(id,callback){
  return db.query("delete from user_tbl where u_email_id=?",[id],callback);
 },

 deleteAll:function(item,callback){

var delarr=[];
    for(i=0;i<item.length;i++){

        delarr[i]=item[i].u_email_id;
    }
    return db.query("delete from user_tbl where u_email_id in (?)",[delarr],callback);
 },
 
 updateUser:function(id,User,callback){
  return db.query("update user_tbl set u_name=?,u_photo=?,u_mobile_no=?,u_gender=? where u_email_id=?",[User.u_name,User.u_photo,User.u_mobile_no,User.u_gender,id],callback);
 }
 
};
 module.exports=User;