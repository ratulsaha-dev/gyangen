<?php

session_start();
include 'includes/config.php';

$login_id = $_POST['login_id'];
$password = $_POST['password'];

$sql = "SELECT * FROM users 
WHERE email='$login_id' OR phone='$login_id' LIMIT 1";

$result = $conn->query($sql);

if($result->num_rows == 1){

$user = $result->fetch_assoc();

if(password_verify($password,$user['password'])){

$_SESSION['user_id'] = $user['id'];
$_SESSION['user_name'] = $user['first_name'];
$_SESSION['user_role'] = $user['role'];

if($user['role'] == "admin"){
header("Location: app/dashboard.php");
}
else{
header("Location: app/index.php");
}

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