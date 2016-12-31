var db=require('../dbconnection'); //reference of dbconnection.js
 
 var News={

getAllNews:function(callback){
 
return db.query("Select * from news_tbl",callback);
 
},
 getNewsById:function(id,callback){
 
return db.query("select * from news_tbl where news_id=?",[id],callback);
 },
 addNews:function(News,callback){
 return db.query("Insert into news_tbl values(?,?,?,?,?,?,?)",[News.news_id,News.news_title,News.news_desc,News.news_photo,News.news_date,News.news_time,News.fk_u_email_id],callback);
 },
deleteNews:function(id,callback){
  return db.query("delete from news_tbl where news_id=?",[id],callback);
 },
 
 updateNews:function(id,News,callback){
  return db.query("update news_tbl set news_title=?,news_desc=?,news_photo=? where news_id=?",[News.news_title,News.news_desc,News.news_photo,id],callback);
 },

 getAllNewsjoin:function(callback){
 
return db.query("Select n.*,u.* from news_tbl as n,user_tbl as u where n.fk_u_email_id=u.u_email_id",callback);
 
}

 
};
 module.exports=News;
 