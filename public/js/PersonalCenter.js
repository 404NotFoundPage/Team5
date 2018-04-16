var Querydata;//订单参数；
var inputvalue;
// 分页
var CurrentPage=1;  //当前第几页    //地址
var zongtiaoshu;    //总条数
var yiyexianshi;    //一页显示多少条

var CurrentPage1=1;  //当前第几页   //购物车
var zongtiaoshu1;    //总条数
var yiyexianshi1;    //一页显示多少条

function myclick(a) {
    $(".mito").css({display:"none"});
    $(".cus").css({"background-color":"#273B5E","color":"white"});
    if(a==1){
        $(".pcright_liebiao").css({display:"block"});
        pcright_liebiao()
    }
    if(a==2){
        $(".xx").css({display:"none"});
        $("input").val("");
        $(".pcright_liebiao1").css({display:"block"})
    }
    if(a==3){
        $(".pcright_liebiao2").css({display:"block"});
        Readaddress();
        fenye(); //使用分页
    }
    if(a==4){
        $(".pcright_order").css({display:"block"});
        $(".cus1").css({"background-color":"white","color":"#273B5E"});
        Querydata="";
        QueryOrder();
    }
    if(a==5){
        $(".pcright_order").css({display:"block"});
        $(".cus2").css({"background-color":"white","color":"#273B5E"});
        Querydata="order_pay=0&order_status=0";
        QueryOrder();
    }
    if(a==6){
        $(".pcright_order").css({display:"block"});
        $(".cus3").css({"background-color":"white","color":"#273B5E"});
        Querydata="order_pay=1&order_status=0";
        QueryOrder()
    }
    if(a==7){
        $(".pcright_order").css({display:"block"});
        $(".cus4").css({"background-color":"white","color":"#273B5E"});
        Querydata="order_pay=1&order_status=1";
        QueryOrder()
    }
    if(a==8){
        $(".pcright_wdsc").css({display:"block"});
        huoqu();
    }
    if(a==9){
        $(".pcright_wddd").css({display:"block"});
        gouwuche();//读取数据
        gouwuchefenye();//?????????????
    }
    if(a==10){
        var fffff=Querydata;
        $(".pcright_order").css({display:"block"});
        inputvalue=$("#ord_id").val();
        if($("#ord_id").val()){
            if(Querydata){
                Querydata=fffff+"&order_id="+inputvalue;

            }else{
                Querydata=fffff+"order_id="+inputvalue;
            }
        }
        inputvalue="";
        QueryOrder();
        Querydata=fffff;

    }
}
$(".pick-area1").pickArea();
$(".pick-area2").pickArea({
    "format":"北京市/市辖区", //格式
    "width":"300",
    "borderColor":"#7b68ee",//文本边框的色值
    "arrowColor":"#7b68ee",//箭头颜色
    "listBdColor":"#7b68ee",//下拉框父元素ul的border色值
    "color":"#7b68ee",//字体颜色
    "fontSize":"16px",//字体大小
    "hoverColor":"#7b68ee",
    "paddingLeft":"10px",
    "arrowRight":"10px",
    //"preSet":"北京市/市辖区/东城区",
    "getVal":function(){
        //console.log($(".pick-area-hidden").val())
        //console.log($(".pick-area-dom").val())
        var thisdom = $("."+$(".pick-area-dom").val());
        thisdom.next().val($(".pick-area-hidden").val());
    }
});

