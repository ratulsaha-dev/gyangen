<?php

session_start();

require_once 'includes/config.php';

$login = $_POST['login_id'];
$password = md5($_POST['password']);

$query = $conn->prepare("
SELECT * FROM users 
WHERE (email=? OR phone=?) 
AND password=?
");

$query->bind_param("sss",$login,$login,$password);
$query->execute();

$result = $query->get_result();

if($result->num_rows > 0){

$user = $result->fetch_assoc();

$_SESSION['user_id'] = $user['id'];
$_SESSION['role'] = $user['role'];
$_SESSION['name'] = $user['name'];

if($user['role'] == 'admin'){
    header("Location: admin/dashboard.php");
}
else{
    header("Location: user/dashboard.php");
}

}
else{
    echo "Invalid login credentials.";
}

?>