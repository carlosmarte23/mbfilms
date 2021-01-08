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
