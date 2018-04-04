/**
 * Created by yang on 2018/3/12.
 */
let sqlpool = require('./sqlcool.js');
const mysql=require('mysql');
const db = sqlpool.sqlpool();
module.exports={
    productDetail:function(pro_id,callback){
        let sql="select * from t_productimg where pro_id=?";
        db.connect(sql,pro_id,callback);
        console.log(pro_id)
    }
};