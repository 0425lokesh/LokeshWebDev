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
