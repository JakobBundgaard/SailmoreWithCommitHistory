<?php
include_once "../utils/connection.php";

// Modtag og håndter anmodningen fra frontend
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);
    $shipId = $data['shipId']; // Få fat i shipId fra frontend

    // Slet båden fra databasen baseret på det modtagne ID
    $sql = "DELETE FROM ships WHERE shipId = $shipId";

    if ($conn->query($sql) === TRUE) {
        echo "Båden blev slettet fra databasen.";
    } else {
        echo "Fejl ved sletning af båden: " . $conn->error;
    }
}

// Luk forbindelsen til databasen
$conn->close();
?>
