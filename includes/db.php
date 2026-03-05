<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "gyangen";

$conn = new mysqli($host,$user,$password,$dbname);

if($conn->connect_error){
die("Connection failed");
}

?>