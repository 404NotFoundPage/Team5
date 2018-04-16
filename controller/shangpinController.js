const shangpinModel=require("../dao/shangpinDao.js");

const shangpinController={
    getAlldata(request,response){
        const sql='SELECT pro_name,pro_price,pro_info,pro_img_url,a.pro_id FROM t_productimg AS a,t_productinfo AS b WHERE a.pro_id=b.pro_id';
        shangpinModel.getAllDao(sql,[]).then((data)=>{
            response.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    },
    shoppingcar(request,response){
        let proid=request.query.proid;
        let userid=1;
        let target=request.query.target;
        let sql="";
        let iscol=request.query.iscol;
        console.log(target)
        if(iscol=="false"){
            console.log(111)
            if(target=="false"){
                console.log(111)
                sql='INSERT INTO t_shoppingcart VALUES(null,?,?,1,0)';
            }else {
                 sql='UPDATE t_shoppingcart SET sc_condition=1 WHERE user_id=? AND pro_id=?'
            }
        }else {
            if(target=="false"){
                sql='INSERT INTO t_collection VALUES(NULL,?,?,0)';
            }else {
                sql='UPDATE t_collection SET col_condition=1 WHERE user_id=? AND pro_id=?'
            }
        }

        shangpinModel.shoppingcar(sql,[userid,proid]).then((data)=>{
            response.send(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
};
module.exports=shangpinController;