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
            if(req.session.user){
                res.render("baifangtuijian.html",{isrc:isrc,itext:itext,"username": req.session.user})
            }else{
                res.render("baifangtuijian.html",{isrc:isrc,itext:itext,"username": req.session.user})
            }
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
        let index = req.query.index;
        let pro_id = goods_type+"+"+index;
        req.session.user_id = 1;
        if(req.session.user){
            bf_model.bf_soucang(pro_id,req.session.user_id).then(function (data) {
                if(data.affectedRows != 0){
                    res.send("收藏成功");
                }
            }).catch(function (err) {
                console.log(err)
            });
        }else {
            res.send("login")
        }
    },
    "cancelsoucang":function (req,res) {
        let goods_type = req.query.goods_type;
        let index = req.query.index;
        let pro_id = goods_type+"+"+index;
        req.session.user_id = 1;
        if(req.session.user){
            bf_model.bf_cancelsoucang(pro_id,req.session.user_id).then(function (data) {
                if(data.affectedRows != 0){
                    res.send("取消收藏成功");
                }
            });
        }
    },
    "sign":function (req,res) {
        if(req.session.username){
            res.render("register.html",{"username":req.session.username});
        }else{
            res.render("register.html",{"username":req.session.username});
        }
    },
    "logo":function (req,res) {
        if(req.session.username){
            res.render("login.html",{"username":req.session.username});
        }else{
            res.render("login.html",{"username":req.session.username});
        }
    },
    "person":function (req,res) {
      res.redirect("person.html")
    },
    "shoppingCart":function (req,res) {
        if(req.session.user){
            res.redirect("person.html")
        }else {
            res.redirect("login.html")
        }
    },
    "index":function (req,res) {
        if(req.session.user){
            res.render("index.html",{"username":req.session.user});
        }else {
            res.render("index.html",{"username":req.session.user})
        }

    },
    "brandstory":function (req,res) {
        if(req.session.user){
            res.render("brandstory.html",{"username":req.session.user})
        }else {
            res.render("brandstory.html",{"username":req.session.user})
        }
    },
    "ciqiwenhua":function (req,res) {
        if(req.session.user){
            res.render("ciqiwenhua_zx.html",{"username":req.session.user})
        }else {
            res.render("ciqiwenhua_zx.html",{"username":req.session.user})
        }
    },
    "OrderGeneration":function (req,res) {
        if(req.session.user){
            res.render("OrderGeneration.html",{"username":req.session.user})
        }else {
            res.render("OrderGeneration.html",{"username":req.session.user})
        }
    },
    "OrderPayment":function (req,res) {
        if(req.session.user){
            res.render("OrderPayment.html",{"username":req.session.user})
        }else {
            res.render("OrderPayment.html",{"username":req.session.user})
        }
    },
    "PaymentSuccess":function (req,res) {
        if(req.session.user){
            res.render("PaymentSuccess.html",{"username":req.session.user})
        }else {
            res.render("PaymentSuccess.html",{"username":req.session.user})
        }
    },
    "weixinPayment":function (req,res) {
        if(req.session.user){
            res.render("weixinPayment.html",{"username":req.session.user})
        }else {
            res.render("weixinPayment.html",{"username":req.session.user})
        }
    },
    "zfbPayment":function (req,res) {
        if(req.session.user){
            res.render("zfbPayment.html",{"username":req.session.user})
        }else {
            res.render("zfbPayment.html",{"username":req.session.user})
        }
    },
    "baokuan":function (req,res) {
        console.log(1);
        if(req.session.user){
            res.render("baokuan.html",{"username":req.session.user})
        }else {
            res.render("baokuan.html",{"username":req.session.user})
        }
    }

};

module.exports = bf_tj_contro;






