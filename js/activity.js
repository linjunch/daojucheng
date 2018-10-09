$(function () {



$(function () {
    $(".game_m").click(function () {
        $(".game_top").hide(0);
        $(".game_bot").show();
    });
    $(".game_s").click(function () {
        $(".game_bot").hide(0);
        $(".game_top").show();
    });
});
//===========================================================
$("form").submit(function (e) {
    var flag = 0;
    var logname = $(".log_name").children().val();
    var logpsw = $(".log_psw").children().val();
    if(logname ===""){
        $(".tip_txt").html("您还没有输入账号!");
        $(".log_tip").css("visibility","visible");
        setTimeout(function () {
            $(".log_tip").css("visibility","hidden")
        },5000);
        flag  = 1;
    }else if (logname !==""&&logpsw==="") {
        $(".tip_txt").html("您还没有输入密码!");
        $(".log_tip").css("visibility","visible");
        setTimeout(function () {
            $(".log_tip").css("visibility","hidden")
        },5000);
        flag = 1;
    }
    if (flag){
        e.preventDefault();
    } else{
        alert("登录成功!")
        $(".login").hide(0);
        $(".bg").hide(0);
    }

});
//======================================================
$(".a_log").click(function () {
    $(".login").show(0);
    $(".bg").show(0);
});
$(".close>span").click(function () {
    $(".login").hide(0);
    $(".bg").hide(0);
});

});