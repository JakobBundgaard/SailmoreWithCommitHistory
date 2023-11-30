<?php 
include_once "../utils/connection.php";

$body = json_decode(file_get_contents('php://input'), true);
$preview = isset($body['preview']) ? $body['preview'] : false;


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
        "shipId" => $row->shipId,
        "shipName" => $row->shipName,
        "captainId" => $row->captainId,
        "imagePath" => $row->imagePath
    );

    if (!$preview) {
        $trip["totalCrewSpaces"] = $row->totalCrewSpaces;
        $trip["tripDescription"] = $row->tripDescription;
        $trip["shipCrew"] = $row->shipCrew;
        $trip["captainName"] = $row->captainName;
    }

    array_push($data, $trip);
}

echo json_encode($data);
?>