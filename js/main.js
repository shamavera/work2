
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            992:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })
});
$(document).ready(function()
    {
        $('textarea').autoResize();
    });


$(document).ready(function(){
   $('#contact-name, label[for="contact-name"]').focus(function(){
    $(this).addClass('focus');
},
 function(){
    $(this).removeClass('focus');
});

});

$(function(){
   $('#contact-email, label[for="contact-email"]').focus(function(){
    $(this).addClass('focus');},
    function(){
        $(this).removeClass('focus');
    });

});


    $(document).ready(function(){
             $('#scroller').hide();  
            //fade in/out based on scrollTop value
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('#scroller').fadeIn();
                } else  {
                    $('#scroller').fadeOut();
                }
            });
         
            // scroll body to 0px on click
            $('#scroller').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        });
    $(document).ready(function(){
        $("#exampleInputEmail2").focusin(function(){
            $("#contact-email").css({"transform":"translateY(-20px)"}).fadeOut(1000);
        });
    })








