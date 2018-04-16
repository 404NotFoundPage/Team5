$(".connt2-2").focus(function(){
    console.log(222);
    $(this).parent().css({border:"1px solid #273B5E"})
});
$(".connt2-2").blur(function(){
    console.log(222);
    $(this).parent().css({border:"1px solid #d4d4d4"})
});
$(".yan2-2").focus(function(){
    console.log(222);
    $(this).parent().css({border:"1px solid #273B5E"})
});
$(".yan2-2").blur(function(){
    console.log(222);
    $(this).parent().css({border:"1px solid #d4d4d4"})
});

//发送验证码

$(".yanimg").on("click",function(){
    if($("input[name=username]").val()!=""){
        if($("input[name=password]").val()==$("input[name=passwordcopy]").val()&&$("input[name=passwordcopy]").val()!=""){
            var sen="sen="+$(".connt2-2").val();
            $.post("/Sendmessage.do",sen,function(data){
                console.log(data)
                    if(data=="验证码失败"){
                        $(".connt2-2")[0].focus();
                        $(".connt2-2").val("");
                        $("input[name=username]").attr('placeholder',"无效的手机号");
                    }else{
                        $(".yanimg").html("已发送");
                    }
            });

        }else{
            $("input[name=password]").val("");
            $("input[name=passwordcopy]").val("");
            $("input[name=password]").attr('placeholder',"两次密码输入不符合");
            $("input[name=passwordcopy]").attr('placeholder',"两次密码输入不符合");
            /*$(".pass2").attr("disabled", true);
             $(".pass2").removeAttr("disabled");*/
        }
    }else{
        $(".connt2-2").val("");
        $("input[name=username]").attr('placeholder',"请输入手机号");;
        console.log("没有值")
    }
});
$(".reg-but").on("click",function(){
    if($(".yan2-2").val()){
        if($(".yan2-2").val().length==6){
            var telphone=$("input[name=username]").val();
            var password=$("input[name=password]").val();
            var VerCode=$("input[name=VerCode]").val();
            var phdata="telphone="+telphone+"&VerCode="+VerCode+"&password="+password;
            $.post("/reg.do",phdata,function(data){
                    console.log(data)
            })
        }else{
            $(".yan2-2").val("");
            $(".yan2-2").attr('placeholder',"长度不够")
        }
    }else{
        $(".yan2-2").attr('placeholder',"请输入")
    }
})