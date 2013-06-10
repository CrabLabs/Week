(function ($) {
	"use strict"; 

	$.fn.makeActive = function () {
		var title = $(this).children("a").attr("title"),
			id = $(this).children("a").attr("href").substr(1);

		$("nav ul li.active").removeClass("active");

		if (id === "") {
			id 	= "home";
		}

		History.pushState({fromScroll: true}, "Week - " + title, id);

		return this.addClass("active");
	};

	$(document).on("ready", function () {

		$(document).scrollTop(1).scrollTop(0);

		$(".stagedLink").on("click", function (event) {

			var offset, id, link = $(this).attr("href");

			event.preventDefault();

			id 		= "#" + link.substr(1);

			if (id === "#") {
				id 	= "#home";
			}

			offset 	= $(id).offset();

			$("html, body").animate({
				"scrollTop": (offset.top - 40)
			}, 200);

		});

	});

	$(document).on("scroll", function (event) {
		var scrollTop = $(document).scrollTop();

		if (scrollTop < $("#menu").offset().top - 41) {
			$("nav ul li").eq(0).makeActive();
		} else if (scrollTop <= $("#sobre-week").offset().top - 40) {
			$("nav ul li").eq(1).makeActive();
		} else if (scrollTop <= $("#contacto").offset().top - 40) {
			$("nav ul li").eq(2).makeActive();
		} else {
			$("nav ul li").eq(3).makeActive();
		}

	});

}(jQuery));