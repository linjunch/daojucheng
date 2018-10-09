
/*窗口滚动监听事件-导航栏下拉固定*/
$(window).scroll(function () {
    if($(window).scrollTop() >= $(window).height()){
        if($('.hold-position').css('position') == 'relative') {
            $('.hold-position').css({'position': 'fixed', 'z-index': '999', 'display': 'none'});
            /*修改导航条高度*/
            $('.hold-position').css('height','112px');
            $('.info-fix').css('height','64px');
            $('.i-jcp').css({'height':'52px','width':'98px','margin-top':'7px','background-position':'-6px -150px'});
            $('.i-solgan').css('margin-top','18px');
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
        $('.i-jcp').css({'height':'79px','width':'148px','margin-top':'','background-position':'-186px 8px'});
        $('.i-solgan').css('margin-top','38px');
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
/*筛选点击切换背景事件*/
$('.sort-fr dd').click(function () {
    if($(this).children('i').hasClass('i-checked') ==1 ){
        $(this).children('i').removeClass("i-checked");
        console.log(1);
    }
    else{
        $(this).children('i').addClass('i-checked');
        $(this).children('span').css({'font-weight':'bold','color':'#333'});
        $(this).siblings('dd').children('i').removeClass('i-checked');
        $(this).siblings('dd').children('span').css({'font-weight':'normal','color':'#a6a6a6'});
    }
})
