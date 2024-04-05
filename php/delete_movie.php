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

// Get the movie ID from the form data
$movieId = $_POST['movieId'];

// Delete the movie from the database
$sql = "DELETE FROM movies WHERE id=$movieId";

if ($conn->query($sql) === TRUE) {
    // Movie deleted successfully
    header("Location: admin.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>