$(".pick-area3").pickArea({
    "format":"江苏省", //格式
    "width":"400",
    "borderColor":"#51AFC9",//文本边框的色值
    "arrowColor":"#51AFC9",//箭头颜色
    "listBdColor":"#51AFC9",//下拉框父元素ul的border色值
    "color":"#51AFC9",//字体颜色
    "fontSize":"16px",//字体大小
    "hoverColor":"#51AFC9",
    "paddingLeft":"10px",
    "arrowRight":"10px",
    "maxHeight":"600",
    //"preSet":"河南省/郑州市",
    "getVal":function(){
        //console.log($(".pick-area-hidden").val())
        //console.log($(".pick-area-dom").val())
        var thisdom = $("."+$(".pick-area-dom").val());
        thisdom.next().val($(".pick-area-hidden").val());
    }
});
$(".pick-area4").pickArea({
    "format":"province/city/county", //格式
    "width":"420",//设置“省市县”文本边框的宽度
    "height":"48",//设置“省市县”文本边框的高度
    "borderColor":"#435abd",//设置“省市县”文本边框的色值
    "arrowColor":"#435abd",//设置下拉箭头颜色
    "listBdColor":"#435abd",//设置下拉框父元素ul的border色值
    "color":"#435abd",//设置“省市县”字体颜色
    "fontSize":"20px",//设置字体大小
    "hoverColor":"#435abd",
    "paddingLeft":"30px",//设置“省”位置处的span相较于边框的距离
    "arrowRight":"30px",//设置下拉箭头距离边框右侧的距离
    "maxHeight":"300px",
    //"preSet":"",//数据初始化 ；这里的数据初始化有两种方式，第一种是用preSet属性设置，第二种是在a标签里使用name属性设置
    "getVal":function(){//这个方法是每次选中一个省、市或者县之后，执行的方法
        var thisdom = $("."+$(".pick-area-dom").val());//返回的是调用这个插件的元素pick-area，$(".pick-area-dom").val()的值是该元素的另一个class名，这个class名在dom结构中是唯一的，不会有重复，可以通过这个class名来识别这个pick-area
        thisdom.next().val($(".pick-area-hidden").val());//$(".pick-area-hidden").val()是页面中隐藏域的值，存放着每次选中一个省、市或者县的时候，当前文本存放的省市县的最新值，每点击一次下拉框里的li，这个值就会立即更新
    }
});
$(".pick-area5").pickArea({
    "format":"province/city", //格式
    "width":"300",
    "borderColor":"#e02222",//文本边框的色值
    "arrowColor":"#e02222",//下拉箭头颜色
    "listBdColor":"#e02222",//下拉框父元素ul的border色值
    "color":"#e02222",//字体颜色
    "hoverColor":"#e02222",
    //"preSet":"山东省/临沂市/兰陵县",
    "getVal":function(){
        var thisdom = $("."+$(".pick-area-dom").val());
        thisdom.next().val($(".pick-area-hidden").val());
    }
});

$(".pick-area6").pickArea({
    "format":"上海市/市辖区/普陀区", //格式
    "width":"340",
    "borderColor":"#ff8c00",//文本边框的色值
    "arrowColor":"#ff8c00",//下拉箭头颜色
    "listBdColor":"#ff8c00",//下拉框父元素ul的border色值
    "color":"#ff8c00",//字体颜色
    "hoverColor":"#ff8c00",
    //"preSet":"山东省/临沂市/兰陵县",
    "getVal":function(){

        var thisdom = $("."+$(".pick-area-dom").val());
        thisdom.next().val($(".pick-area-hidden").val());
    }
});

$(".pick-area7").pickArea({"format":"","width":"150px","borderColor":"#7894D4","color":'#7894D4',"arrowColor":"#7894D4"});


