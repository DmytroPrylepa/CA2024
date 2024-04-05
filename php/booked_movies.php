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

// Fetch booked movies from the database
$sql = "SELECT * FROM bookings";
$result = $conn->query($sql);

$bookedMovies = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $bookedMovies[] = $row;
    }
}

// Return booked movies as JSON response
header('Content-Type: application/json');
echo json_encode($bookedMovies);

$conn->close();
?>