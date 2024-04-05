// Function to fetch movie details from the server
function fetchMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
  
    fetch(`get_movie.php?id=${movieId}`)
      .then(response => response.json())
      .then(movie => {
        document.getElementById('movieId').value = movie.id;
        document.getElementById('movieTitle').textContent = movie.title;
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }
  
  // Fetch movie details on page load
  window.addEventListener('DOMContentLoaded', fetchMovieDetails);