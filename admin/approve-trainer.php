<?php

require_once '../includes/config.php';

$id = $_GET['id'];

$conn->query("
UPDATE users 
SET trainer_status='approved' 
WHERE id=$id
");

header("Location: trainers.php");

?>