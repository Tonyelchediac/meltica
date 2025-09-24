// navigation bar smoothly scroll
document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    nav.style.display = 'none';
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
});



// navbar open close
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', ()=> {
  nav.style.display = 'block';
})
close.addEventListener('click', ()=> {
  nav.style.display = 'none';
})





// scroll reveal
const sr = ScrollReveal({
  distance: '60px',
  duration: 1500,
  delay: 200,
  reset: true
});

// Hero section
sr.reveal('#hero h1', { origin: 'top' });
sr.reveal('#hero p', { origin: 'bottom', delay: 400 });
sr.reveal('#hero .btn', { origin: 'bottom', delay: 600, interval: 200 });

// About Us
sr.reveal('#aboutus .title', { origin: 'top' });
sr.reveal('#aboutus .text', { origin: 'left' });
sr.reveal('#aboutus img', { origin: 'left' });

// Gallery
sr.reveal('#gallery .title', { origin: 'top' });

// Services
sr.reveal('#services .title', { origin: 'top' });

// Contact Us
sr.reveal('#contactus .title', { origin: 'top' });
sr.reveal('#contactus form', { origin: 'left' });

// Footer
sr.reveal('footer h2', { origin: 'left' });
sr.reveal('footer .quick-links', { interval: 200, origin: 'bottom' });
