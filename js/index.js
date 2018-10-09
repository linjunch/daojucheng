//==========================轮播图==================================
var timer = null;
var num = 0;
var li = ol.children;


gogo();


//鼠标进入停止轮播，移出继续轮播
auto.onmouseover = function () {
    clearInterval(timer);
};
auto.onmouseout = function () {
    gogo();
};


function gogo() {
    timer = setInterval(anm,2000)
}
//自动轮播函数
function anm () {
    if(num>=4){
        num = 0;
    }else{
        num ++;
    }
    ul.style.left = -num*770 + "px";
    point(num);
    spaninner(num);
}


// 小点定位
for (let i = 0;i<li.length;i++){
    li[i].onmouseenter = function () {
        num =i;
        ul.style.left = -num*770 + "px";
        point(num);
        spaninner(num);
    }
}


//span内容改变函数
var arr = ['玉剑传说','诚聚品七周年','神龙商店','幸运夺宝','青龙秘宝'];
function spaninner(num) {
    span.innerText = arr[num];
}
// 圆点定位函数
function point(num) {
    for (var k = 0;k<li.length;k++){
        li[k].style.backgroundColor = "white";
    }
    li[num].style.backgroundColor = "skyblue";
}

//================================导航条==========================================
// var navLi = nav.children;
// // for(var i in navLi ){
// //     navLi[i].onmouseenter = function () {
// //         for (var k in navLi){
// //             navLi[k].className = '';
// //         }
// //         this.className = "current";
// //     }
// // }

//============================Tab选项卡=============================
$("#tabul>li").mouseenter(function () {
   $(this).css({
       "background-color": "white",
       "color":"#3a3f4a",
       "border-bottom" :"1px solid #FFFFFF"
   });
   $(this).children().eq(2).removeClass("hidden");
   $(this).children().eq(2).addClass("showinner");
});

$("#tabul>li").mouseleave(function () {
    $(this).css({
        "background-color": "#f55656",
        "color":"#FFFFFF",
        "border-bottom" :"1px solid #ee4545"
    });
    $(this).children().eq(2).removeClass("showinner");
    $(this).children().eq(2).addClass("hidden");
});

$("#tabul>li").eq(0).hover(function () {
    $(this).children().eq(0).css({
        "background-position": "-144px -205px"
    });
},function () {
    $(this).children().eq(0).css({
        "background-position": "-144px -175px"
    });
});


$("#tabul>li").eq(1).hover(function () {
    $(this).children().eq(0).css({
        "background-position": "-26px -205px"
    });
},function () {
    $(this).children().eq(0).css({
        "background-position": "-26px -175px"
    });
});

$("#tabul>li").eq(2).hover(function () {
    $(this).children().eq(0).css({
        "background-position": "-57px -205px"
    });
},function () {
    $(this).children().eq(0).css({
        "background-position": "-57px -175px"
    });
});

$("#tabul>li").eq(3).hover(function () {
    $(this).children().eq(0).css({
        "background-position": "-85px -205px"
    });
},function () {
    $(this).children().eq(0).css({
        "background-position": "-85px -175px"
    });
});

$("#tabul>li").eq(4).hover(function () {
    $(this).children().eq(0).css({
        "background-position": "-116px -205px"
    });
},function () {
    $(this).children().eq(0).css({
        "background-position": "-116px -175px"
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

