$(function (){
    $('.rate__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerPadding:"30px",
        centerMode: true,
    });


    $(window).on('resize', function (){
        if($(window).with()<991){
            $('.features__slider').slick('unslick');
            $('.afisha__list').slick('unslick');
            $('.subject__list').slick('unslick');

        } else{
            $('.features__slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            });
            $('.afisha__list').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true,
            });
            $('.subject__list').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true,
            });

        }
    })
})
