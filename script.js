var mySwiper1 = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 120,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 3
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })


