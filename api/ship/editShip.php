<?php
include_once "../utils/connection.php";

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

echo "Modtaget data fra frontend: ";
print_r($data);

$shipId = $data['shipId'] ?? null; // Hent shipId fra JSON-dataen

if ($data !== null && isset($data['shipName']) && isset($data['shipModel']) && isset($data['shipDescription']) && isset($data['shipCrew']) && isset($data['shipYear'])) {
    $shipName = $data['shipName'];
    $shipModel = $data['shipModel'];
    $shipDescription = $data['shipDescription'];
    $shipCrew = $data['shipCrew'];
    $shipYear = $data['shipYear'];

    // Brug forberedte udsagn
    $sql = "UPDATE ships SET shipName=?, shipModel=?, shipDescription=?, shipCrew=?, shipYear=? WHERE shipId=?";
    $stmt = $conn->prepare($sql);

    // Bind parametere og udfør udsagnet
    $stmt->bind_param("sssssi", $shipName, $shipModel, $shipDescription, $shipCrew, $shipYear, $shipId);
 
} else {
    echo "Fejl: Manglende eller ugyldige data sendt til editShip.php";
    exit(); // Stop scriptet her, da der ikke er gyldige data
}

if (isset($sql) && !empty($sql)) { // Kontroller om $sql er sat og ikke er tom
    if ($conn->query($sql) === TRUE) {
        echo "Opdateret informationen for skibet: $shipName";
    } else {
        echo "Fejl ved opdatering: " . $conn->error;
    }
} else {
    echo "Fejl: Tom forespørgsel";
}

$conn->close();
?>
