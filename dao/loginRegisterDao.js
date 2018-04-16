/**
 * Created by fengb on 2018/4/4.
 */
const db=require("../config/sqlConfig.js");

const loginRegisterDao={
    login: function (username,password,callack) {
        db.connect("select * from t_user where user_login=? and user_psw=?",[username,password],callack)
    },
    reg:function(telphone,password,callack){
        db.connect("INSERT INTO t_user (user_login,user_psw,user_name,user_tel,user_sex) VALUES (?,?,?,?,?)",[telphone,password,telphone,telphone,"男"],callack)
    }
};
module.exports=loginRegisterDao;