//请求个人资料
pcright_liebiao();
function pcright_liebiao() {
    $.get("/PersonalInit.do",function (data) {
        $(".user_name").html(data.user_name);
        $(".user_login").html(data.user_login);
        $(".user_tel").html(data.user_tel);
        $(".user_sex").html(data.user_sex);
    })
}
//修改密码
xiugaimima();
function xiugaimima(){
    $("input[name=password1]").blur(function(){
        var passVal=$("input[name=password1]").val();
        var pass="pass="+passVal;
        $.post("/mtpass.do",pass,function(data){
            if(data=="no"){
                console.log(2222); //原密码输入不正确
                $("input[name=password1]").val("");
                $("input[name=password1]").attr('placeholder',"密码错误");
                $(".pass2").attr("disabled", true);
            }else{
                //密码输入正确
                $(".pass2").removeAttr("disabled");
                //
            }
        })
    });
    $("input[name=password3]").blur(function(){
        if($("input[name=password2]").val()==$(this).val()){
            $(".butx").removeAttr("disabled");
            $(".butx").on("click",function(){
                passVal=$("input[name=password1]").val();
                pass="pass="+passVal;
                $.post("/mtpass.do",pass,function(data){
                    if(data=="no"){
                        $("input[name=password1]").val("");
                        $("input[name=password1]").attr('placeholder',"密码错误");
                        $(".pass2").attr("disabled", true);
                        $(".butx").attr("disabled", true);
                    }else{
                        //密码输入正确
                        $(".pass2").removeAttr("disabled");
                        if($("input[name=password2]").val()==$("input[name=password3]").val()){
                            var data="pwd="+$("input[name=password3]").val();
                            $.post("/xiugaipwd.do",data,function(data){
                                if(data=="ok"){
                                    display("修改成功");
                                    $(".xx").css({display:"block"})
                                }
                            })
                        }else{
                            twoplay()
                        }
                        //
                    }
                });
                $(".butx").attr("disabled", true);
            })
        }else{
            //两次输入不一致
            twoplay()
        }
    });
    //两次输入不一致
    function twoplay(){
        $(".pass2").val("");
        $(".pass2").attr('placeholder',"两次输入不一致");
        $(".butx").attr("disabled", true);
    }
}

//地址管理


//地址分页
function fenye(){
    // 求总条数

        $.get("/Afewpages.do",function(data){
            zongtiaoshu=data[0].zy;
            $(".Afewpages").html(Math.ceil(zongtiaoshu/yiyexianshi));
        });
//共几页

//第几页
    $(".afewpages").html(CurrentPage);
//首页
    $(".homepPage").on("click", function () {
        CurrentPage =1;
        Readaddress();
    });
//上一页
    $(".PreviousPage").on("click", function () {
        if(CurrentPage==1){

        }else{
            CurrentPage--;
            $(".afewpages").html(CurrentPage);
            Readaddress()
        }
    });
//下一页
    $(".nextPage").on("click", function () {
        console.log(CurrentPage);
        console.log(Math.ceil(zongtiaoshu/yiyexianshi))
        if(CurrentPage==Math.ceil(zongtiaoshu/yiyexianshi)){

        }else{
            CurrentPage++;
            $(".afewpages").html(CurrentPage);
            console.log(CurrentPage);
            Readaddress()
        }

    });
//尾页
    $(".Shadowe").on("click", function () {
        CurrentPage=Math.ceil(zongtiaoshu/yiyexianshi);
        Readaddress()
    })
}


