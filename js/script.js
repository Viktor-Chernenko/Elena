	$(function () {
		$('.scroll-top').click(function () {
			$('html, body').animate({
				scrollTop: 0.2
			}, 600);
			return false;
		});
	});

	$(document).ready(function () {
		var hamburger = $('.header-nav-mobile');
		hamburger.click(function () {
			hamburger.toggleClass('active');
			$(".header-nav").toggleClass("active");
			return false;
		});
	});

	