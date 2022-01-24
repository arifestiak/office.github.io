$(document).ready(function(){
	
	$('.nav-bars').click(function(){
		$('.click-function').slideToggle(1000);
	});
	

		
	// Banner - Carousel
	$('.banners').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true
	});

$('.works-items').owlCarousel({
		items:3,
		loop:true,
		nav:true,
		dots:false,
	});
	
	$('.work-place').magnificPopup({
		  type: 'image',
		  gallery:{
			enabled:true
		  }
	});
	

});
.header-area{
background:url('../images/3.png') no-repeat scroll 0 0 / 100% 100%;
padding-top:30px;}