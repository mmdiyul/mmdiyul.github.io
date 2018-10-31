// Navbar scroll
$(document).ready(function() {
	$(window).scroll(function() {
        if($(document).scrollTop() > 500) {
            $('#navbar').addClass('scroll');
            $('#navbar').addClass('navbar-light');
            $('#navbar').addClass('bg-white');
            $('#navbar').addClass('shadow');
            $('#navbar').removeClass('navbar-dark');
        }
        else {
            $('#navbar').removeClass('scroll');
            $('#navbar').removeClass('navbar-light');
            $('#navbar').removeClass('bg-white');
            $('#navbar').removeClass('shadow');
            $('#navbar').addClass('navbar-dark');
        }
    });
    
    // active class
    $(window).scroll(function () {
        var currentScrollPos = $(document).scrollTop();

        $('.navbar-nav > .nav-item > a').each(function () {
            var curLink = $(this);
            var refElem = $(curLink.attr('href'));
            if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
                $('.navbar-nav > .nav-item > a').removeClass("active");
                curLink.parent().addClass("active");
            }
            else {
                curLink.parent().removeClass("active");
            }
        });
    });
});
