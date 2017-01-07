var db=require('../dbconnection'); //reference of dbconnection.js
 
 var Group={

getAllGroups:function(callback){
 
return db.query("Select * from group_tbl",callback);
 
},
getAllGroupsjoin:function(callback){
 
return db.query("Select g.*,s.*,u.* from group_tbl as g,subject_tbl as s,user_tbl as u where g.fk_u_email_id=u.u_email_id and g.fk_sub_id=s.sub_id",callback);
 
},
 getGroupById:function(id,callback){
 
return db.query("select * from group_tbl where grp_id=?",[id],callback);
 },
 addGroup:function(Group,callback){
 return db.query("Insert into group_tbl values(?,?,?,?)",[Group.grp_id,Group.grp_date,Group.fk_sub_id,Group.fk_u_email_id],callback);
 },
deleteGroup:function(id,callback){
  return db.query("delete from group_tbl where grp_id=?",[id],callback);
 },
 deleteAllGroups:function(item,callback){

var delarr=[];
    for(i=0;i<item.length;i++){

        delarr[i]=item[i].grp_id;
    }
    return db.query("delete from group_tbl where grp_id in (?)",[delarr],callback);
 },
 
};
 module.exports=Group;
 