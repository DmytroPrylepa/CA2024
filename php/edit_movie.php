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

// Get the form data
$movieId = $_POST['movieId'];
$title = $_POST['title'];
$genre = $_POST['genre'];
$releaseDate = $_POST['releaseDate'];
$description = $_POST['description'];

// Update the movie in the database
$sql = "UPDATE movies SET title='$title', genre='$genre', release_date='$releaseDate', description='$description' WHERE id=$movieId";

if ($conn->query($sql) === TRUE) {
    // Movie updated successfully
    header("Location: admin.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>