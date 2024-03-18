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


// JavaScript for showing dropdown menus on hover
// JavaScript for showing dropdown menus on hover
document.querySelectorAll('.dropdown').forEach(function(drop) {
  let timeout;
  drop.addEventListener('mouseenter', function() {
    clearTimeout(timeout); // Clear any previous timeout
    // Hide all other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
      menu.classList.add('hidden');
    });
    // Show current dropdown
    this.querySelector('.dropdown-menu').classList.remove('hidden');
  });

  drop.addEventListener('mouseleave', function() {
    // Hide dropdown after a short delay
    timeout = setTimeout(() => {
      this.querySelector('.dropdown-menu').classList.add('hidden');
    }, 200); // Adjust the delay as needed
  });

  // Keep the dropdown visible when the mouse is over it
  drop.querySelector('.dropdown-menu').addEventListener('mouseenter', function() {
    clearTimeout(timeout); // Clear the timeout to prevent hiding
  });

  drop.querySelector('.dropdown-menu').addEventListener('mouseleave', function() {
    // Hide dropdown after a short delay when the mouse leaves the dropdown content
    timeout = setTimeout(() => {
      this.classList.add('hidden');
    }, 200); // Adjust the delay as needed
  });
});

AOS.init({
  duration: 1200,
});





