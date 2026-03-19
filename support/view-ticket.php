<?php

include '../includes/config.php';

$ticket = $_GET['id'];

$data = $conn->query("SELECT * FROM support_tickets WHERE ticket_id='$ticket'")->fetch_assoc();

?>

<h2>Ticket <?php echo $data['ticket_id']; ?></h2>

<p><b>Name:</b> <?php echo $data['name']; ?></p>

<p><b>Email:</b> <?php echo $data['email']; ?></p>

<p><b>Subject:</b> <?php echo $data['subject']; ?></p>

<p><b>Status:</b> <?php echo $data['status']; ?></p>

<hr>

<p><?php echo $data['message']; ?></p>

<hr>

<h3>Reply</h3>

<form action="reply-ticket.php" method="POST">

<input type="hidden" name="ticket_id" value="<?php echo $ticket; ?>">

<label>CC</label>
<input type="text" name="cc">

<label>BCC</label>
<input type="text" name="bcc">

<textarea name="message" rows="6"></textarea>

<button type="submit">Send Reply</button>

</form>