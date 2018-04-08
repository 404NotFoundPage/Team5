/**
 * Created by Administrator on 2018/4/8.
 */
let db = require('./../config/sqlConfig.js');
module.exports={
    index:function(callback){
        let sql="select * from t_productinfo,t_productimg where" +
            " t_productinfo.pro_id in(select pro_id from t_productinfo where pro_new=1 or pro_bao=1 and pro_id not in (select pro_id from t_productinfo where pro_bao=1 and pro_new=1))" +
        " and t_productinfo.pro_id not in(select pro_id from t_productinfo where pro_bao=1 and pro_new=1)" +
            "and t_productinfo.pro_id=t_productimg.pro_id "
        db.connect(sql,null,callback);
    }
};