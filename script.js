const images = [
  "download (1).jpeg",
  "download (2).jpeg",
  "download (3).jpeg",
  "download (7).jpeg",
  "download (6).jpeg",
  "download (5).jpeg",
  "download (4).jpeg",
];
let currentIndex = 0;
let isFullscreen = false;

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const sliderImage = document.getElementById("slider-image");

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();

  if (currentIndex === images.length - 1) {
    nextButton.style.display = "none";
    prevButton.style.display = "block";
  }
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();

  if (currentIndex === 0) {
    prevButton.style.display = "none";
    nextButton.style.display = "block";
  }
});

sliderImage.addEventListener("click", () => {
  if (!isFullscreen) {
    sliderImage.classList.add("fullscreen");
    isFullscreen = true;
  } else {
    sliderImage.classList.remove("fullscreen");
    isFullscreen = false;
  }
});

function updateImage() {
  const imagePath = images[currentIndex];
  sliderImage.src = imagePath;
  sliderImage.alt = `Image ${currentIndex + 1}`;
}

updateImage();
