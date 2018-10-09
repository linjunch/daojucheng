$(function () {
    //======================轮播图=============================
    var num = 1;
    var timer = setInterval(function () {
        num++;
        if (num===4)num = 1;
        $(".auto").css("background-image","url(../images/qqreg"+num+".jpg)")
        // alert(1111)
    },3000);
    //=======================昵称===========================
    $(".reg_name").focus(function () {
        $(this).removeClass("error");
        $(".nametip").stop().animate({
            "height":"0"
        },100);
        $(this).parent().children().eq(1).hide();
    });
    $(".reg_name").blur(function () {
        if($(this).val()===""){
            $(this).addClass("error");
            $(".nametip").stop().animate({
                "height":"18px"
            },100);
        }else{
            $(this).parent().children().eq(1).show();
        }
    });
    //=====================密码=================================
    $(".reg_psw").focus(function () {
        $(this).removeClass("error");
        $(".pswtip").stop().animate({
            "height":"0"
        },100);
        $(this).parent().children().eq(1).hide();
    });
    $(".reg_psw").blur(function () {
        if($(this).val()===""){
            $(this).addClass("error");
            $(".pswtip").stop().animate({
                "height":"18px"
            },100);
        } else{
            $(this).parent().children().eq(1).show();
        }
    });
    //======================号码============================
    $(".getnum").focus(function () {
        $(this).parent().children().eq(2).hide();
    });
    $(".getnum").blur(function () {
        if($(this).val()!==""){
            $(this).parent().children().eq(2).show();
        }
    });
    //========================checkbox===========================
    $(".c1,.c2").change(function () {
        if ($(".c1").prop("checked")&&$(".c2").prop("checked")) {
            $(".ckbtip").stop().animate({
                "height":"0"
            },100);
        }
    });

    //=========================单提交==========================
    $(".forms").submit(function (e) {
        var flag = 0;
        if($(".reg_name").val()===""){
            $(".reg_name").addClass("error");
            $(".nametip").stop().animate({
                "height":"18px"
            },100);
            flag = 1;
        }
        if($(".reg_psw").val()===""){
            $(".reg_psw").addClass("error");
            $(".pswtip").stop().animate({
                "height":"18px"
            },100);
            flag = 1;
        }

        if(!($(".c1").prop("checked")&&$(".c2").prop("checked"))){
            $(".ckbtip").stop().animate({
                "height":"18px"
            },100);
            flag = 1;
        }else{
            $(".ckbtip").stop().animate({
                "height":"0"
            },100);
        }

        if ($(".getnum").val()===""||$(".ver").val()==="") {
            flag = 1;
        }

        if (flag){
            e.preventDefault();
        } else{
            alert("注册成功！")
        }

    });
        $(".reg_psw,.getnum,.ver").keyup(function (e) {
            if(e.which ===32){
                alert("请不要输入空格,空格自动删除");
                var val= $(this).val();
                val = val.substring(0,val.length-1);
                console.log(val);
                $(this).val(val);
            }
        });














});