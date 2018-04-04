$(document).ready(function () {
//监听滚动条
    setTimeout(function () {
        $("header").css("opacity",1)
    },200);
    setTimeout(function () {
        $(".sp_banner").css("opacity",1)
    },300);
    $(window).scroll(function () {
       if($(this).scrollTop()>1){
           $(".returnTop").fadeIn();
       }else{
           $(".returnTop").fadeOut();
       }
       if($(this).scrollTop()>410){
           $(".sec2").css("opacity",1);
        }
        if($(this).scrollTop()>940){
            $(".sec3").css("opacity",1);
        }
        if($(this).scrollTop()>1540){
            $(".sec4").css("opacity",1);
        }
        if($(this).scrollTop()>2160){
            $(".sec5").css("opacity",1);
        }
        if($(this).scrollTop()>2460){
            $(".sec6").css("opacity",1);
        }
        if($(this).scrollTop()>2900){
            $(".sec7").css("opacity",1);
        }
    });
//停止旋转
    $(".sp_sec2_right>img").mouseenter(function () {
        $(this).css("animation-play-state","paused")
    }).mouseout(function () {
        $(this).css("animation-play-state","running")
    });

    $(".returnTop").click(function () {
        $('html,body').animate({scrollTop:0},'slow');
    });

});




