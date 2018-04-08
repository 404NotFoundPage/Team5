/**
 * Created by X on 2018/4/3.
 */
const db=require("./../config/sqlConfig.js");

const bf_model = {
        "bf_init":function () {
            return new Promise(function (reslove,reject) {
                let sql = "SELECT * FROM t_productimg AS t_pro JOIN t_producttext AS t_protex ON t_pro.pro_id=t_protex.pro_id WHERE t_protex.pro_id=5";
                let parm = [];
                db.connect(sql,parm,function (err,data) {
                    if(!err){
                        reslove(data)
                    }else{
                        reject(err)
                    }
                })
            })
        },
        "bf_chaju":function () {
            return new Promise(function (reslove,reject) {
                let sql = "SELECT t_pro.pro_img_url,t_protex.pro_text_title FROM t_productimg AS t_pro JOIN t_producttext AS t_protex ON t_pro.pro_id=t_protex.pro_id WHERE t_protex.pro_id=6";
                let parm = [];
                db.connect(sql,parm,function (err,data) {
                    if(!err){
                        reslove(data)
                    }else{
                        reject(err)
                    }
                })
            })
        },
        "bf_baijian":function () {
            return new Promise(function (reslove,reject) {
                let sql = "SELECT t_pro.pro_img_url,t_protex.pro_text_title FROM t_productimg AS t_pro JOIN t_producttext AS t_protex ON t_pro.pro_id=t_protex.pro_id WHERE t_protex.pro_id=4";
                let parm = [];
                db.connect(sql,parm,function (err,data) {
                    if(!err){
                        reslove(data)
                    }else{
                        reject(err)
                    }
                })
            })
        },
        "bf_case1":function () {
            return new Promise(function (reslove,reject) {
                let sql = "SELECT * FROM t_cass WHERE cass_id=1";
                let parm = [];
                db.connect(sql,parm,function (err,data) {
                    if(!err){
                        reslove(data)
                    }else{
                        reject(err)
                    }
                })
            })
        },
        "bf_case2":function () {
            return new Promise(function (reslove,reject) {
                let sql = "SELECT * FROM t_cass WHERE cass_id=2";
                let parm = [];
                db.connect(sql,parm,function (err,data) {
                    if(!err){
                        reslove(data)
                    }else{
                        reject(err)
                    }
                })
            })
        },
        "bf_case3":function () {
            return new Promise(function (reslove,reject) {
                let sql = "SELECT * FROM t_cass WHERE cass_id=3";
                let parm = [];
                db.connect(sql,parm,function (err,data) {
                    if(!err){
                        reslove(data)
                    }else{
                        reject(err)
                    }
                })
            })
        },
        "bf_soucang":function (id,type) {
            return new Promise(function (reslove,reject) {
                let sql = "INSERT INTO t_collection VALUES (null,?,?,'0')";
                let parm = [type,id];
                db.connect(sql,parm,function (err,data) {
                    if(!err){
                        reslove(data)
                    }else {
                        reject(err)
                    }
                })
            })
        },
        "bf_cancelsoucang":function (type,id) {
            return new Promise(function (reslove,reject) {
                let sql = "DELETE FROM t_collection WHERE pro_id = ? AND user_id = ?";
                let parm = [type,id];
                db.connect(sql,parm,function (err,data) {
                    if(!err){
                        reslove(data)
                    }else {
                        reject(err)
                    }
                })
            })
        }





};
module.exports = bf_model;