$(document).ready(function () {
    var a = window.matchMedia("only screen and (min-width: 768px)");
    $(window).scroll(function () {
        250 < $(this).scrollTop() ? $(".navbar-bottom").addClass("animated fadeInDown navbar-fixed-top") : $(".navbar-bottom").removeClass("animated fadeInDown navbar-fixed-top")
    });
    $(".fa-angle-down").click(function () {
        $(".navbar .fa-angle-up").hide();
        $(".navbar .fa-angle-down").show();
        $(this).hide();
        $(this).next(".fa-angle-up").delay(100).fadeIn()
    });
    $(".fa-angle-up").click(function () {
        $(".dropdown-backdrop").remove();
        $(this).hide();
        $(this).prev(".fa-angle-down").delay(100).fadeIn()
    });
    $("#backtotop").click(function () {
        $("html, body").animate({scrollTop: 0}, 600)
    });
    $(".mdr-home").find(".rcw-layout \x3e .row:nth-child(2)").wrap("\x3cdiv class\x3d'container'\x3e\x3c/div\x3e");
    $(".mdr-breadcrumbs .breadcrumb").clone().insertBefore(".hero-unit.hero-unit-md.hero-page-details \x3e .container \x3e .mdr-content");
    $(".mdr-breadcrumbs .breadcrumb").clone().insertBefore(".hero-prioritas \x3e .container \x3e .mdr-content");
    $(".mdr-breadcrumbs .breadcrumb").clone().insertBefore(".hero-about \x3e .container \x3e .mdr-content");
    $(".mdr-breadcrumbs .breadcrumb").clone().insertBefore(".hero-submenu \x3e .container \x3e img");
    $(".mdr-breadcrumbs .breadcrumb").clone().insertBefore(".hero-unit-top \x3e .container \x3e img");
    $(".nav-lang").css({opacity: 1});
    $(".nav-lang li:nth-child(1) .language-entry-short-text").text("ID");
    $(".img-product.cc").parent("a.box").addClass("wrap-cc");
    $(".wrapper-split-slider #thumbnail-slider").bind("mousewheel", function () {
        return !0
    });
    a.matches && $(window).scroll(function () {
        var b = $("#backtotop");
        200 <
        $(document).scrollTop() ? b.fadeIn() : b.fadeOut()
    });
    $(".parent.has-child #btn-accordion").click(function () {
        $(this).parent().children(".child-pages:first").slideToggle();
        $(this).toggleClass("fa-plus-square");
        $(this).toggleClass("fa-minus-square")
    });
    $(".promotion-slider").owlCarousel({
        margin: 0,
        nav: !0,
        loop: !0,
        dots: !1,
        animateOut: "fadeOut",
        mouseDrag: !1,
        autoplay: !0,
        autoplayTimeout: 5E3,
        autoplayHoverPause: !0,
        thumbs: !0,
        thumbsPrerendered: !0,
        navText: ["\x3ci class\x3d'fa fa-arrow-left' aria-hidden\x3d'true'\x3e\x3c/i\x3e",
            "\x3ci class\x3d'fa fa-arrow-right' aria-hidden\x3d'true'\x3e\x3c/i\x3e"],
        responsive: {0: {items: 1}, 600: {items: 1}, 1E3: {items: 1}}
    });
    $(".new-static-banner").owlCarousel({
        margin: 0,
        nav: !1,
        loop: !0,
        animateOut: "fadeOut",
        mouseDrag: !1,
        autoplay: !0,
        autoplayTimeout: 5E3,
        autoplayHoverPause: !0,
        autoHeight: !0,
        responsive: {0: {items: 1}, 600: {items: 1}, 1E3: {items: 1}}
    });
    $(".individual-slider").owlCarousel({
        margin: 0,
        nav: !1,
        loop: !1,
        animateOut: "fadeOut",
        mouseDrag: !1,
        autoplay: !0,
        responsive: {0: {items: 1}, 600: {items: 1}, 1E3: {items: 1}}
    });
    var d = $("#sync1"), e = $("#sync2");
    d.owlCarousel({
        items: 1,
        slideSpeed: 2E3,
        nav: !0,
        autoplay: !1,
        dots: !1,
        loop: !0,
        responsiveRefreshRate: 200,
        navText: ['\x3csvg width\x3d"100%" height\x3d"100%" viewBox\x3d"0 0 11 20"\x3e\x3cpath style\x3d"fill:none;stroke-width: 1px;stroke: #000;" d\x3d"M9.554,1.001l-8.607,8.607l8.607,8.606"/\x3e\x3c/svg\x3e', '\x3csvg width\x3d"100%" height\x3d"100%" viewBox\x3d"0 0 11 20" version\x3d"1.1"\x3e\x3cpath style\x3d"fill:none;stroke-width: 1px;stroke: #000;" d\x3d"M1.054,18.214l8.606,-8.606l-8.606,-8.607"/\x3e\x3c/svg\x3e']
    }).on("changed.owl.carousel",
        function (b) {
            var c = b.item.count - 1;
            b = Math.round(b.item.index - b.item.count / 2 - 0.5);
            0 > b && (b = c);
            b > c && (b = 0);
            e.find(".owl-item").removeClass("current").eq(b).addClass("current");
            var c = e.find(".owl-item.active").length - 1, f = e.find(".owl-item.active").first().index(),
                g = e.find(".owl-item.active").last().index();
            b > g && e.data("owl.carousel").to(b, 100, !0);
            b < f && e.data("owl.carousel").to(b - c, 100, !0)
        });
    e.on("initialized.owl.carousel", function () {
        e.find(".owl-item").eq(0).addClass("current")
    }).owlCarousel({
        items: 4, dots: !1,
        autoHeight: !0, nav: !1, smartSpeed: 200, slideSpeed: 500, slideBy: 4, responsiveRefreshRate: 100
    }).on("changed.owl.carousel", function (b) {
        b = b.item.index;
        d.data("owl.carousel").to(b, 100, !0)
    });
    e.on("click", ".owl-item", function (b) {
        b.preventDefault();
        b = $(this).index();
        d.data("owl.carousel").to(b, 300, !0)
    });
    $(".wrapperPromotion #sync1 .owl-item .item, .wrapperPromotion #sync2 .owl-item .item").find("img").each(function (b, c) {
        c = $(c);
        var f = $(this).attr("src");
        c.parent(".wrapperPromotion #sync1 .item \x3e a, .wrapperPromotion #sync2 .item \x3e a").css("background-image",
            "url(" + f + ")")
    });
    (document.documentMode || /Edge/.test(navigator.userAgent)) && $("html").addClass("edge");
    $(".section-org-profile").parents("body").addClass("wrap-komDir");
    $(".org-profile-item").on("click", function () {
        var b = $(this).find("img.org-profile-details-img").attr("src"),
            c = $(this).find("img.org-profile-details-img").attr("alt"),
            f = $(this).find(".org-profile-desc \x3e h4").text(), g = $(this).find(".org-profile-desc \x3e p").text(),
            h = $(this).find(".detailProfile \x3e p");
        $(this).parents(".wrap-komDir").find(".modal-content .close").click(function () {
            $(".modal-body .org-profile-details-desc").text("")
        });
        $(this).parents(".wrap-komDir").find(".modal-profile-sample .modal-body img").attr("src", b).attr("alt", c);
        $(this).parents(".wrap-komDir").find(".modal-profile-sample .org-profile-details .org-profile-details-name").text(f);
        $(this).parents(".wrap-komDir").find(".modal-profile-sample .org-profile-details .org-profile-details-title").text(g);
        $(this).parents(".wrap-komDir").find(h).clone().appendTo(".org-profile-details-desc")
    });
    $(".close-modal-boots").click(function () {
        $(".modal-body .org-profile-details-desc").text("");
        $(".modal-body .org-profile-details .org-profile-details-name").text("");
        $(".modal-body .org-profile-details .org-profile-details-title").text("");
        $("#myModal").modal("hide")
    });
    $(".lexicon-icon-plus").parent().parent(".icon-monospaced").css("pointer-events", "none");
    $(".fee-scrollDown\x3eli\x3ea").on("click", function (b) {
        if ("" !== this.hash) {
            b.preventDefault();
            var c = this.hash;
            $("html, body").animate({scrollTop: $(c).offset().top}, 800, function () {
                window.location.hash = c
            })
        }
    });
    $(".nav-scrollDown").on("click",
        function (b) {
            if ("" !== this.hash) {
                b.preventDefault();
                var c = this.hash;
                $("html, body").animate({scrollTop: $(c).offset().top}, 800, function () {
                    window.location.hash = c
                })
            }
        })
});
