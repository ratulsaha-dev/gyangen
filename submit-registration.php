<?php

include 'includes/config.php';

$role = $_POST['role'];
$name = $_POST['name'];
$organization = $_POST['organization'];
$experience = $_POST['experience'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];
$centre_code = $_POST['centre_code'];

/* Password validation */

if($password !== $confirm_password){
die("Passwords do not match.");
}

/* Secure password */

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

/* Insert query */

$sql = "INSERT INTO registrations 
(role,name,organization,experience,phone,email,password,centre_code)
VALUES 
('$role','$name','$organization','$experience','$phone','$email','$hashed_password','$centre_code')";

if($conn->query($sql) === TRUE){

echo "Registration Successful";

}
else{

echo "Error: " . $conn->error;

}

?>