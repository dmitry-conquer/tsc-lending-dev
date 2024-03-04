import Swiper, { Pagination } from "swiper";

const slider = document.querySelector(".slider");
if (slider) {
  new Swiper(".slider", {
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
