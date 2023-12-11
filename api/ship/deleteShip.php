<?php
include_once "../utils/connection.php";

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);
    $shipId = $data['shipId'];

    // Delete the captains that reference the ship
    $sql = "DELETE FROM captain WHERE shipId = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $shipId);
        $stmt->execute();
        $stmt->close();
    } else {
        echo "Fejl ved forberedelse af SQL: " . $conn->error;
    }

    // Delete the ship
    $sql = "DELETE FROM ships WHERE shipId = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $shipId);

        if ($stmt->execute()) {
            echo "Båden blev slettet fra databasen.";
        } else {
            echo "Fejl ved sletning af båden: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Fejl ved forberedelse af SQL: " . $conn->error;
    }
}

$conn->close();
?>