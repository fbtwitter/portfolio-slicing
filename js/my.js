$(document).ready(function () {
    var a = window.matchMedia("only screen and (min-width: 768px)");
    $(window).scroll(function () {
        200 < $(this).scrollTop() ? $(".navbar-bottom").addClass("animated fadeInDown fixed-top") : $(".navbar-bottom").removeClass("animated fadeInDown fixed-top")
    });
});
