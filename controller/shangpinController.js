const shangpinModel=require("../dao/shangpinDao.js");

const shangpinController={
    getAlldata(request,response){
        const sql='SELECT pro_name,pro_price,pro_info,pro_img_url,a.pro_id FROM t_productimg AS a,t_productinfo AS b WHERE a.pro_id=b.pro_id';
        shangpinModel.getAllDao(sql,[]).then((data)=>{
            response.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
};
module.exports=shangpinController;