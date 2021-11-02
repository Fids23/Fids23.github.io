"use strict"

//Анимация scrooll для nav
$('a[href^="#"]').click(function () {
	let valHref = $(this).attr("href");
	$('html,body').animate({ scrollTop: $(valHref).offset().top + "px" })
})


//scrooll active
$(window).scroll(() => {
	let scrollDistance = $(window).scrollTop();

	$(".section").each((i, el) => {

		if ($(el).offset().top - $("nav").outHeight() <= scrollDistance) {
			$("nav a").each((i, el) => {
				if ($(el).hasClass("active")) {
					$(el).removeClass("active");
				}
			});
			$('nav li:eq(' + i + ')').find('a').addClass('active');
		}
	});
});



