const swiper9 = new Swiper(".mySwiper", {
  freeMode: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.3,
      spaceBetween: 11,
    },

    500: {
      slidesPerView: 1.55,
      spaceBetween: 11,
    },

    550: {
      slidesPerView: 1.8,
      spaceBetween: 5,
    },

    650: {
      slidesPerView: 1.8,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 8,
    },

    1250: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const swiper21 = new Swiper(".examples-swiper", {
  loop: false,
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 130,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper3 = new Swiper(".stockSwiper", {
  freeMode: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    450: {
      slidesPerView: 1.1,
      spaceBetween: 5,
    },

    500: {
      slidesPerView: 1.2,
      spaceBetween: 5,
    },

    530: {
      slidesPerView: 1.3,
      spaceBetween: 5,
    },

    641: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const swiper4 = new Swiper(".reviewsSwiper", {
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 0,
    },
  },
});

const swiper5 = new Swiper(".team-swiper", {
  loop: false,
  direction: "horizontal",
  // slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-one",
    prevEl: ".swiper-button-prev-one",
  },
});

const swiper6 = new Swiper(".workers-swiper", {
  loop: true,
  freeMode: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-two",
    prevEl: ".swiper-button-prev-two",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

document.querySelectorAll(".questions__list").forEach((item) =>
  item.addEventListener("click", () => {
    const parent = item.parentNode;

    if (parent.classList.contains("questions__list-box-active")) {
      parent.classList.remove("questions__list-box-active");
    } else {
      document
        .querySelectorAll(".questions__list-box")
        .forEach((child) =>
          child.classList.remove("questions__list-box-active")
        );

      parent.classList.add("questions__list-box-active");
    }
  })
);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const body = document.querySelector("body");
const modalButton = document.querySelector(".header__call-text");
const modal = document.querySelector(".bid");
const modalClose = document.querySelector(".bid__close-btn");

modalButton.addEventListener("click", () => {
  modal.classList.add("bid_visible");
  body.classList.add("lock");
});

modalClose.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("bid_visible");
  body.classList.remove("lock");
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    modal.classList.remove("bid_visible");
    body.classList.remove("lock");
  }
});
