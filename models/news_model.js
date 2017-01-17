var db=require('../dbconnection'); //reference of dbconnection.js
  var fs = require('fs');

 var News={

getAllNews:function(callback){
 
return db.query("Select * from news_tbl",callback);
 
},
 getNewsById:function(id,callback){
 
return db.query("select * from news_tbl where news_id=?",[id],callback);
 },
 addNews:function(News,callback){

      var dt=new Date();//current date and time of server
    var text = "";//random text
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    //var base64d=property.pro_image.replace(/^data:image\/png;base64,/, "");

   // base64d=property.pro_image.replace(/^data:image\/jpg;base64,/, "");
    // base64d=property.pro_image.replace(/^data:image\/jpeg;base64,/, "");
    var pos=News.news_photo.indexOf(",");
    var base64d=News.news_photo.substring(pos+1);
    console.log(base64d);
    var path="./public/images/news/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    var path1="/images/news/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
    fs.writeFile(path,base64d,'base64',function(err){
        if(err) {
        return console.log(err);
        }
        console.log("The file was saved!");
    });

 return db.query("Insert into news_tbl values(?,?,?,?,?,?,?)",[News.news_id,News.news_title,News.news_desc,path1,News.news_date,News.news_time,News.fk_u_email_id],callback);
 },
deleteNews:function(id,callback){
  return db.query("delete from news_tbl where news_id=?",[id],callback);
 },

 deleteAll:function(item,callback){

var delarr=[];
    for(i=0;i<item.length;i++){

        delarr[i]=item[i].news_id;
    }
    return db.query("delete from news_tbl where news_id in (?)",[delarr],callback);
 },
 
 updateNews:function(id,News,callback){
  return db.query("update news_tbl set news_title=?,news_desc=?,news_photo=? where news_id=?",[News.news_title,News.news_desc,News.news_photo,id],callback);
 },

 getAllNewsjoin:function(callback){
 
return db.query("Select n.*,u.* from news_tbl as n,user_tbl as u where n.fk_u_email_id=u.u_email_id",callback);
 
}

 
};
 module.exports=News;
 