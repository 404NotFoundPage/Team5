//点击边框变色
$(".inp").focus(function(){
    console.log(222);
    $(this).parent().css({border:"1px solid #273B5E"})
});
$(".inp").blur(function(){
    console.log(222);
    $(this).parent().css({border:"1px solid #d4d4d4"})
});

//登录请求  请求地址/login.do  	请求数据 data   类名inp   中的值

$("#but").on("click",function(){
    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
    var data="username="+username+"&password="+password;
    console.log(data);
    $.post("/login.do",data,function(xxxx){
        console.log(typeof xxxx);
        if(xxxx=="ok"){
            window.location.href="PersonalCenter.html";
        }else if(xxxx=="no"){
            $(".inp").val("");
            $(".inp").attr('placeholder',"账号或密码错误")
        }
    })
});
