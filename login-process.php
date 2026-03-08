<?php

session_start();
include 'includes/config.php';

$login_id = $_POST['login_id'];
$password = $_POST['password'];
$remember = isset($_POST['remember']);

/* Find user */

$sql = "SELECT * FROM registrations 
WHERE email='$login_id' OR phone='$login_id' LIMIT 1";

$result = $conn->query($sql);

if($result->num_rows == 1){

$user = $result->fetch_assoc();

/* Verify password */

if(password_verify($password, $user['password'])){

$_SESSION['user_id'] = $user['id'];
$_SESSION['user_name'] = $user['name'];

/* Remember Me */

if($remember){

setcookie(
"remember_user",
$user['id'],
time() + (86400 * 30),
"/"
);

}

header("Location: dashboard.php");
exit();

}
else{

echo "Incorrect password";

}

}
else{

echo "User not found";

}

?>