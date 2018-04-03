/* Created by lixin on 2018/3/12.*/
const mysql=require('mysql');
module.exports.sqlpool=function(){
    let pool={
        config:{
            host:'172.16.13.49',
            user:'root',
            password:'root',
            port:3306,
            database:'teamwork'
        },
        connect:function(sql,arr,fn){
            //����һ�����ӳض���
           const pool = mysql.createPool(this.config);
            //2. ��ȡ���Ӷ���
            pool.getConnection(function(err,connect){
                if(err){
                     console.log(err)
                }
                else{
                    connect.query(sql,arr,fn);
                }
            })
        }

    };
    return pool;
};