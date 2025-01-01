const submitBtn = document.querySelector('.form-container .form-row input[type="submit"]');

// Add event listener to the Submit button
submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission
    document.body.innerHTML = "<h1 style='text-align: center; margin-top: 50px;'>Happy Birthday Alyssa</h1>";
});