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
$title = $_POST['title'];
$genre = $_POST['genre'];
$releaseDate = $_POST['releaseDate'];
$description = $_POST['description'];

// Insert the movie into the database
$sql = "INSERT INTO movies (title, genre, release_date, description) VALUES ('$title', '$genre', '$releaseDate', '$description')";

if ($conn->query($sql) === TRUE) {
    // Movie added successfully
    header("Location: admin.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>