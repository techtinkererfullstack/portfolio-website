
// Simple client-side validation demo
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert('Thank you — this is a demo form. Replace with backend endpoint to send messages.');
      form.reset();
    }
    form.classList.add('was-validated');
  }, false);
})();
