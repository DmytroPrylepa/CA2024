<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ca";

// Create a new connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the movie ID from the URL parameter
$movieId = $_GET['id'];

// Fetch the movie details from the database
$sql = "SELECT * FROM movies WHERE id=$movieId";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $movie = $result->fetch_assoc();
    echo json_encode($movie);
} else {
    echo "Movie not found";
}

$conn->close();
?>