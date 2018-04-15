/**
 * Created by Administrator on 2018/4/2 0002.
 */
const db=require("../config/sqlConfig.js");

const baokuanDao={
    getAllDao(sql,params){
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
    buyproDao(sql,params){
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
    collectDao(sql,params){
        return new Promise(function(resolve,reject){
            db.connect(sql,params,(err,data)=>{
                if (!err){
                  /*  console.log(data[0].pro_id)*/
                    return new Promise(function(resolve2,reject2){
                        db.connect("INSERT INTO t_collection VALUES(NULL,2,?,0)",data[0].pro_id,(err,data)=>{
                                if(!err){
                                    resolve2(data)
                                }else {
                                    reject2(err)
                                }
                        })
                    })
                }else {
                    reject(err)
                }
            })
        })
    },
    collectcancleDao(sql,params){
        return new Promise(function(resolve,reject){
            db.connect(sql,params,(err,data)=>{
                if (!err){
                    console.log(data[0].pro_id)
                    return new Promise(function(resolve2,reject2){
                        db.connect("UPDATE t_collection SET col_condition=1 WHERE user_id=2 AND pro_id=?;)",data[0].pro_id,(err,data)=>{
                            if(!err){
                                resolve2(data)
                            }else {
                                reject2(err)
                            }
                        })
                    })
                }else {
                    reject(err)
                }
            })
        })
    }



};
module.exports=baokuanDao;