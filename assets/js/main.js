$(document).ready(function() {
	// Material
	$.material.init();

	// Preloader
	$(window).load(function() {
	  "use strict";
	  $('#loader').fadeOut();
	});
	/*----------------------------------------------------*/
	/*	Slick Nav 
	/*----------------------------------------------------*/
	$('.wpb-mobile-menu').slicknav({
	  prependTo: '.okayNav',	
	  parentTag: 'liner',
	  allowParentLinks: true,
	  duplicate: true,
	  label: '',
	  closedSymbol: '<i class="fa fa-angle-right"></i>',
	  openedSymbol: '<i class="fa fa-angle-down"></i>',
	});

	//WOW Scroll Spy
	var wow = new WOW({
	    //disabled for mobile
	    mobile: false
	});
	wow.init();
	
	// MixitUp Init
	$('#vora-portfolio').mixItUp(); 
	

 	// Bootstrap Carousel
	$('#main-slide').carousel({
		interval: 5000,
	});

	// Testimonial Carousel
	  $("#testimonial-carousel").owlCarousel({
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem: true,
	      autoPlay: 3000,
	      stopOnHover : true,
	 
	  });

	  // Flickr Carousel
	  $("#flickr-carousel").owlCarousel({
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      items : 1,
	      autoPlay: 3000,
	      stopOnHover : true,
	 
	  });

	  // Image Carousel
	  $("#vora-image-carousel").owlCarousel({
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      items : 4,
	      autoPlay: 3000,
	      stopOnHover : true,
	  });

	  // Image Carousel
	  $("#team-carousel").owlCarousel({
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      items : 4,
	      autoPlay: 3000,
	      stopOnHover : true,
	  });

	  

	  // Back Top Link
	  var offset = 200;
	  var duration = 500;
	  $(window).scroll(function() {
	    if ($(this).scrollTop() > offset) {
	      $('.back-to-top').fadeIn(400);
	    } else {
	      $('.back-to-top').fadeOut(400);
	    }
	  });
	  $('.back-to-top').click(function(event) {
	    event.preventDefault();
	    $('html, body').animate({
	      scrollTop: 0
	    }, 600);
	    return false;
	  });
	  
 
});


//   modal
$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').focus()
})

// // BS lightbox gallery
// $(document).on('click', '[data-toggle="lightbox"]', function(event) {
// 	event.preventDefault();
// 	$(this).ekkoLightbox();
// });


// Smooth scroll snippet
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
	// On-page links
	if (
	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	&& 
	location.hostname == this.hostname
	) {
	// Figure out element to scroll to
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	// Does a scroll target exist?
	if (target.length) {
		// Only prevent default if animation is actually gonna happen
		event.preventDefault();
		$('html, body').animate({
		scrollTop: target.offset().top
		}, 1000, function() {
		// Callback after animation
		// Must change focus!
		var $target = $(target);
		$target.focus();
		if ($target.is(":focus")) { // Checking if the target was focused
			return false;
		} else {
			$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			$target.focus(); // Set focus again
		};
		});
	}
	}
});

// to collapse menu bar after hyperlink is clicked
// $(document).ready(function () {
//     $(".navbar-nav li a").click(function(event) {
//       $(".navbar-collapse").collapse('hide');
//     });
//   });

$('nav ul.wpb-mobile-menu li a').click(function (e) {
	$('nav ul.wpb-mobile-menu').collapse('toggle');
  });



// // Mobile Navigation
// if( $('#nav-menu-container').length ) {
// var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
// $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
// $('body').append( $mobile_nav );
// $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
// $('body').append( '<div id="mobile-body-overly"></div>' );
// $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

// $(document).on('click', '.menu-has-children i', function(e){
//   $(this).next().toggleClass('menu-item-active');
//   $(this).nextAll('ul').eq(0).slideToggle();
//   $(this).toggleClass("fa-chevron-up fa-chevron-down");
// });

// $(document).on('click', '#mobile-nav-toggle', function(e){
//   $('body').toggleClass('mobile-nav-active');
//   $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
//   $('#mobile-body-overly').toggle();
// });

// $(document).click(function (e) {
//   var container = $("#mobile-nav, #mobile-nav-toggle");
//   if (!container.is(e.target) && container.has(e.target).length === 0) {
// 	 if ( $('body').hasClass('mobile-nav-active') ) {
// 		  $('body').removeClass('mobile-nav-active');
// 		  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
// 		  $('#mobile-body-overly').fadeOut();
// 	  }
//   }
// });
// } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
// $("#mobile-nav, #mobile-nav-toggle").hide();
// }

