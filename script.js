const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.onclick = function () {
    let currentActivedQuestion = document.querySelector(
      ".question.question-actived"
    );
    if (!this.classList.contains("question-actived")) {
      if (currentActivedQuestion) {
        currentActivedQuestion.classList.remove("question-actived");
      }
      q.classList.add("question-actived");
    } else {
      this.classList.remove("question-actived");
    }
  };
});

const list = document.querySelectorAll(".feed-back-wrap");
const arr = Array.from(list);
const buttons = document.querySelectorAll(".btn-carousel");
const track = document.querySelector(".feed-back-container");
let currentIndex = 0;
let servicesCurrentIndex = 0;
let servicesIntervalId;
let galleryCurrentIndex = 0;

function carousel() {
  // Ẩn slide hiện tại
  arr[currentIndex].classList.remove("feed-back-actived");
  buttons[currentIndex].classList.remove("btn-actived");

  // Cập nhật chỉ số cho phần tử tiếp theo
  currentIndex = (currentIndex + 1) % arr.length;

  // Hiển thị slide tiếp theo

  arr[currentIndex].classList.add("feed-back-actived");
  buttons[currentIndex].classList.add("btn-actived");

  arr.forEach((a) => {
    if (!a.classList.contains("feed-back-actived")) {
      a.style.opacity = "0";
      a.style.visibility = "hidden";
      a.style.transform = "translateX(50%)";
      a.style.transition = "opacity 0.5s, visibility 0.5s, transform 0.5s";
    } else {
      a.style.opacity = "1";
      a.style.visibility = "visible";
      a.style.transform = "translateX(0)";
      a.style.transition = "opacity 0.5s, visibility 0.5s, transform 0.5s";
    }
  });
}
buttons.forEach((button, index) => {
  button.onclick = function () {
    currentIndex = index;
    const something = arr[index];
    if (!something.classList.contains("feed-back-actived")) {
      const btnActived = document.querySelector(".btn-carousel.btn-actived");
      if (btnActived) {
        btnActived.classList.remove("btn-actived");
      }
      const activedFeedback = document.querySelector(
        ".feed-back-wrap.feed-back-actived"
      ); // lấy ra những phần tử
      // đang được actived
      if (activedFeedback) {
        activedFeedback.classList.remove("feed-back-actived");
        activedFeedback.style.opacity = "0"; // Cập nhật opacity ngay lập tức
        activedFeedback.style.visibility = "hidden"; // Ẩn ngay lập tức
        activedFeedback.style.transform = "translateX(50%)"; // Di chuyển ra ngoài
      }
      button.classList.add("btn-actived");
      // hiển thị phần tử được chọn
      something.classList.add("feed-back-actived");
      something.style.opacity = "1"; // Cập nhật opacity ngay lập tức
      something.style.visibility = "visible"; // Hiển thị ngay lập tức
      something.style.transform = "translateX(0)"; // Đưa về vị trí ban đầu
    }
    clearInterval(intervalId);
    setTimeout((intervalId = setInterval(carousel, 5000)), 6000);
  };
});

window.addEventListener("load", function () {
  intervalId = setInterval(carousel, 5000);
});

const servivesContents = document.querySelectorAll(".services-mobile");
const servicesButtons = document.querySelectorAll(".btn-services-mobile");

function addClassOnResize() {
  const elements = document.querySelectorAll(".our-services .row .col-xl-4");
  const elementDefaultActived = document.querySelector(
    ".our-services .row .col-xl-4:first-child"
  );
  elements.forEach((element) => {
    if (window.innerWidth <= 991) {
      element.classList.remove("services-mobile");
      element.classList.remove("services-actived");
      element.classList.add("services-mobile");
    } else {
      element.classList.remove("services-mobile");
      element.classList.remove("services-actived");
    }

    if (elementDefaultActived && window.innerWidth <= 991) {
      elementDefaultActived.classList.add("services-actived");
    }
  });
}
window.addEventListener("load", addClassOnResize);
window.addEventListener("resize", addClassOnResize);
servicesButtons.forEach((btn, index) => {
  const content = servivesContents[index];
  btn.addEventListener("click", () => {
    servicesCurrentIndex = index;
    const servicesButtonsActived = document.querySelector(
      ".btn-services-mobile.btn--services-actived"
    );
    const servivesContentsActived = document.querySelector(
      ".services-mobile.services-actived"
    );
    if (!content.classList.contains("services-actived")) {
      if (servicesButtonsActived) {
        servicesButtonsActived.classList.remove("btn--services-actived");
      }
      if (servivesContentsActived) {
        servivesContentsActived.classList.remove("services-actived");
        servivesContentsActived.style.opacity = "0";
        servivesContentsActived.style.visibility = "hidden";
        servivesContentsActived.style.transform = "translateX(100%)";
      }

      btn.classList.add("btn--services-actived");
      content.classList.add("services-actived");
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.transform = "translateX(0)";
    }
    clearInterval(servicesIntervalId);
    setTimeout(
      (servicesIntervalId = setInterval(servicesCarousel, 5000)),
      6000
    );
  });
});

