// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    
    // Perform client-side validation if needed
    
    form.submit();
  }
  
  // Attach form submission event listener
  document.getElementById('loginForm').addEventListener('submit', handleFormSubmit);