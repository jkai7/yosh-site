$(window).on("load", function() {
    $(".loader .inner").fadeOut(300, function() {
        $(".loader").fadeOut(550);
    });
});

$(document).ready(function(){

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Immigration Law", "Sports Law", "International Arbitration", "Media and Entertainment Law", "Intellectual Property", "Corporate and Commercial"],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();
        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50}, 1300);
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