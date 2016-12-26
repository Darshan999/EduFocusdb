var db=require('../dbconnection'); //reference of dbconnection.js
 
var Note={

getAllNotes:function(callback){
 
return db.query("Select * from notes_tbl",callback);
 
},
 getNoteById:function(id,callback){
 
return db.query("select * from notes_tbl where notes_id=?",[id],callback);
 },

 addNote:function(Note,callback){
 return db.query("Insert into notes_tbl values(?,?,?,?)",[Note.notes_id,Note.notes_title,Note.fk_u_email_id,Note.fk_sub_id],callback);
 },

deleteNote:function(id,callback){
  return db.query("delete from notes_tbl where notes_id=?",[id],callback);
 },
 


 updateNote:function(id,Note,callback){
  return db.query("update notes_tbl set notes_title=? where notes_id=?",[Note.notes_title,id],callback);
 }

};

 module.exports=Note;