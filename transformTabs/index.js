$(document).ready(function () {
    $(".tab-body").hide();
    $(".tab-body:first").show();
})


$("ul").on('click', function (event) {
    $(".tab-body").hide();
    $('#' + event.target.getAttribute('rel')).fadeIn();
    $("ul.tabs li").removeClass("active");
    $(event.target).addClass('active')
    $(".tab-heading").removeClass("tab-active");
    $(".tab-heading[rel^='" + event.target + "']").addClass("tab-active");
});


$(".tab-heading").on('click', function () {
    $(".tab-body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $(".tab-heading").removeClass("tab-active");
    $(this).addClass("tab-active");
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + activeTab + "']").addClass("active");
});
