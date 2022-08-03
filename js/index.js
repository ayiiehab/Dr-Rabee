
let scrollTop = $('#about').offset().top;
$(window).scroll(function () {
  let scrolWindow = $(window).scrollTop();

  if (scrolWindow > scrollTop - 50) {

    $('#main-nav').css('backgroundColor', 'rgba(0,0,0,0.8)');
    $('#main-nav ul li a').css('color', 'rgb(40, 92, 233)');



  }
  else {

    $('#main-nav').css('backgroundColor', 'white');
    $('#main-nav ul li a').css('color', 'rgb(79, 100, 160)');



  }
});


$('#main-nav a').click(function (e) {

  let hrefA = $(e.target).attr('href');

  let TopA = $(hrefA).offset().top;

  $('html,body').animate({ scrollTop: TopA }, 1000);


});



$("#btn1").click(function(){
  $(".fadeitem1").fadeToggle(1000);
 
});
$("#btn2").click(function(){
  $(".fadeitem2").fadeToggle(1000);
 
});
$("#btn3").click(function(){
  $(".fadeitem3").fadeToggle(1000);

});
$("#btn4").click(function(){
  $(".fadeitem4").fadeToggle(1000);
 
});
$("#btn5").click(function(){
  $(".fadeitem5").fadeToggle(1000);
 
});
$("#btn6").click(function(){
  $(".fadeitem6").fadeToggle(1000);
 
});










