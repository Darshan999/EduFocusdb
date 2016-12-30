var db=require('../dbconnection'); //reference of dbconnection.js
 
var Blog={

getAllBlog:function(callback){
 
return db.query("Select * from blog_tbl",callback);
 
},
 getBlogById:function(id,callback){
 
return db.query("select * from blog_tbl where blog_id=?",[id],callback);
 },

 addBlog:function(Blog,callback){
 return db.query("Insert into blog_tbl values(?,?,?,?,?,?,?,?,?,?)",[Blog.blog_id,Blog.blog_title,Blog.blog_desc,Blog.blog_date,Blog.blog_time,Blog.blog_photo,Blog.flag,Blog.view,Blog.fk_u_email_id,Blog.fk_sub_id],callback);
 },

deleteBlog:function(id,callback){
  return db.query("delete from blog_tbl where blog_id=?",[id],callback);
 },
 
 updateBlog:function(id,Blog,callback){
  return db.query("update blog_tbl set blog_title=?,blog_desc=?,blog_photo=? where blog_id=?",[Blog.blog_title,Blog.blog_desc,Blog.blog_photo,id],callback);
 }

};

 module.exports=Blog;