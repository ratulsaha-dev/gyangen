<?php

include '../includes/config.php';

$ticket = $_POST['ticket_id'];
$message = $_POST['message'];
$cc = $_POST['cc'];
$bcc = $_POST['bcc'];

$data = $conn->query("SELECT * FROM support_tickets WHERE ticket_id='$ticket'")->fetch_assoc();

$email = $data['email'];

$headers = "From: support@gyangen.com\r\n";
$headers .= "Reply-To: support@gyangen.com\r\n";

if($cc){
$headers .= "Cc: $cc\r\n";
}

if($bcc){
$headers .= "Bcc: $bcc\r\n";
}

mail($email,"Re: ".$data['subject'],$message,$headers);


/* Save reply */

$conn->query("INSERT INTO ticket_replies(ticket_id,sender_email,message,cc,bcc)
VALUES('$ticket','support@gyangen.com','$message','$cc','$bcc')");

echo "Reply sent";

?>