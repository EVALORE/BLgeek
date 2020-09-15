var mySwiper = new Swiper('.swiper-container', {

    // If we need pagination
    pagination: {
        el: ".slider-pagination",
        bulletClass: 'slider-bullet',
        bulletActiveClass: 'slider-bullet-active',
        clickable: true
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
    loop: true,
    speed: 1500,
})