// Function to fetch featured movies from the server
function fetchFeaturedMovies() {
    fetch('/data/movies.json')
      .then(response => response.json())
      .then(movies => {
        const movieGrid = document.querySelector('.movie-grid');
        movieGrid.innerHTML = '';
  
        movies.forEach(movie => {
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
        console.error('Error fetching featured movies:', error);
      });
  }
  
  // Fetch featured movies on page load
  window.addEventListener('DOMContentLoaded', fetchFeaturedMovies);