	$(function() {
			$('.scroll-top').click(function() {
				$('html, body').animate({
					scrollTop: 0.2
				}, 600);
				return false;
			});
		});

		$(".menu-mobile").click(function() {
			$(".header-nav__list").toggleClass("header-nav__open_menu");
			$(".menu-mobile").hide();
		});

		$(document).mouseup(function(e) {
			var $target = $(e.target);
			if ($target.closest(".header-nav__list").length == 0 && $target.closest(".menu-mobile").length == 0) {
				$(".header-nav__list").removeClass("header-nav__open_menu");
				$(".menu-mobile").fadeIn();
			}
		});