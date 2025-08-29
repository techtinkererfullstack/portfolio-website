// Simple client-side validation demo
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert(
          "Thank you — this is a demo form. Replace with backend endpoint to send messages."
        );
        form.reset();
      }
      form.classList.add("was-validated");
    },
    false
  );
})();

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Optional: Close modal when clicking outside the content
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
