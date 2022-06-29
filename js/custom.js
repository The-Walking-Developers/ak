
$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
});	

$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
});	

$('#slider').owlCarousel({
    loop:true,
	margin:0,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
	lazyLoad: true,
	animate: 'fadeInLeft',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$("#testimonial-slider").owlCarousel({
		loop: true,
		margin:20,
		autoWidth:false,
		center: true,
		autoplay: true,
		lazyLoad: true,
		autoplayTimeout: 3500,
		responsive: {
		    0: { items: 1 },
		    768: { items: 1 },
		     1170: { items: 3 }
		}
});


$(function(){
	$(".typed").typed({
		strings: ["Grocery.", "Fresh Fruits.", "Pooja Needs.","Fresh Vegetables.","Breads n Eggs."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 20,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});


