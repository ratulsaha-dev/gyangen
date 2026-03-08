<link rel="stylesheet" href="css/style.css">
<?php

require_once '../includes/config.php';

/* collect form data */

$role = $_POST['role'] ?? '';
$name = $_POST['name'] ?? '';
$organization = $_POST['organization'] ?? '';
$experience = $_POST['experience'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$centre_code = $_POST['centre_code'] ?? '';

/* validation */

if(empty($role) || empty($name) || empty($organization) || empty($experience) || empty($phone) || empty($email)){
    die("Error: Please fill all mandatory fields.");
}

/* duplicate check */

$check = $conn->prepare("SELECT id FROM demo_registrations WHERE email=? OR phone=?");
$check->bind_param("ss",$email,$phone);
$check->execute();
$result = $check->get_result();

if($result->num_rows > 0){
    die("Error: Email or phone already registered.");
}

/* insert data */

$stmt = $conn->prepare("INSERT INTO demo_registrations (role,name,organization,experience,phone,email,centre_code) VALUES (?,?,?,?,?,?,?)");

$stmt->bind_param("sssssss",$role,$name,$organization,$experience,$phone,$email,$centre_code);

if($stmt->execute()){
    echo "Success: Registration completed.";
}
else{
    echo "Error: " . $stmt->error;
}

?>