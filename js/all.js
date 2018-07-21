$(document).ready(function () {
    $(".aboutus1").click(function (e) { 
        e.preventDefault();
        $(".home1").toggleClass("active");
        $(".home2,.home3").removeClass('active');
        $(".scroll1").slideToggle(500);
        $(".scroll2,.scroll3").slideUp(500);
    });
    $(".aboutus2").click(function (e) { 
        e.preventDefault();
        $(".home2").toggleClass("active");
        $(".home1,.home3").removeClass('active');
        $(".scroll2").slideToggle(500);
        $(".scroll1,.scroll3").slideUp(500);
    });
    $(".aboutus3").click(function (e) { 
        e.preventDefault();
        $(".home3").toggleClass("active");
        $(".home1,.home2").removeClass('active');
        $(".scroll3").slideToggle(500);
        $(".scroll1,.scroll2").slideUp(500);
        
    });
});
