
console.clear();

// animation on scroll
AOS.init({
    //once:true,
    duration: 800,
    easing: 'ease',
});


// 3차 visual stroy slick 적용
$('.v-story-slider').slick({
    dots: false,
    draggable: true,
    arrows: false,
    adaptiveHeight: false,
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                centerPadding: '100px',
                draggable: true,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                centerPadding: '0',
                arrows: false,
                draggable: true,
                slidesToShow: 1,

            }
        },
    ],
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 
    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function (index, node) {
            var $node = $(node);

            setTimeout(function () {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }
}); // 이 코드는 slick infinite 가 맨끝에서 다시 처음으로 돌아가거나 할때도 트랜지션이 적용되기 위한 코드입니다. (centerMode 에서)
