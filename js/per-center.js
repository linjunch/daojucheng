var timer = null;
var num = 0;
gogo();

$(".mg_auto").mouseenter(function () {
    clearInterval(timer);
});
$(".mg_auto").mouseleave(function () {
    gogo();
});


$(".mg_auto ol li").mouseover(function () {
    num = $(this).index();
    anm(num);
});


function anm(num){

    $(".mg_auto ul").stop().animate({
        "left":-num*920
    },500);

    $(".mg_auto ol li").eq(num).addClass("current");
    $(".mg_auto ol li").eq(num).siblings().removeClass("current");
}
function gogo() {
    timer = setInterval(function () {
        num++;
        if(num === 4) num=0;
        anm(num);
    },2000);
}


/*侧边栏移入移出事件*/
$('.aside ul li').eq(0).siblings().hover(function () {
    $(this).css('border-left','6px solid #f74a4a');
    $(this).children('a').css('color','#f74a4a');
    var Y = parseInt($(this).children('a').children('i').css('background-position-y'))+30;
    var X = parseInt($(this).children('a').children('i').css('background-position-x'));
    $(this).children('a').children('i').css('background-position-x',X+'px');
    $(this).children('a').children('i').css('background-position-y',Y+'px')
},function () {
    $(this).css('border-left','6px solid transparent');
    $(this).children('a').css('color','#3a3f4a');
    var YY = parseInt($(this).children('a').children('i').css('background-position-y'))-30;
    var XX = parseInt($(this).children('a').children('i').css('background-position-x'));
    $(this).children('a').children('i').css('background-position-x',XX+'px');
    $(this).children('a').children('i').css('background-position-y',YY+'px')
});

$('.aside ul li').eq(1).hover(function () {
    $(this).children('a').children('i').css('background-position','-44px -542px');
},function () {
    $(this).children('a').children('i').css('background-position','-5px -542px');
});

$('.aside ul li').eq(2).hover(function () {
    $(this).children('a').children('i').css('background-position','-44px -570px');
},function () {
    $(this).children('a').children('i').css('background-position','-4px -570px');
});

/*我的特权移入移出事件*/
$('.my_pri ul li a').hover(function () {
    var pri_x = parseInt($(this).children('i').css('background-position-x'));
    var pri_y = parseInt($(this).children('i').css('background-position-y'))-108;
    $(this).children('i').css('background-position-x',pri_x+'px');
    $(this).children('i').css('background-position-y',pri_y+'px')
},function () {
    var pri_xx = parseInt($(this).children('i').css('background-position-x'));
    var pri_yy = parseInt($(this).children('i').css('background-position-y'))+108;
    $(this).children('i').css('background-position-x',pri_xx+'px');
    $(this).children('i').css('background-position-y',pri_yy+'px')
});

/*我的任务移入移出事件*/
$('.my_task ul li a').hover(function () {
    var task_x = parseInt($(this).children('i').css('background-position-x'));
    var task_y = parseInt($(this).children('i').css('background-position-y'))-145;
    $(this).children('i').css('background-position-x',task_x+'px');
    $(this).children('i').css('background-position-y',task_y+'px')
},function () {
    var task_xx = parseInt($(this).children('i').css('background-position-x'));
    var task_yy = parseInt($(this).children('i').css('background-position-y'))+145;
    $(this).children('i').css('background-position-x',task_xx+'px');
    $(this).children('i').css('background-position-y',task_yy+'px')
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