var db=require('../dbconnection'); //reference of dbconnection.js
 
var Note={

getAllNotes:function(callback){
 
return db.query("Select * from notes_tbl",callback);
 
},
 getNoteById:function(id,callback){
 
return db.query("select * from notes_tbl where notes_id=?",[id],callback);
 },

 addNote:function(Note,callback){
 return db.query("Insert into notes_tbl values(?,?,?,?,?)",[Note.notes_id,Note.notes_title,Note.notes,Note.fk_u_email_id,Note.fk_sub_id],callback);
 },

deleteNote:function(id,callback){
  return db.query("delete from notes_tbl where notes_id=?",[id],callback);
 },

 deleteAllNotes:function(item,callback){

var delarr=[];
    for(i=0;i<item.length;i++){

        delarr[i]=item[i].notes_id;
    }
    return db.query("delete from notes_tbl where notes_id in (?)",[delarr],callback);
 },
 
 


 updateNote:function(id,Note,callback){
  return db.query("update notes_tbl set notes_title=?,notes=? where notes_id=?",[Note.notes_title,Note.notes,id],callback);
 },
 getAllNotesjoin:function(callback){
 
return db.query("Select n.*,s.*,u.* from notes_tbl as n,subject_tbl as s,user_tbl as u where n.fk_sub_id=s.sub_id and n.fk_u_email_id=u.u_email_id",callback);
 
}

};

 module.exports=Note;