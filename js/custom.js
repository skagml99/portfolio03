$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    const mcs = new Swiper('.main_banner_slide', {
        // loop: true,

        pagination: {
            clickable: true,
            el: '.main_banner .inner .right .page',
        },
    })

})

$(function () {
    const MMS = new Swiper('.main_content_slide', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints: {
            769: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    })
});



// 서브페이지
$(function () {
    $('.subpage .sub_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.subpage .sub_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.sub_tab_content .tab_content').removeClass('on');
        $('.sub_tab_content .tab_content').eq(idx).addClass('on');
    })
})