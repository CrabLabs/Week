(function ($) {
	"use strict"; 

	$(document).on("ready", function () {

		$(".stagedLink").on("click", function (event) {

			var offset, id, link = $(this).attr("href");

			event.preventDefault();

			id 		= "#" + link.substr(1);

			if (id === "#") {
				id 	= "#home";
			}

			// document.location.hash = id;

			offset 	= $(id).offset();

			$("html, body").animate({
				"scrollTop": (offset.top - 40)
			}, 200);

		});

	});

}(jQuery));