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
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const captcha = form.captcha.value;
    const captchaAnswer = form.captchaAnswer.value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (captcha !== captchaAnswer) {
      alert('CAPTCHA answer is incorrect');
      return;
    }
    
    form.submit();
  }
  
  // Generate CAPTCHA question on page load
  window.addEventListener('DOMContentLoaded', generateCaptchaQuestion);
  
  // Attach form submission event listener
  document.getElementById('registerForm').addEventListener('submit', handleFormSubmit);