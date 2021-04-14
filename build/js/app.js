const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".search-container input");

// Top Search button and Input
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchBtn.nextElementSibling.classList.toggle("hidden");
});

document.body.onclick = (e) => {
  if (!e.target.classList.contains("search-btn")) {
    if (
      !searchBtn.nextElementSibling.classList.contains("hidden") &&
      e.target !== input
    ) {
      searchBtn.nextElementSibling.classList.toggle("hidden");
    }
  }
};

// Mobile Menu links and sub-links
const menuLinks = document.querySelectorAll(".mobile-navbar button");
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let menuContent = link.nextElementSibling;
    let active = document.querySelector(".mobile-navbar li.active");

    if (menuContent) {
      if (active) {
        if (link.parentElement.classList.contains("active")) {
          link.parentElement.classList.remove("active");
          active.lastElementChild.style.height = "0";
          link.querySelector("svg").style.transform = "rotate(0deg)";
        } else {
          active.classList.remove("active");
          active.querySelector("svg").style.transform = "rotate(0)";
          active.lastElementChild.style.height = "0";
          link.parentElement.classList.add("active");
          menuContent.style.height = menuContent.scrollHeight + "px";
          link.querySelector("svg").style.transform = "rotate(90deg)";
        }
      } else {
        link.parentElement.classList.add("active");
        menuContent.style.height = menuContent.scrollHeight + "px";
        link.querySelector("svg").style.transform = "rotate(90deg)";
      }
    }
  });
});

// toggle Mobile menu button
const mobileBtn = document.querySelector(".toggle-button");
mobileBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const mobileContent = document.querySelector(".mobile-content");
  mobileContent.classList.toggle("active");

  if (mobileContent.classList.contains("active")) {
    mobileContent.style.maxHeight = mobileContent.scrollHeight + "px";
  } else {
    mobileContent.style.maxHeight = "0";
  }
});

// Slider
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
