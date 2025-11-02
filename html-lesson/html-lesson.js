// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const body = this.nextElementSibling;

    // Close all other accordions
    document.querySelectorAll('.accordion-body').forEach(b => {
      if (b !== body) {
        b.style.maxHeight = null;
        b.previousElementSibling.classList.remove('active');
      }
    });

    // Toggle the clicked accordion
    if (body.style.maxHeight) {
      body.style.maxHeight = null;
      this.classList.remove('active');
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
      this.classList.add('active');
    }
  });
});
