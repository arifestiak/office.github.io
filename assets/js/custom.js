jQuery(document).ready(function(){

	 // Slider
	$('.slider-wrapper').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>',
            '<i class="fas fa-long-arrow-alt-right"></i>'],
        dots: true,
        loop: true,
        margin: 0,
        autoplay: false,
    });

    // Slider 2
	$('.carousel-wrapper-2').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        margin: 0,
        autoplay: false,
    });
  
  $('.experince-slide').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
        margin: 0,
        autoplay: false,
    });
     $('.single-experince').owlCarousel({
        items: 6,
        center: true,
        nav: false,
        dots: true,
        loop: true,
        margin: 0,
        autoplay: false,

    });
     $('.navigation-img-wrapper').owlCarousel({
        items: 6,
       
 center: true,
        nav: false,
        dots: true,
        loop: true,
        margin: 0,
        autoplay: false,

    });
	$('.navigator').on('click', function() {
var item_no = $(this).data('item'); 
$('#my-carousel').trigger('to.owl.carousel', [item_no, 1000, true]);
});

});