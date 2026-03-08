<?php
include 'includes/config.php';

$role = $_POST['role'];
$name = $_POST['name'];
$organization = $_POST['organization'];
$experience = $_POST['experience'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$centre_code = $_POST['centre_code'];

if(!$role || !$name || !$organization || !$experience || !$phone || !$email){
    die("All mandatory fields are required.");
}

/* check duplicates */

$check = $conn->prepare("SELECT id FROM demo_registrations WHERE email=? OR phone=?");
$check->bind_param("ss",$email,$phone);
$check->execute();
$result = $check->get_result();

if($result->num_rows > 0){
    die("This email or phone number is already registered.");
}

/* insert */

$stmt = $conn->prepare("INSERT INTO demo_registrations (role,name,organization,experience,phone,email,centre_code) VALUES (?,?,?,?,?,?,?)");

$stmt->bind_param("sssssss",$role,$name,$organization,$experience,$phone,$email,$centre_code);

if($stmt->execute()){
    echo "Registration Successful. Our team will contact you shortly.";
}else{
    echo "Error: ".$conn->error;
}
?>