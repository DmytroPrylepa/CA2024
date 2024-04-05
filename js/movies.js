// Function to fetch movies from the local JSON file
function fetchMovies() {
    fetch('/data/movies.json')
      .then(response => response.json())
      .then(data => {
        // Generate movie cards dynamically
        const movieGrid = document.querySelector('.movie-grid');
        movieGrid.innerHTML = '';
  
        data.forEach(movie => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');
          movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <a href="movie_details.html?id=${movie.id}" class="btn">View Details</a>
          `;
          movieGrid.appendChild(movieCard);
        });
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }
  
  // Call the fetchMovies function when the page loads
  window.addEventListener('DOMContentLoaded', fetchMovies);