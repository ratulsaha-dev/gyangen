<?php

include 'includes/config.php';

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
} else {
    echo "✅ Database Connected Successfully";
}

?>