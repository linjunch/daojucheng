$(function () {
    $(".slideup").click(function () {
        if($(this).children().attr("class")=="hot_log1"){
            $(".sort_box").stop().slideUp(500);
            $(this).html("展开<span class='hot_log2'><span>")
        }else{
            $(".sort_box").stop().slideDown(500);
            $(this).html("收起<span class='hot_log1'><span>")
        }

    });
        function gogo(obj) {
            obj.timer = setInterval(function () {
                obj.num++;
                if(obj.num === obj.jq.children().length){
                    obj.num = 0 ;
                    obj.jq.css("top",-obj.num*30+"px");
                    obj.num = 1;
                }
                obj.jq.stop().animate({
                    "top":-obj.num*30
                },300)
            },2000);
        }
        var obj1 = {
            jq:$(".one"),
            timer: null,
            num:0
        };

        var obj2 = {
            jq:$(".two"),
            timer: null,
            num:0
        };

        var obj3 = {
            jq:$(".three"),
            timer: null,
            num:0
        };



        gogo(obj1);
        gogo(obj2);
        gogo(obj3);



    $(".one").hover(function () {
            clearInterval(obj1.timer);
        },function () {
            gogo(obj1);
        });
    $(".two").hover(function () {
            clearInterval(obj2.timer);
        },function () {
            gogo(obj2);
        });
    $(".three").hover(function () {
            clearInterval(obj2.timer);
        },function () {
            gogo(obj2);
        });




    // console.log(typeof $(".one"));


    $(".rec_btn").click(function () {
        var src= $(this).parent().parent().children().eq(0).children().eq(0).attr("src");
        // console.log(src);
        var dec = $(this).parent().parent().children().eq(1).html();
        var price = $(this).parent().children().eq(0).children().eq(1).children().eq(0).html();
        $(".bg").show(0);
        $(".bean_buy").stop().show(0);
        $(".buy_img>img").attr("src",src);
        $(".dec").html(dec);
        $(".c1").html(dec);
        $(".c2>span").html(price);
    });
    $(".buy_close").click(function () {
        $(".bean_buy").stop().hide(0);
        $(".bg").hide(0);
    });
    $(".buy_btn").click(function () {
        alert("你来的太慢了，该商品被抢光了，下次早点吧");
        $(".bean_buy").stop().hide(0);
        $(".bg").hide(0);
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