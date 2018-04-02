//引入模块
const mysql = require("mysql");
//创建对象，使用对象定义方法
//
const db = {
    pool:{},
    config:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"teamwork",
        multipleStatements:true
    },
    create(){
        this.pool=mysql.createPool(this.config);
    },
    connect(sql,arr,fn){
        this.pool.getConnection((err,connect)=>{
            connect.query(sql,arr,fn);
            connect.release();
        });
    }
};
//对象的公开
module.exports=db;
//在文件中调用创建，保证使用的是同一个连接池，不让数据资源浪费，节约空间
db.create();
