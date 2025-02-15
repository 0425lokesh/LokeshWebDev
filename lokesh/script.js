const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav ul li a');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });


  const modal = document.getElementById('modal');
    const open = document.getElementById('open');
    const close = document.getElementById('close');

    open.onclick = function() {
        modal.style.display = "flex";
        document.body.classList.add('no-scroll');
    }

    close.onclick = function() {
        modal.style.display = "none";
        document.body.classList.remove('no-scroll');
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    }

    // Get all navigation links
const navActiveLinks = document.querySelectorAll(".nav-link");

// Get the current page URL
const currentPage = window.location.pathname;

// Loop through all nav links
navActiveLinks.forEach((link) => {
  // Check if the href of the link matches the current page
  if (link.getAttribute("href") === currentPage) {
    // Add the active class to the matching link
    link.classList.add("active");
  } else {
    // Remove active class from non-matching links (optional for page reloads)
    link.classList.remove("active");
  }
});

const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('user-name').value;
      const email = document.getElementById('user-email').value;
      const message = document.getElementById('message').value;

      const mailtoLink = `mailto:lokeshloki0425@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

      window.location.href = mailtoLink;
    });


    let currentSlide = 0;
    function showSlide(index) {
        let slides = document.querySelectorAll('.testimonial-slide');
        let dots = document.querySelectorAll('.dot');
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % 2;
        showSlide(nextSlide);
    }, 5000);

const images = [
  "https://badhaihoevents.in/wp-content/uploads/2023/04/eed4fdd1-d166-418f-a855-7164a282cf4e.jpeg",
  "https://badhaihoevents.in/wp-content/uploads/2021/01/wedding-lawns-in-dwarka-delhi-to-host-the-most-special-day-of-your-life.jpg",
  "https://badhaihoevents.in/wp-content/uploads/2023/06/Corporate-Event-Planner-in-Noida.jpeg",
];

const imageElement = document.getElementById('image');
imageElement.src = images[0];

function changeImage() {
  imageElement.style.opacity = 0;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    imageElement.src = images[randomIndex];
    imageElement.style.opacity = 1;
  }, 1000); 
}

setInterval(changeImage, 5000);
