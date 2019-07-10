$(document).ready(function(){

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["I'm a Badass Lawyer", "Immigration Master", "Overall Cool Guy"],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });


    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        const body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }else{
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }


});