//读取地址
Readaddress();
function Readaddress(){
    yiyexianshi=2;//每页显示条数
    // 第几页
    var readata="tiaoshu="+yiyexianshi+"&yema="+CurrentPage;
    console.log(readata);
    $.get("/Readaddress.do",readata,function(data){
        $(".tbody1").html("");
        if(data.length>0){
            for(var i=0;i<data.length;i++){
                var add_default;
                if(data[i].add_default==1){
                    add_default="<a class='Canceldef' add_default='1' uid="+data[i].addr_id+" >取消默认</a>"
                }else{
                    add_default="<a class='Canceldef'  add_default='0' uid="+data[i].addr_id+" >设为默认</a>"
                }

                document.getElementsByClassName("tbody1")[0].innerHTML+="<tr><td>"+data[i].addr_person+"</td><td>"+data[i].addr_pro+data[i].addr_city+data[i].addr_area+"</td><td>"+data[i].addr_detail+"</td><td>"+data[i].addr_tel+"</td><td>"+add_default+"<a class='del' uid='"+data[i].addr_id+"' >&nbsp删除</a></td></tr>"
            }
        }else{
            $(".tbody1").html("");
        }
    });
};
//获取地址的值
$(".Preservation").on("click",function(){

    var f1 = $("#textarea").val();
    var f2 = $(".Addressee").val();
    var f3 = $(".PhoneNumber").val();

    console.log(f1,f2,f3);
    if(f1!="" && f2!="" && f3!==""){
        xx();

        console.log("123123");
        setTimeout(function(){
            Readaddress();
        },1000)
    }else{
        display("请输入必填项目")
    }



});
// 获取函数
function xx(){
    var   addr_pro= $(".pick-province").html();
    var   addr_city= $(".pick-city ").html();
    var   addr_area= $(".pick-county").html();
    var   addr_detail= $("#textarea").val();
    var   addr_person= $(".Addressee").val();
    var   PhoneNumber= $(".PhoneNumber").val();
    var   add_default;
    if($(".Setasthedr").is(':checked')){
        add_default=1
    }else{
        add_default=0
    };
    var data="addr_pro="+addr_pro+"&addr_city="+addr_city+"&addr_area="+addr_area+"&addr_detail="+addr_detail+"&addr_person="+addr_person+"&PhoneNumber="+PhoneNumber+"&add_default="+add_default;
    // 保存地址
    console.log(data);
    $.post("/Newaddress.do",data,function(data){
        console.log(data);
        display("添加成功");
        $("#textarea").val("");
        $(".Addressee").val("");
        $(".PhoneNumber").val("");
    });
}

//设为默认
$(".tbody1").on("click",".Canceldef",function(){
    let data="uid="+$(this).attr("uid")+"&add_default="+$(this).attr("add_default");
    $.get("/Setdefault.do",data,function(){
        Readaddress()
    })
});
//删除
$(".tbody1").on("click",".del",function(){
    let data="uid="+$(this).attr("uid");
    $.get("/delete.do",data,function(data){
        console.log(data);
        display("删除成功");
        Readaddress();
    });
});

// 订单中心
//查询订单
QueryOrder();//读取订单

function QueryOrder(){

    $.get("/QueryOrder.do",Querydata,function(data){
        console.log(data);
        $(".tbody2").html("");  // 清空tbody
        var pay;
        for (var i=0;i<data.length;i++){  // 获取
            if(data[i].order_pay==1){
                if(data[i].order_status==1){
                    pay="已完成"
                }
                if(data[i].order_status==0){
                    pay="未发货"
                }
            }else if(data[i].order_pay==0){
                pay="未付款";
            }
            var questr=data[i].pro_img_url;
            var quearr=questr.split(",");
            document.getElementsByClassName("tbody2")[0].innerHTML+="<tr>" +
                "<td><img src='"+quearr[0]+"' alt=''/>"+data[i].pro_name+"</td>" +
                "<td>"+data[i].pro_price+"</td>" +
                "<td>"+data[i].order_detail_amount+"</td>" +
                "<td>"+data[i].order_detail_totalPrice+"</td>" +
                "<td>"+pay+"</td>" +
                "<td><p uid='"+data[i].pro_id+"' class='collection'>加入收藏</p><p uid='"+data[i].pro_id+"' class='Deleteorder'>删除</p></td>" +
                "</tr>"
        }
    })
}
//订单收藏
$(".tbody2").on("click",".collection",function(){
    var uid="uid="+$(this).attr("uid");
    $.get("/collection.do",uid,function(data){
        if(data=="ok"){
            display("加入收藏夹成功")
        }else{
            display("加入收藏夹失败")
        }
    })
});
//删除订单
$(".tbody2").on("click",".Deleteorder",function(){
    var Deleteorderdata="uid="+$(this).attr("uid");
    $.post("/Deleteorder.do",Deleteorderdata,function(data){
            if(data=="ok"){
                display("删除成功")
            }else{
                display("删除失败")
            }
            QueryOrder();
        }
    )
});

