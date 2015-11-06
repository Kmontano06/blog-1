$('#menu').click(function(){
	$('.container-nav').toggle();
	console.log('blah');
});
$(window).scroll(function() {
	//condition for scroll position
  if ($(this).scrollTop() > 87){  
    //make CSS changes here
    $('.container-nav').addClass("sticky");
  }else{
    //back to default styles
    $('.container-nav').removeClass("sticky");
  }
});