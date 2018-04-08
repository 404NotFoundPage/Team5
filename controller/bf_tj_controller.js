/**
 * Created by X on 2018/4/3.
 */
const bf_model = require("./../dao/bf_tuijian_modal");

const bf_tj_contro ={
    "init":function (req,res) {
        bf_model.bf_init().then(function (data) {
            let imgsrc = data[0].pro_img_url;
            let isrc = imgsrc.split(",");
            let imgtext = data[0].pro_text_title;
            let itext = imgtext.split(",");
            req.session.user ="tom";
            res.render("baifangtuijian.html",{isrc:isrc,itext:itext,"username": req.session.user})
        }).catch(function (err) {
            res.render(err);
        })

    },
    "chaju":function (req,res) {
        bf_model.bf_chaju().then(function (data) {
            res.send(data);
        }).catch(function (err) {
            res.send(err);
        })
    },
    "baijian":function (req,res) {
        bf_model.bf_baijian().then(function (data) {
            res.send(data)
        }).catch(function (err) {
            res.send(err)
        });
    },
    "displayCase":function (req,res) {
        bf_model.bf_case1().then(function (data) {
            res.send(data)
        }).catch(function (err) {
            res.send(err)
        });
    },
    "displayCase2":function (req,res) {
        bf_model.bf_case2().then(function (data) {
            res.send(data)
        }).catch(function (err) {
            res.send(err)
        })
    },
    "displayCase3":function (req,res) {
        bf_model.bf_case3().then(function (data) {
            res.send(data)
        }).catch(function (err) {
            res.send(err)
        })
    },
    "soucang":function (req,res) {
        let goods_type = req.query.goods_type;
        req.session.user = 1;
        if(req.session.user){
            bf_model.bf_soucang(goods_type,req.session.user).then(function (data) {
                if(data.affectedRows != 0){
                    res.send("收藏成功");
                }
            });
        }
    },
    "cancelsoucang":function (req,res) {
        let goods_type = req.query.goods_type;
        req.session.user = 1;
        if(req.session.user){
            bf_model.bf_cancelsoucang(goods_type,req.session.user).then(function (data) {
                if(data.affectedRows != 0){
                    res.send("取消收藏成功");
                }
            });
        }
    },
    "sign":function (req,res) {
        res.redirect("public/register.html");
    },
    "logo":function (req,res) {
        res.redirect("public/login.html")
    },
    "shoppingCart":function (req,res) {
        req.session.user= 1;
        if(req.session.user){
            res.redirect("public/person.html")
        }else {
            res.redirect("public/login.html")
        }
    }




};

module.exports = bf_tj_contro;






