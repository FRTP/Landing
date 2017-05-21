(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
		progress(50, $('#train-progress'));
        progress(50, $('#test-progress'));
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);

$(document).ready(function () {
    var carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 5,
        movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
        },
        movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
            $('#name').html($item.attr('name'));
			$('#role').html($item.attr('role'));
        },
        movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        },
        movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        }
    });
})(jQuery);

function start_alg() {
    window.setTimeout(function() {
		document.getElementById('download-button').style.visibility = "visible";
    }, 5000);
}

function choose_config1() {
    console.log(1);
    document.getElementById('config_1').style.backgroundColor = 'blue';
    document.getElementById('config_2').style.backgroundColor = 'white';
}

function choose_config2() {
    document.getElementById('config_2').style.backgroundColor = 'blue';
    document.getElementById('config_1').style.backgroundColor = 'white'
}

function choose_algo1() {
    console.log(1);
    document.getElementById('algo_1').style.backgroundColor = 'blue';
    document.getElementById('algo_2').style.backgroundColor = 'white';
}

function choose_algo2() {
    document.getElementById('algo_2').style.backgroundColor = 'blue';
    document.getElementById('algo_1').style.backgroundColor = 'white'
}

