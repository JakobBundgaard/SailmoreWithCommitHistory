<?php

include_once "../utils/connection.php";

// API-endepunkt for at hente bådoplysninger
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Her kan du ændre query'en til at passe til din databasestruktur og bådoplysninger
    $sql = "SELECT * FROM ships WHERE shipId = 8"; // Udskift med den ønskede båd-id eller relevant søgekriterie

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $boat_data = $result->fetch_assoc();
        header('Content-Type: application/json');
        echo json_encode($boat_data);
    } else {
        echo "Ingen båd fundet med det givne ID.";
    }
}

$conn->close();
?>