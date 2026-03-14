<?php
include '../includes/config.php';

$tickets = $conn->query("SELECT * FROM support_tickets WHERE archived = 0 ORDER BY created_at DESC");
?>

<h1>Support Tickets</h1>

<table border="1" width="100%">

<tr>
<th>Ticket ID</th>
<th>Name</th>
<th>Email</th>
<th>Subject</th>
<th>Status</th>
<th>Date</th>
<th>Action</th>
</tr>

<?php while($row = $tickets->fetch_assoc()) { ?>

<tr>

<td><?php echo $row['ticket_id']; ?></td>

<td><?php echo $row['name']; ?></td>

<td><?php echo $row['email']; ?></td>

<td><?php echo $row['subject']; ?></td>

<td><?php echo $row['status']; ?></td>

<td><?php echo $row['created_at']; ?></td>

<td>

<a href="view-ticket.php?id=<?php echo $row['ticket_id']; ?>">
View
</a>

</td>

</tr>

<?php } ?>

</table>