/**
 * Created by X on 2018/3/28.
 */
$(document).ready(function () {
    /*----------监听滚动条-------------*/
    setTimeout(function () {
        $("header").css("opacity",1)
    },200);
    setTimeout(function () {
        $(".bf_banner").parents("section").css("opacity",1)
    },300);
    $(window).scroll(function () {
        if($(this).scrollTop()>410){
            $("section:nth-of-type(2)").css("opacity",1);
        }
        if($(this).scrollTop()>1100){
            $("section:nth-of-type(3)").css("opacity",1);
/*---------------案例1展示请求-------------------------*/
            $.ajax({
                type:"get",
                url:"/diplayCase.do",
                success:function (data) {
                    let caseImgurl = data[0].cass_img_urll;
                    let title = data[0].cass_title;
                    let p1 = data[0].cass_total.substring(0,23);
                    let p2 = data[0].cass_total.substring(23,data[0].cass_total.length-1);
                    $(".ClassicCase").css("background-image","url(../public/"+caseImgurl+")");
                    $(".ClassicCase>div>p:nth-of-type(1)").html("<span>&#xe71e;</span>"+title+"<img src='../public/images/suci_red.png'>")
                    $(".ClassicCase>div>p:nth-of-type(2)").text(p2);
                    $(".ClassicCase>div>p:nth-of-type(3)").text(p1);
                }
            });
        }
        if($(this).scrollTop()>2000){
            $("section:nth-of-type(4)").css("opacity",1);
/*---------------案例2展示请求-------------------------*/
            $.ajax({
                type:"get",
                url:"/displayCase2.do",
                success:function (data) {
                    let caseImgurl = data[0].cass_img_urll;
                    let title = data[0].cass_title;
                    let p = data[0].cass_total;
                    $(".lyy_left").css("background-image","url(../public/"+caseImgurl+")");
                    $(".lyy_right>p:nth-of-type(1)").html("<span>&#xe71e;</span>"+ title +"<img src='../public/images/suci_red.png'>");
                    $(".lyy_right>p:nth-of-type(2)").text(p);
                }
            })
        }
        if($(this).scrollTop()>2500){
            $("section:nth-of-type(5)").css("opacity",1);
/*---------------案例3展示请求-------------------------------------*/
            $.ajax({
                type:"get",
                url:"/displayCase3.do",
                success:function (data) {
                    let caseImgurl = data[0].cass_img_urll;
                    let title = data[0].cass_title;
                    let p1 = data[0].cass_total.substring(0,21);
                    let p2 = data[0].cass_total.substring(21,data[0].cass_total.length-1);
                    $(".cftx_right").css("background-image","url(../public/"+caseImgurl+")");
                    $(".cftx_left>p:nth-of-type(1)").html("<span>&#xe71e;</span>"+ title +"<img src='../public/images/suci_red.png'>");
                    $(".cftx_left>p:nth-of-type(2)").text(p1);
                    $(".cftx_left>p:nth-of-type(3)").text(p2);
            }
            });
        }
    });
/*上传图片代理点击事件*/
    $("#clickImg").click(function () {
        $("#updataImg").click();
    });
    $("#updataImg").change(function () {
        let obj = $("#updataImg")[0].files[0];
        let fr = new FileReader();
        fr.onload = function () {
            $("#custom_updata").attr('src', this.result);
            $("#clickImg").css("display", "none");
            $("#bf_cancel").css("display", "block")
        };
        fr.readAsDataURL(obj);
        $("#bf_cancel").click(function () {
            $("#clickImg").css("display", "block");
            $("#bf_cancel").css("display", "none");
            $("#custom_updata").attr('src', "public/images/baifang_custom_1.png");
            $("body>img").each(function (i, e) {
                $(e).remove();
            });
        });
    });
/*--------------移动商品-----------------------------*/
    $(".custom_right").on("click","i>span:nth-of-type(2)",function () {
        $("#picview").each(function (i, e) {
            $(e).remove();
        });
        let cloneImg = $(this).parent().siblings("img").clone();
        $(cloneImg).attr({"name":"viewArea","id":"viewArea","draggable":"false"});
        let Imgsrc = cloneImg[0].src.split("1111")[1];
        let str = "<div id='picview' class='picview'>" +
            "<img name='viewArea' id='viewArea' draggable='false'>"+"</div>";
        $("body").append(str);
        $("#picview").css({"position": "absolute", "left": '125px', "top": '985px'});
/* --------------移动初始化----------------------------------   */
        $('#viewArea').zoomMarker({
            src: ".."+Imgsrc,
            rate: 0.1,
        });

    });

    // $("body").on("mousedown", ".moveImg", function (e) {
    //     let _self = this;
    //     let isMove = true;
    //     let div_x = e.pageX - $(this).offset().left;
    //     let div_y = e.pageY - $(this).offset().top;
    //     console.log($(this).offset().left);
    //     $(document).mousemove(function (e1) {
    //         // console.log(e1.pageY);
    //         // console.log(e1.pageY-div_y+"_____________");
    //         if (isMove) {
    //             let obj = $(_self);
    //             let left = e1.pageX - div_x;
    //             if (left < 125) left = '125px';
    //             if (left > 680) left = '680px';
    //             let top = e1.pageY - div_y;
    //             if (top > 1335) top = '1335px';
    //             if (top < 985) top = '985px';
    //             obj.css({"position": "absolute", "left": left, "top": top});
    //         }
    //     }).mouseup(function (e) {
    //         isMove = false;
    //     })
    // });
/*--------------商品切换-------------------*/
    $(".custom_right-top li").each(function (i, e) {
        $(e).click(function () {
            $(this).css({"background-color":"#273b5e",}).siblings().css({"background-color":"#e7ebf0"});
            $(this).children().css("color","white");
            $(this).siblings().children().css("color","#273b5e");
            $("#picview>img").each(function (i, e) {
                $(e).remove();
            });
            if (i == 0) {
                $(".custom_right_bottom-huaping").css({"opacity": 1, "z-index": "3"});
                $(".custom_right_bottom-chaju").css({"opacity": 0, "z-index": "1"});
                $(".custom_right_bottom-baijiang").css({"opacity": 0, "z-index": "1"});
            }
            if (i == 1) {
                $(".custom_right_bottom-huaping").css({"opacity": 0, "z-index": "1"});
                $(".custom_right_bottom-chaju").css({"opacity": 1, "z-index": "3"});
                $(".custom_right_bottom-baijiang").css({"opacity": "0", "z-index": "1"});
            }
            if (i == 2) {
                $(".custom_right_bottom-huaping").css({"opacity": 0, "z-index": "1"});
                $(".custom_right_bottom-chaju").css({"opacity": 0, "z-index": "1"});
                $(".custom_right_bottom-baijiang").css({"opacity": 1, "z-index": "3"});
            }
        });
    });
/*设计板块收藏*/
    $("#huaping i>span:nth-of-type(1),#chaju i>span:nth-of-type(1),#baijiang i>span:nth-of-type(1)").each(function (i,e) {
        $(this).attr("soucangOnOff","true");
    });
    $(".custom_right").on("click","i>span:nth-of-type(1)",function () {
        let _self = this;
        let first = $(this).parents("div")[0];
        let goods_type;
        // console.log($(first).attr("id"));
        if($(first).attr("id")=="huaping"){
            goods_type = 1;
        }else if($(first).attr("id")=="cahju"){
            goods_type = 2;
        }else {
            goods_type = 3;
        }
        if($(_self).attr("soucangOnOff")==="true"){
            $(this).html("&#xe61d;");
                /*收藏ajax写入数据库*/
            $.ajax({
                type:"get",
                url:"/soucang.do",
                data:{"goods_type":goods_type},
                success:function (data) {
                    $(_self).attr("soucangOnOff","false");
                    console.log(data);
                }
            });
        }else {
            $(this).html("&#xe61c;");
            $.ajax({
                type:"get",
                url:"/cancelsoucang.do",
                data:{"goods_type":goods_type},
                success:function (data) {
                    $(_self).attr("soucangOnOff","true");
                    console.log(data)
                }
            });
        }
    });
/*---------------茶具ajax请求-------------------------*/
    $(".custom_right-top li:nth-of-type(2)").click(function () {
        $.ajax({
            type:"get",
            url:"/chaju.do",
            success:function (data) {
                let Imgsrc = data[0].pro_img_url.split(",");
                let Imgtext = data[0].pro_text_title.split(",");
                $(".custom_right_bottom-chaju img").each(function (i,e) {
                    $(this).attr("src","../public/images/"+Imgsrc[i])
                });
                $(".custom_right_bottom-chaju p").each(function (i,e) {
                    $(this).text(Imgtext[i])
                });
            }
        });
    });
/*---------------摆件ajax请求-------------------------*/
    $(".custom_right-top li:nth-of-type(3)").click(function () {
        $.ajax({
            type:"get",
            url:"/baijian.do",
            success:function (data) {
                let Imgsrc = data[0].pro_img_url.split(",");
                let Imgtext = data[0].pro_text_title.split(",");
                $(".custom_right_bottom-baijiang img").each(function (i,e) {
                    $(this).attr("src","../public/images/"+Imgsrc[i])
                });
                $(".custom_right_bottom-baijiang p").each(function (i,e) {
                    $(this).text(Imgtext[i])
                });
            }
        });
    });


});

















