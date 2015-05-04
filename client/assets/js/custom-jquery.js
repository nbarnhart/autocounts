$(document).ready(function() {

    $('ul li:first-child').addClass('first');
    $('ul li:last-child').addClass('last');

    $(".card").flip({
        trigger: "hover",
        speed: 1000
      });

});

