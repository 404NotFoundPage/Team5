/**
 * Created by Administrator on 2018/4/2 0002.
 */
const  orderModel=require("../dao/orderdao.js");


const orderController={
    hqshdz(request,response) {
        const sql = 'SELECT * FROM t_address WHERE user_id=? and add_codition=0';
        // let userid = request.session.user.user_id;    //获取用户 id
        let userid = request.session.user.user_id    // 模拟获取到数据
        orderModel.orderallDao(sql, [userid]).then((data) => {
            if(data.length>0){
                response.send(data)
            }else{
                console.log(data)
            }

        }).catch((err) => {
            console.log(err)
        })
    },

    hcrshdz(request,response){
        let  province =request.query.province;
        let  city =request.query.city;
        let  county =request.query.county;
        let  textarea =request.query.textarea;
        let  Addressee =request.query.Addressee;
        let  PhoneNumber =request.query.PhoneNumber;
        let  Setasthedr =request.query.Setasthedr;
        let  addr_id =request.query.addr_id;

        // let userid = request.session.user.user_id;    //获取用户 id
        let userid = request.session.user.user_id

        const sql = "INSERT INTO t_address VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        console.log(province,
        city,
        county,
        textarea,
        Addressee,
        PhoneNumber,
        Setasthedr)
        orderModel.orderallDao(sql, [null,userid,province,city,county,textarea,null,PhoneNumber,Addressee,Setasthedr,0,addr_id]).then((data) => {
            response.send("ok")
        }).catch((err) => {
            console.log(err)
        })

    },
    updatahcrshdz(request,response){
        let  province =request.query.province;
        let  city =request.query.city;
        let  county =request.query.county;
        let  textarea =request.query.textarea;
        let  Addressee =request.query.Addressee;
        let  PhoneNumber =request.query.PhoneNumber;
        let  Setasthedr =request.query.Setasthedr;
        let  addr =request.query.addr_id;

        // let userid = request.session.user.user_id;    //获取用户 id
        let userid = request.session.user.user_id

        const sql = "UPDATE t_address SET addr_pro =?,addr_city=?,addr_area=?,addr_detail=?,addr_tel=?,addr_person=?,add_default=?,add_codition=? WHERE addr_id = ? AND user_id = ?"
        console.log(province,  //省
        city, // 市
        county, // 区
        textarea,// 详细地址
        Addressee, //收件人
        PhoneNumber,// 手机号
        Setasthedr,// 设为默认
            addr,// 编号
            userid) // 用户id
        orderModel.orderallDao(sql, [province,city,county,textarea,PhoneNumber,Addressee,Setasthedr,0,addr,userid]).then((data) => {
            console.log(data)
            response.send("ok")
        }).catch((err) => {
            console.log(err)
        })
    },

    //点击购买提交订单里面的商品表格
    dingdanbiao(request,response){
        // console.log(request.query.pro_id);
        let pro_id = request.query.pro_id
        // let userId=request.session.user.user_id;
        let userId=request.session.user.user_id
        // let sql='SELECT t_collection.pro_id,t_productimg.pro_img_url FROM t_collection,t_productimg WHERE t_collection.user_id=? AND t_collection.col_condition=0 AND t_collection.pro_id=t_productimg.pro_id AND t_productimg.pro_img_coditon=0 AND pro_img_status=0 group by t_collection.pro_id';
        let sql ="SELECT * FROM t_productInfo,t_productImg WHERE  t_productInfo.pro_id= t_productImg.pro_id AND   t_productInfo.pro_id=?  LIMIT 0,1"
        orderModel.QueryOrder(sql,[pro_id]).then((data)=>{
            response.send(data);
        }).catch((err)=>{//失败
            console.log(err);
        })
    },

    //点击订提交订单的数据
    tijiaodingdan(request,response){
        let order_time =request.query.order_time;
        let order_postmethod =request.query.order_postmethod;
        let order_paymethod =request.query.order_paymethod;
        let order_receivername =request.query.order_receivername;
        let order_bill =request.query.order_bill;
        let order_addr =request.query.order_addr;
        let order_pay =request.query.order_pay;
        let order_status =request.query.order_status;
        let order_price =parseInt(request.query.order_price);
        let pro_id =request.query.pro_id;
        let order_number=request.query.order_number;

        // let userId=request.session.user.user_id;
        let userId=request.session.user.user_id;

        const sql ="INSERT INTO t_order VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
       /* console.log(order_time, //时间
        order_postmethod, //快递
        order_paymethod, //支付方式
        order_receivername, //姓名
        order_bill, //发票
        order_addr, //收货地址
        order_pay, //支付状态
        order_status, //收发货状态
        order_price, // 订单 总价
        pro_id) //商品编号*/

        orderModel.orderallDao(sql,[null,userId,order_time,null,order_postmethod,
            order_paymethod,order_bill,order_addr,null,order_pay,order_status,
            order_price,0,order_receivername]).then((data) => {
            console.log(data.insertId);
            let sql1 = 'INSERT INTO t_orderdetail VALUES (?,?,?,?,?,?)';
            return orderModel.orderallDao(sql1,[null,data.insertId,pro_id,order_number,order_price,0])
            // response.send("ok")
        }).then((data) => {
            response.send(data)
        }).catch((err) => {
            console.log(err)
        })
    },
    // 查询订单id
    // queryorderid(request,response){
    //     let sql="SELECT order_id FROM t_order ORDER BY order_id  DESC  LIMIT 1"
    //     let arr=[];
    //     orderModel.orderallDao(sql,arr).then(function(data){
    //         let aa = data[0].aa;
    //         let sql1 = `aaaaa aaa=?`
    //         return orderModel.orderallDao(sql1,[aa]);
    //     }).then(data => {
    //         data
    //     }).catch(function (err) {
    //         console.log(err)
    //     })
    // }
};
module.exports=orderController;