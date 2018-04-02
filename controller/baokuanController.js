/**
 * Created by Administrator on 2018/4/2 0002.
 */
const baokuanModel=require("../dao/baokuanDao.js");


const baokuanController={
    getAlldata(request,response){
        const sql='select * from t_user';
        baokuanModel.getAllDao(sql,[]).then((data)=>{
            response.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    }


};
module.exports=baokuanController;