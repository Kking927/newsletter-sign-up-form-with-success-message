# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](images/screenshot.png)

### Links

- [Solution URL](https://github.com/Kking927/newsletter-sign-up-form-with-success-message)
- [Live Site URL](https://kking927.github.io/newsletter-sign-up-form-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties and BEM naming convention
- Flexbox
- Mobile-first workflow

### What I learned

During this project, I improved my client-side form handling and dynamic DOM manipulation in JavaScript. 

Key takeaways include:
- **Defensive JavaScript Initialization:** I learned the importance of resetting form field states immediately on page load (`clearError()`) to prevent browser caching from displaying leftover error styles.
- **Dynamic View Switching:** I practiced toggling UI components smoothly between the sign-up card and the success state message using CSS modifier classes (`.newsletter-success--hidden`).
- **Accessible Validation:** I coupled visual error states with accessible attributes like `aria-invalid` to ensure screen readers accurately convey the input state to all users.

```javascript
// Helper to toggle accessibility attributes alongside visual classes
const showError = () => {
  formField.classList.add('newsletter__field--error');
  emailInput.setAttribute('aria-invalid', 'true');
};

// Ensure initial error states are cleared when the page loads
const clearError = () => {
  formField.classList.remove('newsletter__field--error');
  emailInput.removeAttribute('aria-invalid');
};

clearError();
```

 ## Author


- Frontend Mentor - [@Kking927](https://www.frontendmentor.io/profile/Kking927)
