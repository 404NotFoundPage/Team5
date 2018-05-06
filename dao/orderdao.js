/**
 * Created by Administrator on 2018/4/2 0002.
 */
const db=require("../config/sqlConfig.js");

const orderDao={
    orderallDao(sql,params){
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
    QueryOrder(sql,params){
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





};
module.exports=orderDao;