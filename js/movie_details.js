// Function to fetch movie details from the JSON file
function fetchMovieDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id');

  fetch('data/movies.json')
    .then(response => response.json())
    .then(movies => {
      const movie = movies.find(movie => movie.id === parseInt(movieId));

      if (movie) {
        document.getElementById('movieTitle').textContent = movie.title;
        document.getElementById('movieGenre').textContent = movie.genre;
        document.getElementById('movieReleaseDate').textContent = movie.release_date;
        document.getElementById('movieDirector').textContent = movie.director;
        document.getElementById('movieCast').textContent = movie.cast.join(', ');
        document.getElementById('movieDescription').textContent = movie.description;
        document.getElementById('movieImage').src = movie.image;
      } else {
        console.error('Movie not found');
      }
    })
    .catch(error => {
      console.error('Error fetching movie details:', error);
    });
}

// Function to handle booking button click
function handleBookingClick() {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id');
  window.location.href = `booking.html?id=${movieId}`;
}

// Fetch movie details on page load
window.addEventListener('DOMContentLoaded', fetchMovieDetails);

// Add event listener to the booking button
document.getElementById('bookingButton').addEventListener('click', handleBookingClick);