function servicesCarousel() {
  if (window.innerWidth <= 991) {
    servivesContents[servicesCurrentIndex].classList.remove("services-actived");
    servicesButtons[servicesCurrentIndex].classList.remove(
      "btn--services-actived"
    );

    servicesCurrentIndex = (servicesCurrentIndex + 1) % servivesContents.length;

    servivesContents[servicesCurrentIndex].classList.add("services-actived");
    servicesButtons[servicesCurrentIndex].classList.add(
      "btn--services-actived"
    );

    servivesContents.forEach((content) => {
      if (!content.classList.contains("services-actived")) {
        content.style.opacity = "0";
        content.style.visibility = "hidden";
        content.style.transform = "translateX(100%)";
        content.style.transition =
          "opacity 0.5s, visibility 0.5s, transform 0.5s";
      } else {
        content.style.opacity = "1";
        content.style.visibility = "visible";
        content.style.transform = "translateX(0)";
        content.style.transition =
          "opacity 0.5s, visibility 0.5s, transform 0.5s";
      }
    });
  }
}
window.addEventListener("load", () => {
  servicesIntervalId = setInterval(servicesCarousel, 5000);
});

const pcNav = document.querySelector(".pc-nav");
const mobileNav = document.querySelector(".mobile-nav");

pcNav.innerHTML = mobileNav.innerHTML; // Copy phần tử con của pcNav vào mobileNav

const menuButton = document.getElementById("menu-btn");
const overlay = document.querySelector(".overlay");
const menuMobileContent = document.querySelector(".menu-noidung");

menuButton.addEventListener("click", () => {
  overlay.classList.add("overlay-actived");
  menuMobileContent.classList.add("menu-noidung-actived");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("overlay-actived");
  menuMobileContent.classList.remove("menu-noidung-actived");
});

const galleryImgs = document.querySelectorAll(".gallery-img");
const galleryButtons = document.querySelectorAll(".btn-gallery");

function galleryCarousel() {
  if (window.innerWidth <= 991) {
    galleryImgs[galleryCurrentIndex].classList.remove("gallery-img-actived");
    galleryButtons[galleryCurrentIndex].classList.remove("btn-gallery-actived");

    galleryCurrentIndex = (galleryCurrentIndex + 1) % galleryImgs.length;

    galleryImgs[galleryCurrentIndex].classList.add("gallery-img-actived");
    galleryButtons[galleryCurrentIndex].classList.add("btn-gallery-actived");
    galleryImgs.forEach((item) => {
      if (!item.classList.contains("gallery-img-actived")) {
        item.style.opacity = "0";
        item.style.transform = "translateX(100%)";
        item.style.visibility = "hidden";
        item.style.transition = "opacity 0.5s, visibility 0.5s, transform 0.5s";
      } else {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
        item.style.visibility = "visible";
        item.style.transition = "opacity 0.5s, visibility 0.5s, transform 0.5s";
      }
    });
  }
}

galleryButtons.forEach((btn, index) => {
  const gallery = galleryImgs[index];

  btn.addEventListener("click", () => {
    galleryCurrentIndex = index;
    if (!gallery.classList.contains("gallery-img-actived")) {
      const galleryActived = document.querySelector(
        ".gallery-img.gallery-img-actived"
      );
      if (galleryActived) {
        galleryActived.classList.remove("gallery-img-actived");
        galleryActived.style.opacity = "0";
        galleryActived.style.transform = "translateX(100%)";
        galleryActived.style.visibility = "hidden";
      }
      const galleryButtonActived = document.querySelector(
        ".btn-gallery.btn-gallery-actived"
      );
      if (galleryButtonActived) {
        galleryButtonActived.classList.remove("btn-gallery-actived");
      }
      btn.classList.add("btn-gallery-actived");
      gallery.classList.add("gallery-img-actived");
      gallery.style.opacity = "1";
      gallery.style.transform = "translateX(0)";
      gallery.style.visibility = "visible";
    }
    clearInterval(galleryIntervalId);
    setTimeout((galleryIntervalId = setInterval(galleryCarousel, 5000)), 6000);
  });
});

window.addEventListener("load", () => {
  galleryIntervalId = setInterval(galleryCarousel, 5000);
});

function addGalleryClassOnResize() {
  const elements = document.querySelectorAll(".gallery .row .col-xl-4");
  const elementDefaultActived = document.querySelector(
    ".gallery .row .col-xl-4:first-child"
  );
  elements.forEach((element) => {
    if (window.innerWidth <= 991) {
      element.classList.remove("gallery-img");
      element.classList.remove("gallery-img-actived");
      element.classList.add("gallery-img");
    } else {
      element.classList.remove("services-mobile");
      element.classList.remove("gallery-img-actived");
    }

    if (elementDefaultActived && window.innerWidth <= 991) {
      elementDefaultActived.classList.add("gallery-img-actived");
    }
  });
}

window.addEventListener("resize", addClassOnResize);
window.addEventListener("load", addClassOnResize);
