<?php
session_start();

if(!isset($_SESSION['user_id'])){
header("Location: ../login.php");
exit();
}

if($_SESSION['user_role'] != 'admin'){
header("Location: ../index.php");
exit();
}
?>

<h1>Welcome Admin <?php echo $_SESSION['user_name']; ?></h1>