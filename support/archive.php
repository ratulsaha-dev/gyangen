<?php
// Database Credentials
$host     = "localhost";
$db_name  = "u533605425_gyangen";
$username = "u533605425_gyangen_ratul";
$password = "GyanGen@26";

try {
    // 1. Establish Connection
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 2. Execute the Archive Query
    $sql = "UPDATE support_tickets 
            SET archived = 1 
            WHERE created_at < NOW() - INTERVAL 90 DAY 
            AND archived = 0";

    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    echo "Success: " . $stmt->rowCount() . " tickets were archived.";

} catch (PDOException $e) {
    // Log error and exit
    error_log("Cron Job Failed: " . $e->getMessage());
    die("Error: Could not complete archiving.");
}
?>