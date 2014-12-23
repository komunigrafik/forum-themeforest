
$(window).scroll(function() {
    if ($(".nav-top").offset().top > 50) {
        $(".nav-top").addClass("fixed-top");
		$(".nav-top").addClass("fadeInUp");
		$(".nav-top").addClass("animated");
    } else {
        $(".nav-top").removeClass("fixed-top");
		$(".nav-top").removeClass("fadeInUp");
		$(".nav-top").removeClass("animated");
    }
});
