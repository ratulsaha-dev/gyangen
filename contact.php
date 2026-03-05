<?php
include 'includes/header.php';
include 'includes/db.php';

if(isset($_POST['submit'])){

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$sql="INSERT INTO contact_messages(name,email,message)
VALUES('$name','$email','$message')";

$conn->query($sql);

echo "<p class='success'>Message Sent!</p>";

}
?>

<section class="contact">

<h2>Contact Us</h2>

<form method="POST">

<input type="text" name="name" placeholder="Your Name" required>

<input type="email" name="email" placeholder="Your Email" required>

<textarea name="message" placeholder="Message"></textarea>

<button name="submit">Send</button>

</form>

</section>

<?php include 'includes/footer.php'; ?>