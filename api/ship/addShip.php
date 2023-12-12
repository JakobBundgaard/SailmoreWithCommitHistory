<?php
session_start(); // Start the session
include_once "../utils/connection.php";


// Få indholdet af anmodningen som JSON-streng
$json_data = file_get_contents('php://input');

// Dekodér JSON-strengen til et associeret PHP-array
$data = json_decode($json_data, true);

// Hent data fra det dekoderede array
$shipId = $_SESSION["shipId"];
$captainId = $_SESSION["captainId"];
$shipName = isset($data['shipName']) ? $data['shipName'] : '';
$shipModel = isset($data['shipModel']) ? $data['shipModel'] : '';
$shipDescription = isset($data['shipDescription']) ? $data['shipDescription'] : '';
$shipCrew = isset($data['shipCrew']) ? $data['shipCrew'] : '';
$shipYear = isset($data['shipYear']) ? $data['shipYear'] : '';
$shipImage = "shipimage.jpg"; // Default ship image

// Prepare SQL query to insert data into the database
$sql = "INSERT INTO ships (shipName, shipModel, shipDescription, shipCrew, shipYear) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("sssis", $shipName, $shipModel, $shipDescription, $shipCrew, $shipYear);

    if ($stmt->execute()) {
        $last_id = $conn->insert_id;
        $_SESSION['shipId'] = $last_id; // Add shipId to the session
        echo json_encode(array("shipId" => $last_id)); // Return the newly inserted ship's ID
    } else {
        echo "Fejl ved indsættelse af data: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Fejl ved forberedelse af SQL: " . $conn->error;
}

$sql = "INSERT INTO images (shipId, imagePath) VALUES (?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("is", $shipId, $shipImage);

    if ($stmt->execute()) {
        echo "Bådens billede blev tilføjet til databasen.";
    } else {
        echo "Fejl ved indsættelse af billede: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Fejl ved forberedelse af SQL: " . $conn->error;
}

$sql = "UPDATE captain SET shipId = ? WHERE captainId = ?";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("ii", $shipId, $captainId);

    if ($stmt->execute()) {
        echo "Bådens kaptajn blev tilføjet til databasen.";
    } else {
        echo "Fejl ved opdatering af kaptajn: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Fejl ved forberedelse af SQL: " . $conn->error;
}

// Luk forbindelse til databasen
$conn->close();
?>
