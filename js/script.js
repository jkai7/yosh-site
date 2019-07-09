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




});