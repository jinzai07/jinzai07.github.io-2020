/**
 * Method in dynamically changing logo size
 * based on window width.
 * @param {*} e generic event object
 */
const adjustLogoSize = (e) => {
  const logo = document.querySelector('#brand-logo');
  const currentWidth = e.currentTarget.innerWidth;
  const maxWidth = e.currentTarget.outerWidth;
  const minWidthOffset = 956.2;

  if (currentWidth <= minWidthOffset) {
    logo.width = logo.height = 70;
    return;
  } else if (currentWidth >= minWidthOffset) {
    logo.width = logo.height = 100;
    return;
  }
  logo.width = logo.height = currentWidth/(maxWidth/100);
}

const navButton = document.querySelector('.nav-button-trigger');
const navLinks = document.querySelector('.nav-links');
/**
 * Fired on click of hamburger.
 */
navButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/**
 * Fired on resize window.
 */
window.addEventListener('resize', (e) => {
  adjustLogoSize(e);
});

/**
 * Fired on load of window.
 */
window.addEventListener('load', (e) => {
  adjustLogoSize(e);
});
