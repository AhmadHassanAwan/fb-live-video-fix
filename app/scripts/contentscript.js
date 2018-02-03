$(document).ready(function(){
    $("body").on("mouseenter", "._53j5:not(.done)", function(){
        if ($(this).find("._2wrk").length){
            $(this).addClass("done");
            $(this).find("video").attr("controls", true).siblings().remove();
        }
    });
})