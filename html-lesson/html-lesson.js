// Accordion Toggle Script
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const body = this.nextElementSibling;

    // Close other accordions
    document.querySelectorAll('.accordion-body').forEach(b => {
      if (b !== body) {
        b.style.maxHeight = null;
        b.previousElementSibling.classList.remove('active');
      }
    });

    // Toggle current one
    if (body.style.maxHeight) {
      body.style.maxHeight = null;
      this.classList.remove('active');
    } else {
      body.style.maxHeight = body.scrollHeight + 'px';
      this.classList.add('active');
    }
  });
});
