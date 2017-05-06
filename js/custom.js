var a = $(".navbar-fixed-top");
var b = $(".jumbotron").offset().top;
$(document).scroll(function(){
    if($(this).scrollTop() > b)
    {
       a.css({"background":"#052354", "border-color": "#e7e7e7"});
       //"background":"#ebfbfb"
      //  $("a[id='tag']").css({"color":"#2b2b2b"});
    } else {
       a.css({"background":"transparent", "border": "none"});
      //  $("a[id='tag']").css({"color":"#dbddde"});
    }
});
