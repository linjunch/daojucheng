
$(window).scroll(function () {
    if($(window).scrollTop() > 100){
        $('.toTop').css('display','block');
    }
    else{
        $('.toTop').css('display','none')
    }
});
$('.qui_nav').hover(function () {
    $('.nav_box').css({'display':'block','border-top':'none'});
    $('.qui_nav').css('background',  'url(../images/qmenu.png) 0 -30px no-repeat')

},function () {
    $('.nav_box').css('display','none');
    $('.qui_nav').css('background',  'url(../images/qmenu.png) 0 0px no-repeat')
});
/*获取当前时间*/
setInterval(function () {
    var date=new Date;
    console.log(date);
},60000);
