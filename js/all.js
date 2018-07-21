$(document).ready(function () {
    $(".aboutus1").click(function (e) { 
        e.preventDefault();
        $(".aboutus1").toggleClass("active");
        $(".scroll1").slideToggle(500);
    });
    $(".aboutus2").click(function (e) { 
        e.preventDefault();
        $(".aboutus2").toggleClass("active");
        $(".scroll2").slideToggle(500);
    });
    $(".aboutus3").click(function (e) { 
        e.preventDefault();
        $(".aboutus3").toggleClass("active");
        $(".scroll3").slideToggle(500);
    });
});