//我的收藏
//获取
huoqu();   //调用
console.log("2222222222222222222222222222222222222222222")
function huoqu(){
    console.log("2222222222222222222222222222222222222222222222222222222");
    $.post("/Collect.do",function (data) {

        console.log(data);
        $(".pcright_wdsc").html("");
        for(var i=0;i<data.length;i++){
            var str=data[i].pro_img_url;
            var arr=str.split(",");
            document.getElementsByClassName("pcright_wdsc")[0].innerHTML+="" +
                "<div class='pcright_wdscimg'>" +
                "<p>" +
                "<span class='quxiaoshoucang' uid='"+data[i].pro_id+"'>&#xe61d;</span>" +
                "</p>" +
                "<img src='"+arr[0]+"' alt=''/>" +
                "</div>"
        }
    });
}
//取消收藏
$(".pcright_wdsc").on("click",".quxiaoshoucang", function () {
    var Qdata="uid="+$(this).attr("uid");
    $.post("/quxiao.do",Qdata,function(){
        huoqu();
        display("取消收藏成功")
    })
});



//购物车
gouwuche() ;//获取购物车数据
function gouwuche(){
    yiyexianshi1=3;
    console.log(CurrentPage1,
    zongtiaoshu1,
    yiyexianshi1)
    var yiyedata="xian="+yiyexianshi1+"&Curre="+CurrentPage1;
    $(".tbodygou").html("");
    $.get("/getaSC.do",yiyedata,function (data) {
        console.log(data);
        for(var i=0;i<data.length;i++){
            var str=data[i].pro_img_url;
            var arr=str.split(",");
            var meng=data[i].pro_price*data[i].sc_amount;
            document.getElementsByClassName("tbodygou")[0].innerHTML+="<tr>" +
                "<td><input value='"+data[i].sc_id+"' name='test' class='check' type='checkbox'></td>" +
                "<td><img src='"+arr[0]+"' alt=''><a>"+data[i].pro_name+"</a></td>" +
                "<td>"+data[i].pro_type_name+"</td>" +
                "<td><span class='danjia'>"+data[i].pro_price+"</span></td>" +
                "<td><a value='"+data[i].sc_id+"' class='jian'>&#xe641;</a><span class='jiange'>"+data[i].sc_amount+"</span><a value='"+data[i].sc_id+"' class='jia'>&#xe65e;</a></td>" +
                "<td>￥:<span class='xiaoji'>"+meng+"</span></td>" +
                "<td><p value='"+data[i].pro_id+"' class='jiaruSc' > 加入收藏</p></td>" +
                "</tr>"
        }
    })

}
// 购物车 减
$(".tbodygou").on("click",".jian", function () {
    if($(this).next().html()==1){}else{
        $(this).next().html(parseInt($(this).next().html())-1);
        $(this).parent().next().children(".xiaoji").html($(this).parent().prev().children(".danjia").html()*$(this).next().html());
        var Numdata="num="+$(this).next().html()+"&sc_id="+ $(this).attr("value");
        $.post("/Number.do",Numdata)
        show()
    }
}) ;
// 购物车  加
$(".tbodygou").on("click",".jia", function () {
    $(this).prev().html(parseInt($(this).prev().html())+1);
    $(this).parent().next().children(".xiaoji").html($(this).parent().prev().children(".danjia").html()*$(this).prev().html());
    var Numdata="num="+$(this).prev().html()+"&sc_id="+ $(this).attr("value");
    $.post("/Number.do",Numdata)
    show();
});
// 全选和反全选
$(".quanxuan").on("click",function(){
    if( $(".quanxuan").is(':checked')==true){
        $(".check").prop("checked",true);
        show()
    }else{
        $(".check").prop("checked",false);
        $(".zongjia").html("")
    }
});
// 总价pcright_wddd   check
$(".tbodygou").on("click",".check",function(){
    show()
});
var check_val = [];
var cval = [];
function show(){
    obj = document.getElementsByName("test");
    check_val = [];
    cval = [];
    var dzi=document.getElementsByClassName("check");
    for(k in obj){
        if(obj[k].checked)
            check_val.push(obj[k].value);
    }
    for(var d=0;d<check_val.length;d++){
        for(var i=0;i<dzi.length;i++){
            if($(dzi[i]).attr("value")==check_val[d]){
                var ff=$(dzi[i]).parent().next().next().next().next().next().children(".xiaoji").html()
                cval.push(ff)
            }
        }
    }
    $(".zongjia").html(eval(cval.join("+")))
}
//移出购物车
$(".pcright_wdddjsbtn").on("click",function(){
    var obj = document.getElementsByName("test");
    var kkk=[];
    var goudata;
    for(k in obj){
        if(obj[k].checked)
            kkk.push(obj[k].value);
    }
    goudata="kkk="+kkk;
    $.post("/goudel.do",goudata, function () {
        display("移出购物车成功")
        gouwuche()
    })
});
//操作!!!
$(".tbodygou").on("click",".jiaruSc",function(){
    var pro_id="pro_id="+$(this).attr("value");
    $.post("/jointhe.do",pro_id, function (data) {
        console.log(data);
            if(data=="ok"){
                display("加入收藏夹成功")
            }
    })
});


