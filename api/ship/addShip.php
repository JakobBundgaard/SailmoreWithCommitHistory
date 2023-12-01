<?php

include_once "../utils/connection.php";

// Få indholdet af anmodningen som JSON-streng
$json_data = file_get_contents('php://input');

// Dekodér JSON-strengen til et associeret PHP-array
$data = json_decode($json_data, true);

// Hent data fra det dekoderede array
$shipName = $data['shipName'];
$shipModel = $data['shipModel'];
$shipDescription = $data['shipDescription'];
$shipCrew = $data['shipCrew'];
$shipAge = $data['shipYear'];

// Forbered SQL-forespørgsel til at indsætte dataene i databasen
$sql = "INSERT INTO ships (shipName, shipModel, shipDescription, shipCrew, shipYear)
VALUES ('$shipName', '$shipModel', '$shipDescription', '$shipCrew', '$shipYear')";

if ($conn->query($sql) === TRUE) {
    echo "Data blev indsat succesfuldt i databasen";
} else {
    echo "Fejl ved indsættelse af data: " . $conn->error;
}

// Luk forbindelse til databasen
$conn->close();
