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

// Fetch movies from the database
$sql = "SELECT * FROM movies";
$result = $conn->query($sql);

$movies = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $movies[] = $row;
    }
}

// Return movies as JSON response
header('Content-Type: application/json');
echo json_encode($movies);

$conn->close();
?>