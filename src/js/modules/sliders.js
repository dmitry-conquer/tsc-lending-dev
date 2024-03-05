import Swiper, { Pagination, Navigation } from "swiper";

const slider = document.querySelector(".slider");
if (slider) {
  new Swiper(slider, {
    modules: [Pagination],
    wrapperClass: "slider-wrapper",
    slideClass: "slider-slide",
    slidesPerView: 4,
    spaceBetween: 11,
    speed: 1200,

    pagination: {
       el: '.pagination',
       clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.02,
      },
      460: {
         slidesPerView: 1.3,
      },
      640: {
         slidesPerView: 2.1,
      },
      1024: {
         slidesPerView: 4,
      },
    },
  });
}


const commentsSlider = document.querySelector(".comments-slider");
if (commentsSlider) {
  new Swiper(commentsSlider, {
    modules: [Pagination, Navigation],
    wrapperClass: "comments-slider-wrapper",
    slideClass: "comments-slider-slide",
    slidesPerView: 4,
    spaceBetween: 11,
    speed: 1200,

    pagination: {
       el: '.pagination-comments',
       clickable: true,
    },
    navigation: {
      prevEl: '.comments-prev',
      nextEl: '.comments-next',
    },

    breakpoints: {
      320: {
        slidesPerView: 1.02,
      },
      460: {
         slidesPerView: 1.3,
      },
      640: {
         slidesPerView: 2.1,
      },
      1024: {
         slidesPerView: 4,
      },
    },
  });
}
