<?php

require_once '../includes/config.php';

$result = $conn->query("SELECT * FROM users WHERE role='trainer' AND trainer_status='pending'");

while($row = $result->fetch_assoc()){

echo $row['name']." - ".$row['email'];

echo "<a href='approve-trainer.php?id=".$row['id']."'>Approve</a>";

echo "<br>";

}