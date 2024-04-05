// Function to fetch movies from the server
function fetchMovies() {
    fetch('admin_movies.php')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#moviesTable tbody');
        tableBody.innerHTML = '';
        
        data.forEach(movie => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.release_date}</td>
            <td>
              <a href="edit_movie.html?id=${movie.id}" class="btn">Edit</a>
              <a href="delete_movie.html?id=${movie.id}" class="btn">Delete</a>
            </td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }
  
  // Fetch movies on page load
  window.addEventListener('DOMContentLoaded', fetchMovies);