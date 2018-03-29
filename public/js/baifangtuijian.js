/**
 * Created by X on 2018/3/28.
 */
$(document).ready(function () {
    $("#clickImg").click(function () {
        $("#updataImg").click();
    });
    $("#updataImg").change(function () {
        let obj=$("#updataImg")[0].files[0];
        let fr=new FileReader();
        fr.onload=function () {
            $("#custom_updata").attr('src',this.result);
            $("#clickImg").css("display","none");
            $("#bf_cancel").css("display","block")
        };
        fr.readAsDataURL(obj);
        $("#bf_cancel").click(function () {
            $("#clickImg").css("display","block");
            $("#bf_cancel").css("display","none");
            $("#custom_updata").attr('src',"images/baifang_custom_1.png");
            $("body>img").each(function (i,e) {
                $(e).remove();
            });
        });
    });
/*--------------移动商品-----------------------------*/
    $(".custom_right_bottom-huaping li img").click(function () {
        let cloneImg = $(this).clone()[0];
        $(cloneImg).attr("class","moveImg");
        $("body>img").each(function (i,e) {
            $(e).remove();
        });
        $(cloneImg).css({"position":"absolute","left":'125px', "top":'985px'});
        $("body").append($(cloneImg))
    });
    $("body").on("mousedown",".moveImg",function (e) {
            let _self = this;
            let isMove = true;
            let div_x = e.pageX - $(this).offset().left;
            let div_y = e.pageY - $(this).offset().top;
            console.log($(this).offset().left);
            $(document).mousemove(function (e1) {
                // console.log(e1.pageY);
                // console.log(e1.pageY-div_y+"_____________");
                if (isMove) {
                    let obj = $(_self);
                    let left = e1.pageX - div_x;
                    if(left<125) left = '125px';
                    if(left>680) left = '680px';
                    let top = e1.pageY - div_y;
                    if(top>1335) top = '1335px';
                    if(top<985) top = '985px';
                    obj.css({"position":"absolute","left":left, "top":top});
                }
            }).mouseup(function (e) {
                isMove = false;
            })


    });
});
