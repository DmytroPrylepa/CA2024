// Function to retrieve booking details from the URL query parameters
function getBookingDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get('movieTitle');
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    
    return { movieTitle, date, time };
  }
  
  // Function to display the booking details
  function displayBookingDetails() {
    const { movieTitle, date, time } = getBookingDetails();
    
    document.getElementById('movieTitle').textContent = movieTitle;
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
  }
  
  // Display booking details on page load
  window.addEventListener('DOMContentLoaded', displayBookingDetails);