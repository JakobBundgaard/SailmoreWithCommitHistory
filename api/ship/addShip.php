<?php
session_start(); // Start the session
include_once "../utils/connection.php";

// Få indholdet af anmodningen som JSON-streng
$json_data = file_get_contents('php://input');

// Dekodér JSON-strengen til et associeret PHP-array
$data = json_decode($json_data, true);

// Hent data fra det dekoderede array
$shipName = isset($data['shipName']) ? $data['shipName'] : '';
$shipModel = isset($data['shipModel']) ? $data['shipModel'] : '';
$shipDescription = isset($data['shipDescription']) ? $data['shipDescription'] : '';
$shipCrew = isset($data['shipCrew']) ? $data['shipCrew'] : '';
$shipYear = isset($data['shipYear']) ? $data['shipYear'] : '';

// Forbered SQL-forespørgsel til at indsætte dataene i databasen
$sql = "INSERT INTO ships (shipName, shipModel, shipDescription, shipCrew, shipYear)
VALUES ('$shipName', '$shipModel', '$shipDescription', '$shipCrew', '$shipYear')";

if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    $_SESSION['shipId'] = $conn->insert_id; // Add shipId to the session
    echo json_encode(array("shipId" => $last_id)); // Return the newly inserted ship's ID
} else {
    echo "Fejl ved indsættelse af data: " . $conn->error;
}

// Luk forbindelse til databasen
$conn->close();
?>
