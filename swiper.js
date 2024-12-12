var homeswiper = new Swiper(".myHomeSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
      autoplayDisableOnInteraction: true,
      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  
    on: {
      autoplayTimeLeft(s, time, progress) {
      }
    }
  
  });

  
  
const observer = new IntersectionObserver(entries => {
  const firstEntry = entries[0];
  if (firstEntry.isIntersecting) {
    homeswiper.autoplay.start();
  } 
  else {
    homeswiper.autoplay.stop();
  }
});

const swiperContainer = document.querySelector(".myHomeSwiper");
observer.observe(swiperContainer);
  



