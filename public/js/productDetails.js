/* Created by lixin on 2018/3/30.*/
var autoPlay;//轮播定时器
var z=0;//当前轮播图的编号
var changediv=$("#choose>div");//功能切换div
//在加载时隐藏内容
$(document).ready(function(){
    $("header,footer,#container").hide();
});
$(function(){
    //加载完成后，加载DIV隐藏，内容显示
    setTimeout(function(){
        $("#load").fadeOut(400).hide();
        $("header,footer,#container").fadeIn(600).show();
    },1500);
    autoPlay=setInterval(changeImg,1500);

    //切换商品详情和评论
    $("#choose>div").each(function(index,ele){
        $(ele).click(function(){
            //对切换进行初始化
            for(var j=0;j<changediv.length;j++){
                $(changediv[j]).css({"color":"#273b5e","background-color":"white",
                    "border-left":"1px solid black","border-right":"1px solid black"});
            }
            $(ele).css({"color":"white","background-color":"#273b5e","border":"none"})
            //根据切换div，显示不同功能块
            if(index==0){
                $("#Details").css({"display":"block"});
                $("#productComment").css({"display":"none"});
            }else if(index==1){
                $("#Details").css({"display":"none"});
                $("#productComment").css({"display":"block"});
            }
        });
    });

   //点击小图切换大图片
    $("#showImg ul img").each(function(index,ele){
        $(ele).click(function(){
            var imgsrc=$(ele).attr('src');//获取点击图片的路径
            $("#showImg div:nth-child(1)>img").attr({'src':imgsrc});//改变大图片的路径
            z=index;
        })
    });
   //图片轮播
    var imglist=$("#showImg ul img");//要轮播图的路径
    var imgSrclist=[];//轮播图的路径数组
    for(var i=0;i<imglist.length;i++){//获取要进行轮播的图片路径，存放在数组中
        var src=$(imglist[i]).attr('src');
        imgSrclist.push(src)
    };
    function changeImg(){
        $("#showImg div:nth-child(1)>img").attr({'src':imgSrclist[z]});
        if(z<imgSrclist.length){
            z++
        }else if(z==imgSrclist.length){
            z=0;
        }
    }
//左边切换，上一张
    $("#left").click(function(){
        if(z>0){
            z--;
        }else if(z==0){
            z=imgSrclist.length-1;
        }
        console.log(z);
        $("#showImg div:nth-child(1)>img").attr({'src':imgSrclist[z]});

    });
//右边切换，下一张
    $("#right").click(function(){
        if(z<imgSrclist.length-1){
            z++;
        }else if(z==imgSrclist.length-1){
            z=0;
        }
        console.log(z)
        $("#showImg div:nth-child(1)>img").attr({'src':imgSrclist[z]});
    });
//数量减
    var number=$("#showNumber").attr("value");
    $("#reduce").click(function(){
        if(number>1){
            number--;
            $("#showNumber").attr({"value":number});
        }
    });
//数量加
    $("#add").click(function(){
        number++;
        $("#showNumber").attr({"value":number});
    });

//鼠标移入轮播图片中，轮播停止，当鼠标移出轮播图片1500ms后，轮播继续
    $("#showImg div:nth-child(1)").mouseenter(function(){
        clearInterval(autoPlay);
    }).mouseleave(function(){
        setTimeout(function(){
            autoPlay=setInterval(changeImg,1500);
        },1500)
    });

    var dashedDivlist=$(".dashedDiv");
    for(var j=0;j<dashedDivlist.length;j++){
        $(dashedDivlist[j]).css({"border-radius":"8px","border":"1px dashed black"});
    }
});
