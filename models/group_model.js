var db=require('../dbconnection'); //reference of dbconnection.js
 
 var Group={

getAllGroups:function(callback){
 
return db.query("Select * from group_tbl",callback);
 
},
 getGroupById:function(id,callback){
 
return db.query("select * from group_tbl where grp_id=?",[id],callback);
 },
 addGroup:function(Group,callback){
 return db.query("Insert into group_tbl values(?,?,?,?)",[Group.grp_id,Group.grp_name,Group.fk_sub_id,Group.fk_u_email_id],callback);
 },
deleteGroup:function(id,callback){
  return db.query("delete from group_tbl where grp_id=?",[id],callback);
 },
 
 updateGroup:function(id,Group,callback){
  return db.query("update group_tbl set grp_name=? where grp_id=?",[Group.grp_name,id],callback);
 }
 
};
 module.exports=Group;
 