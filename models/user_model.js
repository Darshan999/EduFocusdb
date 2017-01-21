var db=require('../dbconnection'); //reference of dbconnection.js
 var fs = require('fs');
var User={

getAllUsers:function(callback){
 
return db.query("Select * from user_tbl where u_active='active'",callback);
 
},
getAllUsersflag:function(callback){
 
return db.query("Select * from user_tbl where u_active='inactive'",callback);
 
},

 getUserById:function(id,callback){
 
return db.query("select * from user_tbl where u_email_id=?",[id],callback);
 },

 addUser:function(User,callback){

     var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    //var base64d=property.pro_image.replace(/^data:image\/png;base64,/, "");

   // base64d=property.pro_image.replace(/^data:image\/jpg;base64,/, "");
    // base64d=property.pro_image.replace(/^data:image\/jpeg;base64,/, "");
    var pos=User.u_photo.indexOf(",");
    var base64d=User.u_photo.substring(pos+1);
    console.log(base64d);
    var path="./public/images/user/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    var path1="/images/user/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
        return console.log(err);
        }
        console.log("The file was saved!");
    });



 return db.query("Insert into user_tbl values(?,?,?,?,?,?,?,?,?)",[User.u_email_id,User.u_name,User.u_password,path1,User.u_mobile_no,User.u_gender,User.u_active,User.u_status,User.u_type],callback);
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
 },

 updateUserflag:function(id,User,callback){
  return db.query("update user_tbl set u_active=? where u_email_id=?",[User.u_active,id],callback);
 }
 
};
 module.exports=User;