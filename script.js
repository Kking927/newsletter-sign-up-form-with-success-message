document.addEventListener('DOMContentLoaded', () => {
  // 1. Select DOM Elements
  const newsletterCard = document.querySelector('.newsletter');
  const successCard = document.querySelector('.newsletter-success');
  const form = document.querySelector('.newsletter__form');
  const emailInput = document.querySelector('.newsletter__input');
  const formField = document.querySelector('.newsletter__field');
  const submittedEmailSpan = document.querySelector('.newsletter-success__email');
  const dismissBtn = document.querySelector('.newsletter-success__button');

  // Simple Email Regex Pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 2. Helper Functions
  const showError = () => {
    formField.classList.add('newsletter__field--error');
    emailInput.setAttribute('aria-invalid', 'true');
  };

  const clearError = () => {
    formField.classList.remove('newsletter__field--error');
    emailInput.removeAttribute('aria-invalid');
  };

  // Reset form validation state on DOM load so errors don't persist on page refresh
  clearError();

  // 3. Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    const emailValue = emailInput.value.trim();

    // Validate email address
    if (!emailValue || !emailRegex.test(emailValue)) {
      showError();
      return;
    }

    // Success flow: Clear errors, insert email text, toggle cards
    clearError();
    submittedEmailSpan.textContent = emailValue;
    
    newsletterCard.classList.add('newsletter-success--hidden');
    successCard.classList.remove('newsletter-success--hidden');
  });

  // 4. Clear error state while the user types
  emailInput.addEventListener('input', () => {
    if (formField.classList.contains('newsletter__field--error')) {
      clearError();
    }
  });

  // 5. Handle "Dismiss message" Button
  dismissBtn.addEventListener('click', () => {
    // Reset form field
    form.reset();
    clearError();

    // Toggle back to original sign-up form
    successCard.classList.add('newsletter-success--hidden');
    newsletterCard.classList.remove('newsletter-success--hidden');
  });
});
