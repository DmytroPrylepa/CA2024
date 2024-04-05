// Function to fetch booked movies from the server
function fetchBookedMovies() {
    fetch('booked_movies.php')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#bookedMoviesTable tbody');
        tableBody.innerHTML = '';
        
        data.forEach(booking => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${booking.movie_title}</td>
            <td>${booking.date}</td>
            <td>${booking.time}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching booked movies:', error);
      });
  }
  
  // Fetch booked movies on page load
  window.addEventListener('DOMContentLoaded', fetchBookedMovies);