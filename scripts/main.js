// vh and vw for real viewport sizes
function calculateViewport() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}

//recalculate on window resize
window.addEventListener('resize', () => {
  calculateViewport();
});

calculateViewport(); //firstRun
// --------------------------------------------------------

// MENU functionality
function hideMenu() {
  let toggler = document.querySelector('.toggler');
  let isMenuOpen = toggler.checked;

  if (isMenuOpen) {
    toggler.checked = false;
  }
}

// Get all links from nav bar
let navLinks = document.querySelectorAll('nav a');
let navLinksArr = Array.from(navLinks);

navLinksArr.forEach((link) => {
  link.addEventListener('click', hideMenu);
});

// get menu wrap and add event listener to close on click
document.querySelector('.menu').addEventListener('click', hideMenu);

// FOTO CAROUSEL
let fotoGal = document.querySelector('.foto-gallery');
let flktyimg = new Flickity(fotoGal, {
  //options
  contain: true,
  wrapAround: true,
  autoPlay: true,
  cellAlign: 'center',
  draggable: '>1',
});

window.addEventListener('resize', () => {
  flkty.resize();
});

// VIDEO CAROUSEL
let vidGal = document.querySelector('.video-gallery');
let flktyvid = new Flickity(vidGal, {
  //options
  contain: true,
  // autoPlay: true,
  cellAlign: 'center',
  draggable: '>1',
});
