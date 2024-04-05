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
$username = $_POST['username'];
$password = $_POST['password'];

// Retrieve the user from the database
$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $row = $result->fetch_assoc();
    $storedPassword = $row['password'];
    $userType = $row['user_type'];

    // Verify the password
    if (password_verify($password, $storedPassword)) {
        // Password is correct, start a new session
        session_start();
        $_SESSION['username'] = $username;
        $_SESSION['user_type'] = $userType;

        // Redirect based on user type
        if ($userType === 'admin') {
            header("Location: admin.html");
            exit();
        } else {
            header("Location: index.html");
            exit();
        }
    } else {
        // Password is incorrect
        echo "Invalid username or password.";
    }
} else {
    // User not found
    echo "Invalid username or password.";
}

$conn->close();
?>