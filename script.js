let downloadBtn = document.getElementById("downloadButton");
downloadBtn.addEventListener("click", () => {
  console.log("button Clicked");
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

AOS.init({
  duration: 1200,
});

