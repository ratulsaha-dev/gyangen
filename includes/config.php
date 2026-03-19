<?php

$servername = "localhost";
$username = "u533605425_gyangen_ratul";
$password = "GyanGen@26";
$dbname = "u533605425_gyangen";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

?>