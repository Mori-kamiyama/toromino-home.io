let currentIndex = 0;

function updateCarousel() {
  const container = document.querySelector(".carousel-container");
  const images = document.querySelectorAll(".carousel-container img");
  const indicators = document.querySelectorAll(".indicator");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  container.style.transform = `translateX(${-currentIndex * 100}%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;

  // ボタンの色を更新
  prevButton.style.opacity = prevButton.disabled ? "0.5" : "1";
  nextButton.style.opacity = nextButton.disabled ? "0.5" : "1";
}

function moveCarousel(direction) {
  const images = document.querySelectorAll(".carousel-container img");
  currentIndex = Math.min(
    Math.max(currentIndex + direction, 0),
    images.length - 1,
  );
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function initializeCarousel() {
  const images = document.querySelectorAll(".carousel-container img");
  const indicatorsContainer = document.querySelector(".indicators");

  images.forEach((_, index) => {
    const indicator = document.createElement("span");
    indicator.classList.add("indicator");
    indicator.onclick = () => goToSlide(index);
    indicatorsContainer.appendChild(indicator);
  });

  updateCarousel();
}

document.addEventListener("DOMContentLoaded", initializeCarousel);


function scrollToTarget(tag) {
  const target = document.getElementById(tag);
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}