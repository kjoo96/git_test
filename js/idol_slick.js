
$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 700,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});


$('.slider-nav')
    .on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        focusOnSelect: false,
        infinite: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
    
        }]
    });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});



wow = new WOW({
    boxClass: 'wow',      //  스크롤 이벤트를 등록할 클래스 
    animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
    offset: 0,          // data-wow-offset 의 기본값 0 
    mobile: true,       // 모바일에서 동작할 것인지 
    live: true        // 새로추가되는 요소 확인하여 동작 
})
wow.init();
