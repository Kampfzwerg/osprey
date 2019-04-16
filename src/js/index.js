$(document).ready(function() {

    // Nav starts at bottom then is fixed to top
    // Logo and hamburger menus fade in and out
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        if( scrollPosition > $(this).height() - $("nav").height() ) {
            $("nav").addClass("nav-fixed");
        } else {
            $("nav").removeClass("nav-fixed");
        }
    });

    // Full screen nav open on click
    $(".nav-icon").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(this).find("img").toggle();
        $("nav").toggleClass("nav-full-active");
    });

    // Full screen nav close on click
    $(".nav-full").find("a").click(function(){
        $(".nav-full").toggleClass("active");
        $("main").toggleClass("active");
        $(".nav-icon").find("img").toggle();
    });

    // Highlight.js initialization
    $("pre code").each(function(i, block) {
        hljs.highlightBlock(block);
    });

});

// Mobile browsers viewport height bug fix
function fullMobileViewport() {
    var HEIGHT_CHANGE_TOLERANCE = 100; // Approximately URL bar height in Chrome
    var element = $(this);
    var viewportHeight = $(window).height();

    $(window).resize(function () {
        if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = $(window).height();
            update();
        }
    });

    function update() {
        element.css("height", viewportHeight + "px");
    }

    update();
}
$("header").each(fullMobileViewport);
