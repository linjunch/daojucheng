/*顶部notice轮播*/
var timer1;
var number=0;
var wid = $('ol li img').width();
function notigo() {
    timer1=setInterval(function () {
        number++;
        if(number>3){
            number=0;
            $('.notice-txt').css('top','0px')
            number=1;
        }
        $('.notice-txt').animate({'top':-number*30+'px'},1000);
    },2000)
}
notigo();
/*窗口滚动监听事件-导航栏下拉固定*/
$(window).scroll(function () {
    if($(window).scrollTop() >= $(window).height()){
        if($('.hold-position').css('position') == 'relative') {
            $('.hold-position').css({'position': 'fixed', 'left':'0','top':'0','z-index': '999', 'display': 'none'});
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
/*广告轮播图区域*/
var num=0;
var timer;
function gogo(){
    timer=setInterval(function () {
        num++;
        if(num>4){num=0}
        transform();
    },2000);
}
gogo();

$('ol li').hover(function () {
    clearInterval(timer);
    $(this).css('background','yellow');
    $(this).siblings('li').css('background','rgba(123,123,123,0.3)');
    $('.ban_list').css('left', -$(this).index()*1920+'px');
    num = $(this).index();
},function () {
    gogo();
});
/*广告内部横线*/
function transform(){
    for(var j=0;j<$('ol').children('li').length;j++){
        $('ol').children('li').eq(j).css('background','rgba(123,123,123,0.3)');
    }
    $('ol').children('li').eq(num).css('background','yellow');
    $('.ban_list').css('left',-num*1920+'px');
}




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