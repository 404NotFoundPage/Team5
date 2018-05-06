/**
 * Created by Administrator on 2018/4/2 0002.
 */
const db=require("../config/sqlConfig.js");

const PersonalDao={
    PersonalInit(sql,params){
        return new Promise(function(resolve,reject){
            db.connect(sql,params,(err,data)=>{
                if (!err){
                    resolve(data)
                }else {
                    reject(err)
                }
            })
        })
    },
    Readaddress(sql,params){
        return new Promise(function(resolve,reject){
            db.connect(sql,params,(err,data)=>{
                if (!err){
                    resolve(data)
                }else {
                    reject(err)
                }
            })
        })
    },
    Newaddress(sql,params){
        return new Promise(function(resolve,reject){
            db.connect(sql,params,(err,data)=>{
                if (!err){
                    resolve(data)
                }else {
                    reject(err)
                }
            })
        })
    }
    ,delete(sql,params){
        return new Promise(function(resolve,reject){
            db.connect(sql,params,(err,data)=>{
                if (!err){
                    resolve(data)
                }else {
                    reject(err)
                }
            })
        })
    }
    ,QueryOrder(sql,params){
        return new Promise(function(resolve,reject){
            db.connect(sql,params,(err,data)=>{
                if (!err){
                    resolve(data)
                }else {
                    reject(err)
                }
            })
        })
    },
    editPersonInfo(user_id,user_name,user_login,user_tel,user_sex){
        let sql="update t_user set user_name=? , user_login=?,user_tel=?,user_sex=? where user_id=?"
        let arr=[user_name,user_login,user_tel,user_sex,user_id]
        return new Promise(function(resolve,reject){
            db.connect(sql,arr,(err,data)=>{
                if (!err){
                    resolve(data)
                }else {
                    reject(err)
                }
            })
        })
    },
    uploadPersonImg:function(user_id,user_pic,callback){
        let sql="update t_user set user_pic=? where user_id=?";
        db.connect(sql,[user_pic,user_id],callback)
    }

};
module.exports=PersonalDao;