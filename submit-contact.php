<?php

include 'includes/config.php';


/* GET FORM DATA */

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$ip = $_SERVER['REMOTE_ADDR'];


/* GENERATE TICKET ID */

$ticket_id = "GG-SUP-" . rand(100000,999999);


/* INSERT INTO DATABASE */

$sql = "INSERT INTO support_tickets 
(ticket_id, name, email, subject, message, source, ip_address)
VALUES 
('$ticket_id','$name','$email','$subject','$message','contact_form','$ip')";

$conn->query($sql);


/* EMAIL TO SUPPORT TEAM */

$to = "support@gyangen.com";

$headers  = "From: contactcustomer@gyangen.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$email_body = "

New Support Ticket Raised

Ticket ID: $ticket_id

Name: $name
Email: $email

Subject: $subject

Message:
$message

--------------------------------
This ticket was submitted from gyangen.com
";

mail($to, $subject, $email_body, $headers);


/* AUTO REPLY TO CUSTOMER */

$reply_subject = "Support Ticket Received ($ticket_id)";

$reply_message = "

Hello $name,

Thank you for contacting GyanGen Technologies.

Your support request has been received successfully.

Ticket ID: $ticket_id

Our support team will review your request and respond shortly.

If you need to add more information, please reply to this email.

Regards,
GyanGen Support Team
support@gyangen.com

";

$reply_headers = "From: support@gyangen.com";

mail($email, $reply_subject, $reply_message, $reply_headers);


/* SUCCESS PAGE */

echo "

<h2>Support Ticket Submitted</h2>

<p>Your request has been successfully submitted.</p>

<p><strong>Ticket ID:</strong> $ticket_id</p>

<p>Our support team will contact you shortly.</p>

<a href='contact.php'>Back to Contact Page</a>

";

?>