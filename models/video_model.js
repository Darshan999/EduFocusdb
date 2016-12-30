var db=require('../dbconnection'); //reference of dbconnection.js
 
 var Video={

getAllVideos:function(callback){
 
return db.query("Select * from video_tbl",callback);
 
},
getAllVideosjoin:function(callback){
 
return db.query("Select v.*,u.*,s.* from video_tbl as v,user_tbl as u,subject_tbl as s where v.fk_u_email_id=u.u_email_id and v.fk_sub_id=s.sub_id",callback);
 
},
 getVideoById:function(id,callback){
 
return db.query("select * from video_tbl where video_id=?",[id],callback);
 },
 addVideo:function(Video,callback){
 return db.query("Insert into video_tbl values(?,?,?,?,?,?)",[Video.video_id,Video.video_title,Video.video,Video.flag,Video.fk_u_email_id,Video.fk_sub_id],callback);
 },
deleteVideo:function(id,callback){
  return db.query("delete from video_tbl where video_id=?",[id],callback);
 },
 
 updateVideo:function(id,Video,callback){
  return db.query("update video_tbl set video_title=?,video=?,flag=? where video_id=?",[Video.video_title,Video.video,Video.flag,id],callback);
 }
 
};
 module.exports=Video;
 