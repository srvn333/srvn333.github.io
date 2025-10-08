// Show a welcome message when the page loads
window.addEventListener('load', () => {
  console.log("Welcome to my portfolio site!");
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Remove #
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Future enhancement: Dark mode toggle
// document.getElementById('toggle-theme').addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });
