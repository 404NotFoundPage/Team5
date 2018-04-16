const db=require("../config/sqlConfig.js");

const shangpinDao={
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
    shoppingcar(sql,params){
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
};
module.exports=shangpinDao;