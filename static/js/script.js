const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

window.onload = () => {
  var currentURL = window.location.href;
  var urlParams = new URL(currentURL).searchParams;

  msg = urlParams.get('msg')
  if (msg != null) {
      alert(msg);
  }

  err = urlParams.get('error')
  if (err != null) {
      alert(err);
  }
}