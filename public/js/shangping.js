$(document).ready(function () {
//监听滚动条
    $(window).scroll(function () {
       if($(this).scrollTop()>1){
           $(".returnTop").fadeIn();
       }else{
           $(".returnTop").fadeOut();
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
    })
});




