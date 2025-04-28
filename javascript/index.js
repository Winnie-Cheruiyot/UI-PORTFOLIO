// Typing effect for "Web Developer"
const title = document.querySelector(".hero h2");
const cursor = document.getElementById("cursor");
const text = "Web Developer";
let index = 0;

function type() {
  if (index < text.length) {
    title.innerHTML = text.substring(0, index + 1) + '<span id="cursor">|</span>';
    index++;
    setTimeout(type, 150);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // Dark mode toggle
  const toggleBtn = document.querySelector(".btn-outline-light");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

//part 4
// You can use this file to animate or interact with the skills section

document.addEventListener("DOMContentLoaded", function () {
  console.log("Skills section loaded!");

  // Example: Animate progress bars (future enhancement)
  // You could add scroll-based animation here if you like!
});

// Part 5
// Placeholder for potential animations
document.addEventListener("DOMContentLoaded", () => {
  console.log("Services and Achievements loaded.");
});
// part 6
// You can add any interactivity here if needed
console.log("My Success Work section loaded.");

// Scroll to Top Button Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Smooth scroll behavior
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});
