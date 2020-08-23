const navButton = document.querySelector('.nav-button-trigger');
const navLinks = document.querySelector('.nav-links');

// Fired on click of hamburger.
navButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const setActiveRoute = () => {
  const route = window.location.pathname.substring(1);
  if (!route) { return; }
  const navLinks = Array.from(document.querySelectorAll('.nav-item'));
  navLinks.forEach(link => {
    const url = link.href.split('/');
    const path = url[url.length - 1];

    if (path === route) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
setActiveRoute();