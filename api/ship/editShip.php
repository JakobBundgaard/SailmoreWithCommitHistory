<?php

include_once "../utils/connection.php";

// Få indholdet af anmodningen som JSON-streng
$json_data = file_get_contents('php://input');

// Dekodér JSON-strengen til et associeret PHP-array
$data = json_decode($json_data, true);
var_dump($data);

// Modtag data fra POST-anmodning
$shipName = $data['shipName'];
$shipModel = $data['shipModel'];
$shipDescription = $data['shipDescription'];
$shipCrew = $data['shipCrew'];
$shipYear = $data['shipYear'];

// Forbered og udfør SQL-opdateringsforespørgslen
$sql = "UPDATE ships SET shipName='$shipName', shipModel='$shipModel', shipDescription='$shipDescription', shipCrew='$shipCrew', shipYear='$shipYear' WHERE shipId='$shipId'";


if ($conn->query($sql) === TRUE) {
    echo "Opdateret informationen for skibet: $shipName";
} else {
    echo "Fejl ved opdatering: " . $conn->error;
}

// Luk forbindelse til databasen
$conn->close();
?>
