// Function to generate a random CAPTCHA question
function generateCaptchaQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = Math.random() < 0.5 ? '+' : '-';
    const question = `What is ${num1} ${operator} ${num2}?`;
    const answer = operator === '+' ? num1 + num2 : num1 - num2;
    
    document.getElementById('captchaQuestion').textContent = question;
    document.getElementById('captchaAnswer').value = answer;
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const captcha = form.captcha.value;
    const captchaAnswer = form.captchaAnswer.value;
    
    if (captcha !== captchaAnswer) {
      alert('CAPTCHA answer is incorrect');
      return;
    }
    
    form.submit();
  }
  
  // Function to populate the movie title field
  function populateMovieTitle() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    
    // Fetch the movie title based on the movie ID and populate the field
    // You can use AJAX or fetch API to retrieve the movie title from the server
    // For simplicity, let's assume the movie title is "Sample Movie"
    document.getElementById('movieTitle').value = "Sample Movie";
  }
  
  // Generate CAPTCHA question on page load
  window.addEventListener('DOMContentLoaded', generateCaptchaQuestion);
  
  // Populate the movie title field on page load
  window.addEventListener('DOMContentLoaded', populateMovieTitle);
  
  // Attach form submission event listener
  document.getElementById('bookingForm').addEventListener('submit', handleFormSubmit);