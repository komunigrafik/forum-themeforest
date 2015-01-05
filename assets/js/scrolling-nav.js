
$(window).scroll(function() {
    if ($(".nav-top").offset().top > 50) {
        $(".nav-top").addClass("fixed-top");
		$(".nav-top").addClass("fadeInDown");
		$(".nav-top").addClass("animated");
    } else {
        $(".nav-top").removeClass("fixed-top");
		$(".nav-top").removeClass("fadeInDown");
		$(".nav-top").removeClass("animated");
    }
});
