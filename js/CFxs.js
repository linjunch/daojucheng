/*窗口滚动监听事件-导航栏下拉固定*/
$(window).scroll(function () {
    if($(window).scrollTop() >= $(window).height()){
        if($('.hold-position').css('position') == 'relative') {
            $('.hold-position').css({'position': 'fixed', 'left':'0','top':'0','z-index': '999', 'display': 'none'});
            /*修改导航条高度*/
            $('.hold-position').css('height','112px');
            $('.info-fix').css('height','64px');
            $('.i-jcp').css({'width':'135px','height':'52px','background-size':'162px 50px','margin-top':'6px'});
            $('.i-solgan').css({'margin-top':'8px','weight':'88px','height':'52px','background-size':'88px'});
            $('.carbox').css('margin-top','21px');
            $('.loginbar').css('margin-top','12px');
            $('.sosobox').css('margin-top','13px');
            $('.head-fix').css('height','48px');
            $('.top-all-goods').css({'font-size':'14px','line-height':'48px'});
            $('.top-head .top-menu li').css({'font-size':'14px','line-height':'48px'});
            $('.allgoods').css('top','48px');
            $('.hold-position').stop().slideDown(300);
        }
    }
    else if($(window).scrollTop() < $(window).height()){
        $('.hold-position').css({'position':'relative','z-index':'','display':'block'})
        /*修改导航条高度*/
        $('.hold-position').css('height','164px');
        $('.info-fix').css('height','100px');
        $('.i-jcp').css({'width':'270px','height':'90px','background-size':'325px 100px','margin-top':'0'});
        $('.i-solgan').css({'margin-top':'19px','weight':'148px','height':'71px','background-size':'100%'});
        $('.carbox').css('margin-top','47px');
        $('.loginbar').css('margin-top','39px');
        $('.sosobox').css('margin-top','39px');
        $('.head-fix').css('height','64px');
        $('.top-all-goods').css({'font-size':'16px','line-height':'64px'});
        $('.top-head .top-menu li').css({'font-size':'18px','line-height':'64px'});
        $('.allgoods').css('top','64px');
    }
})
/*全部商品分类移入弹出事件*/
$('.top-all-goods').eq(0).mouseenter(function () {
    $('.top-all-goods').eq(0).css("text-decoration","underline");
    $('.allgoods').eq(0).css("display","block");
    $('.i-arrtop').eq(0).css("background","url(../images/ico-comm.png) -66px -2px no-repeat");
});
$('.head-fix').mouseleave(function(){
    $('.top-all-goods').eq(0).css("text-decoration","none");
    $('.allgoods').eq(0).css("display","none");
    $('.i-arrtop').eq(0).css("background","url(../images/ico-comm.png) -100px -2px no-repeat");
});
/*定制，产品信息，评价点击事件*/
$('.cus_info a').click(function () {
    $(this).css({'color':'#ec4828','border-bottom':'3px solid #ec4828'}).siblings(this).css({'color':'#3a3f4a','border-bottom':'none'})
});
/*型号点击事件*/
$('.version ul li').click(function () {
    $(this).css('border-color','#ec4828').siblings(this).css('border-color','#c8cac9')
});
/*定制点击事件*/
$('.affirm').eq(0).click(function () {
    $(this).css('background','#ec4828')
    $(this).children('i').css('background','url(../images/ico-ctz.png) -31px -2px no-repeat')
    $('.affirm').eq(1).css('background','#fff')
    $('.affirm').eq(1).children('i').css('background','none')
    $('.choicefz').css('display','block');
    $('.choice_col').css('display','block');
    $('.signer').css('display','block');
    $('.sign').css('display','block')
});
$('.affirm').eq(1).click(function () {
    $(this).css('background','#ec4828')
    $(this).children('i').css('background','url(../images/ico-ctz.png) -31px -2px no-repeat')
    $('.affirm').eq(0).css('background','#fff')
    $('.affirm').eq(0).children('i').css('background','none')
    $('.choicefz').css('display','none');
    $('.choice_col').css('display','none');
    $('.signer').css('display','none');
    $('.sign').css('display','none')
});
/*字号,字体点击事件*/
$('.choicefz ul li').click(function () {
    $(this).css('border-color','#ec4828').siblings(this).css('border-color','#c8cac9')
    if($(this).html() === '小'){
        $('.sign').css('font-size','14px');
    }
    if($(this).html() === '中'){
        $('.sign').css('font-size','16px');
    }
    if($(this).html() === '大'){
        $('.sign').css('font-size','18px');
    }
    if($(this).html() == "微软雅黑"){
        $('.sign').css('font-family','微软雅黑');
    }
    if($(this).html() == "华文楷体"){
        $('.sign').css('font-family',"仿宋");
    }
    if($(this).html() == "华文行楷"){
        $('.sign').css('font-family',"楷体");
    }
    if($(this).html() == "华文中宋"){
        $('.sign').css('font-family',"宋体");
    }
});
/*颜色点击事件*/
$('.choice_col ul li').click(function () {
    $(this).css('border-color','#ec4828').siblings(this).css('border-color','#c8cac9');
    if($(this).children('span:nth-child(2)').html() == '肉色'){
        $('.sign').css('color','#CFA678')
    }
    if($(this).children('span:nth-child(2)').html() == '白色'){
        $('.sign').css('color','#FFF')
    }
    if($(this).children('span:nth-child(2)').html() == '蓝色'){
        $('.sign').css('color','#00F')
    }
    if($(this).children('span:nth-child(2)').html() == '灰色'){
        $('.sign').css('color','#607781')
    }
});

/*个性签名点击事件*/
$('.signer input').keydown(function () {
    if($('.signer input').val().length > 0){
        $('.signer span').css('display','none')
    }
    if($('.signer input').val().length >= 12){
        $('.signer span').css('display','block')
        $('.signer span').html('超过了定制字符的超度')
    }
});
$('.signer input').keyup(function () {
    var val =  $('.signer input').val()
    if($('.signer input').val().length>11){
        $('.signer input').val(val.substring(0,12))
    }
    $('.sign').html($('.signer input').val());
});

/*放大镜事件*/
/*获取span*/
$('.cus_main-phone>div').mouseenter(function () {
    $('.square').show(0);
    $('.phone_big').show(0);
});
$('.cus_main-phone>div').mouseleave(function () {
    $('.square').hide(0);
    $('.phone_big').hide(0);
});
$('.cus_main-phone>div').mousemove(function (e) {
    var x = e.clientX-$(this).offset().left-30;
    var y = e.clientY+$(window).scrollTop()-$(this).offset().top-30;
    if(x <=0){x=0}
        else if(x >=156)
        {
            x=156
        }
    if(y<=0){y=0}
        else if(y>380){
            y=380
    }
    var bigx =-(x*2488/440);
    var bigy =-(y*1223/216);
    $('.square').css({'left':x+'px'});
    $('.square').css({'top':y+'px'});
    $('.phone_big').css('background','url(../images/xiaosi_big.jpg) '+bigx+'px '+bigy+'px no-repeat')
});




