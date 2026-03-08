<?php

session_start();

if(!isset($_SESSION['user_id'])){
header("Location: ../login.php");
}

?>

<?php include '../includes/header.php'; ?>

<h2>User Dashboard</h2>

<p>Welcome <?php echo $_SESSION['name']; ?></p>

<?php include '../includes/footer.php'; ?>