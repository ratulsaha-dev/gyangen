<?php

session_start();

if($_SESSION['role'] != 'admin'){
    header("Location: ../login.php");
}

?>

<?php include '../includes/header.php'; ?>

<h1>Admin Dashboard</h1>

<p>Welcome <?php echo $_SESSION['name']; ?></p>

<ul>

<li><a href="trainers.php">Approve Trainers</a></li>
<li><a href="users.php">View Users</a></li>

</ul>

<?php include '../includes/footer.php'; ?>