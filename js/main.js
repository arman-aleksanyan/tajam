const text = 'Hello ES6';
console.log(text);
$(document).ready(function () {
    // Animate on page change
    $('body').addClass('animated');

//Nav click slick smooth scroll custom
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 59
                }, 600, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                });
            }
        }
    });

// Hamburger Click
    $('.navbar-toggler').on("click", function () {
        $('.toggle').toggleClass('clicked');
        $('body').toggleClass('nav-show');
    });

// Close nav on link click
    $('.navbar-nav>li>a').on('click', function () {
        // $('li').removeClass();
        // $(this).parent().addClass('active');
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
    $('.navbar-brand').on('click', function () {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide');
            $("html, body").animate({scrollTop: 0}, 600);
        }
        $(location).attr('href', '/');
        $("html, body").animate({scrollTop: 0}, 600);
    });

// Sticky nav
    var stickyNavTop = $('.navbar').offset().top;
    var stickyNav = function stickyNav() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.navbar').addClass('sticky');
            $('body').addClass('nav-fixed');
        } else {
            $('.navbar').removeClass('sticky');
            $('body').removeClass('nav-fixed');
        }
    };
    stickyNav();
    $(window).scroll(function () {
        stickyNav();
    });
});
