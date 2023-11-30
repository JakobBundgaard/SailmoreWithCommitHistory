<?php 
include_once "../utils/connection.php";

$sql = "SELECT * FROM TripsView;";
$result = $conn->query($sql);

$data = array();

while($row = $result->fetch_object()) {
    $trip = array(
        "tripId" => $row->tripId,
        "startDate" => $row->startDate,
        "endDate" => $row->endDate,
        "startLocation" => $row->startLocation,
        "endLocation" => $row->endLocation,
        "totalCrewSpaces" => $row->totalCrewSpaces,
        "tripDescription" => $row->tripDescription,
        "shipId" => $row->shipId,
        "shipName" => $row->shipName,
        "shipCrew" => $row->shipCrew,
        "captainId" => $row->captainId,
        "captainName" => $row->captainName,
        "imagePath" => $row->imagePath
    );
    array_push($data, $trip);
}

echo json_encode($data);
?>