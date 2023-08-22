$(document).ready(function(){
    $("#arrow").click(function(){
   
                $('html, body').animate({
                    scrollTop: $("#workSection").offset().top
                }, 1000);
       
})});

$(document).ready(function(){
   
    $(".caseStudyContainer").hover(
        function(){
       $(this).find(".circlePhotoFrame").css("transform","scale(1.25)");
       $(this).find(".orangeLine").css("border-top","1px solid #FFCA5F").css("border-bottom","1px solid #FFCA5F"); 
       $(this).css("border","2px solid #FFCA5F"); 
    },
    function(){
        $(this).find(".circlePhotoFrame").css("transform","scale(1)");
        $(this).find(".orangeLine").css("border-top","1px solid #E79C48").css("border-bottom","1px solid #E79C48"); 
        $(this).css("border","none"); 
    }
    );
});
