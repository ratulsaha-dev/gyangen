<?php

date_default_timezone_set('Asia/Kolkata');

$host     = "localhost";
$db_name  = "u533605425_gyangen";
$username = "u533605425_gyangen_ratul";
$password = "GyanGen@26";

try {

    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "UPDATE support_tickets 
            SET archived = 1 
            WHERE created_at < NOW() - INTERVAL 90 DAY 
            AND archived = 0";

    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $count = $stmt->rowCount();

    echo "Success: $count tickets archived.";

    // Log file
    file_put_contents(
        __DIR__ . "/archive-log.txt",
        date("Y-m-d H:i:s") . " Archived: $count tickets\n",
        FILE_APPEND
    );

} catch (PDOException $e) {

    error_log("Cron Job Failed: " . $e->getMessage());

    file_put_contents(
        __DIR__ . "/archive-log.txt",
        date("Y-m-d H:i:s") . " ERROR: " . $e->getMessage() . "\n",
        FILE_APPEND
    );

}
?>