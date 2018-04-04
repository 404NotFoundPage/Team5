/**
 * Created by Administrator on 2018/4/2 0002.
 */
const baokuanModel=require("../dao/baokuanDao.js");


const baokuanController={
    getAlldata(request,response){
        const sql='SELECT pro_name,pro_info,pro_img_url FROM t_productimg AS a,t_productinfo AS b WHERE a.pro_id=b.pro_id AND pro_bao=1;';
        baokuanModel.getAllDao(sql,[]).then((data)=>{
            response.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    }


};
module.exports=baokuanController;