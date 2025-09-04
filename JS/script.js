document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  function checkCards() {
    const windowHeight = window.innerHeight;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

      // If at least 150px of the card is visible → enlarge
      if (visibleHeight > 200) {
        card.classList.add("in-view");
      } else {
        card.classList.remove("in-view");
      }
    });
  }

  window.addEventListener("scroll", checkCards);
  window.addEventListener("resize", checkCards);
  checkCards(); // run once on load
});



document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".gallery-wrapper");

  galleries.forEach((gallery) => {
    const scrollContainer = gallery.querySelector(".gallery-scroll");
    const images = scrollContainer.querySelectorAll("img");
    const prevBtn = gallery.querySelector(".prev");
    const nextBtn = gallery.querySelector(".next");

    let index = 0; // start at first image

    function updateGallery() {
      const imageWidth = images[0].clientWidth; // width of one image
      const offset = -index * imageWidth;
      scrollContainer.style.transform = `translateX(${offset}px)`;
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length; // loop forward
      updateGallery();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length; // loop backward
      updateGallery();
    });

    // run once in case images load slowly
    window.addEventListener("resize", updateGallery);
  });
});
