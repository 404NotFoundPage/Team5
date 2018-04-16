/* Created by lixin on 2018/3/30.*/
var autoPlay;//�ֲ���ʱ��
var z=0;//��ǰ�ֲ�ͼ�ı��
var changediv=$("#choose>div");//�����л�div
//�ڼ���ʱ��������
//$(document).ready(function(){
//    $("header,footer,#container").hide();
//});
$(function(){
    //������ɺ󣬼���DIV���أ�������ʾ

    //�л���Ʒ���������
    $("#choose>div").each(function(index,ele){
        $(ele).click(function(){
            //���л����г�ʼ��
            for(var j=0;j<changediv.length;j++){
                $(changediv[j]).css({"color":"#273b5e","background-color":"white",
                    "border-left":"1px solid black","border-right":"1px solid black"});
            }
            $(ele).css({"color":"white","background-color":"#273b5e","border":"none"})
            //�����л�div����ʾ��ͬ���ܿ�
            if(index==0){
                $("#Details").css({"display":"block"});
                $("#productComment").css({"display":"none"});
            }else if(index==1){
                $("#Details").css({"display":"none"});
                $("#productComment").css({"display":"block"});
            }
        });
    });

    //���Сͼ�л���ͼƬ
    $("#showImg ul img").each(function(index,ele){
        $(ele).click(function(){
            var imgsrc=$(ele).attr('src');//��ȡ���ͼƬ��·��
            $("#showImg div:nth-child(1)>img").attr({'src':imgsrc});//�ı��ͼƬ��·��
            z=index;
        })
    });
    //ͼƬ�ֲ�
    var imglist=$("#showImg ul img");//Ҫ�ֲ�ͼ��·��
    var imgSrclist=[];//�ֲ�ͼ��·������
    for(var i=0;i<imglist.length;i++){//��ȡҪ�����ֲ���ͼƬ·���������������
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
//����л�����һ��
    $("#left").click(function(){
        if(z>0){
            z--;
        }else if(z==0){
            z=imgSrclist.length-1;
        }
        console.log(z);
        $("#showImg div:nth-child(1)>img").attr({'src':imgSrclist[z]});

    });
//�ұ��л�����һ��
    $("#right").click(function(){
        if(z<imgSrclist.length-1){
            z++;
        }else if(z==imgSrclist.length-1){
            z=0;
        }
        console.log(z)
        $("#showImg div:nth-child(1)>img").attr({'src':imgSrclist[z]});
    });
//������
    var number=$("#showNumber").attr("value");
    $("#reduce").click(function(){
        if(number>1){
            number--;
            $("#showNumber").attr({"value":number});
        }
    });
//������
    $("#add").click(function(){
        number++;
        $("#showNumber").attr({"value":number});
    });

    var dashedDivlist=$(".dashedDiv");
    for(var j=0;j<dashedDivlist.length;j++){
        $(dashedDivlist[j]).css({"border-radius":"8px","border":"1px dashed black"});
    }
});
