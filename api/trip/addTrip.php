<?php
include_once "../utils/connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $shipId = $_POST["shipId"];
    $startDate = $_POST["startDate"];
    $endDate = $_POST["endDate"];
    $startLocation = $_POST["startLocation"];
    $endLocation = $_POST["endLocation"];
    $totalCrewSpaces = $_POST["totalCrewSpaces"];
    $tripDescription = $_POST["tripDescription"];

    $query = "INSERT INTO trips (shipId, startDate, endDate, startLocation, endLocation, totalCrewSpaces, tripDescription) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "issssis", $shipId, $startDate, $endDate, $startLocation, $endLocation, $totalCrewSpaces, $tripDescription);
    $result = mysqli_stmt_execute($stmt);
    if (!$result) {
        http_response_code(500);
        echo json_encode(["error" => 'Query failed: ' . mysqli_error($conn)]);
        exit();
    }
};

?>