//订单点击状态变化
$(".cus").on("click",function(){
    $(".cus").css({"background-color":"#273B5E","color":"white"});
    $(this).css({"background-color":"white","color":"#273B5E"})
});
$(".cha").on("click",function(){
    console.log($(this).attr("uid"));
    $(".mito").css({display:"none"});
    if($(this).attr("uid")==1){
        $(".pcright_order").css({display:"block"});
        $(".cus2").css({"background-color":"white","color":"#273B5E"});
        Querydata="order_pay=0&order_status=0";
        QueryOrder();
    }
    if($(this).attr("uid")==2){
         $(".pcright_order").css({display:"block"});
         $(".cus3").css({"background-color":"white","color":"#273B5E"});
         Querydata="order_pay=1&order_status=0";
         QueryOrder()
    }
    if($(this).attr("uid")==3){
        $(".pcright_order").css({display:"block"});
        $(".cus4").css({"background-color":"white","color":"#273B5E"});
        Querydata="order_pay=1&order_status=1";
        QueryOrder()
    }
});


//弹框显示隐藏
function display(dat){
    $("#alert").html(dat);
    $("#zhezhaoceng").css({display:"block"});
    $("#zhezhaoceng").on("click",function(){
        disnone();
    });
    function disnone(){
        $("#zhezhaoceng").css({display:"none"})
    }
    setTimeout(function(){
        disnone()
    },2000)
}


// 购物车分页
//地址分页
function gouwuchefenye(){
    // 求总条数
        $.get("/Afewpages2.do",function(data){
            zongtiaoshu1=data[0].zy;
            console.log(zongtiaoshu1);
            $(".Afewpages1").html(Math.ceil(zongtiaoshu1/yiyexianshi1));
        });

//第几页
    $(".afewpages1").html(CurrentPage1);
//首页
    $(".homepPage1").on("click", function () {
        CurrentPage1 =1;
        gouwuche()
    });
//上一页
    $(".PreviousPage1").on("click", function () {
        if(CurrentPage1==1){

        }else{
            CurrentPage1--;
            $(".afewpages1").html(CurrentPage1);
            gouwuche()
        }
    });
//下一页
    $(".nextPage1").on("click", function () {
        console.log(CurrentPage1);
        console.log(Math.ceil(zongtiaoshu1/yiyexianshi1));
        if(CurrentPage1==Math.ceil(zongtiaoshu1/yiyexianshi1)){

        }else{
            CurrentPage1++;
            $(".afewpages1").html(CurrentPage1);
            console.log(CurrentPage1);
            gouwuche()
        }

    });
//尾页
    $(".Shadowe1").on("click", function () {
        CurrentPage1=Math.ceil(zongtiaoshu1/yiyexianshi1);
        gouwuche()
    })
}