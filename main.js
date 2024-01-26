document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById('slider');
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide').length;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' +translateValue+ ')';
  }

  setInterval(nextSlide, 3000);
});   







let answer = document.querySelectorAll(".faqsbox");

answer.forEach((event) => {
    event.addEventListener("click", () => {
        answer.forEach((other) => {
            if (other !== event && other.classList.contains("active")) {
                other.classList.remove("active");
            }
        });

        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});



