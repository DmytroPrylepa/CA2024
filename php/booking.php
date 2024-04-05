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
$movieTitle = $_POST['movieTitle'];
$date = $_POST['date'];
$time = $_POST['time'];

// Insert the booking data into the database
$sql = "INSERT INTO bookings (movie_title, date, time) VALUES ('$movieTitle', '$date', '$time')";

if ($conn->query($sql) === TRUE) {
    // Booking successful, redirect to confirmation page with booking details
    $confirmationUrl = "confirmation.html?movieTitle=" . urlencode($movieTitle) . "&date=" . urlencode($date) . "&time=" . urlencode($time);
    header("Location: $confirmationUrl");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>