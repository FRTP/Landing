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

function disable_download_button() {
    // document.getElementById('download-button').style.visibility = "hidden";
    document.getElementById('download-button').disabled = true;
}

function start_alg() {
    document.getElementById('download-button').style.visibility = "visible";

    if (random_algorithm_chosen === true) {
        // document.getElementById('download-button').style.visibility = "visible";
        document.getElementById('download-button').disabled = false;
    } else if (clever_algorithm_chosen === true) {
        window.setTimeout(
            function() {
                // document.getElementById('download-button').style.visibility = "visible";
                document.getElementById('download-button').disabled = false;
            },
            5000);
    } else {
        alert("Something went wrong.")
    }

    // document.getElementById('download-button').style.visibility = "visible";
}

var random_algorithm_chosen = true;
var clever_algorithm_chosen = false;

var config1_chosen = true;
var config2_chosen = false;

function choose_config1() {
    disable_download_button();

    config1_chosen = true;
    config2_chosen = false;

    console.log(1);
    document.getElementById('config_1').style.backgroundColor = 'blue';
    document.getElementById('config_2').style.backgroundColor = 'white';
}

function choose_config2() {
    disable_download_button();

    config1_chosen = false;
    config2_chosen = true;

    document.getElementById('config_2').style.backgroundColor = 'blue';
    document.getElementById('config_1').style.backgroundColor = 'white'
}

function choose_random_algorithm() {
    disable_download_button();

    random_algorithm_chosen = true;
    clever_algorithm_chosen = false;

    console.log(1);
    document.getElementById('random_algorithm_id').style.backgroundColor = 'blue';
    document.getElementById('clever_algorithm_id').style.backgroundColor = 'white';
}

function choose_clever_algorithm() {
    disable_download_button();
    
    random_algorithm_chosen = false;
    clever_algorithm_chosen = true;

    document.getElementById('clever_algorithm_id').style.backgroundColor = 'blue';
    document.getElementById('random_algorithm_id').style.backgroundColor = 'white'
}

