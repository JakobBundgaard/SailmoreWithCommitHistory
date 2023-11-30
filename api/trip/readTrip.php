<?php 
include_once "../utils/connection.php";

    $sql = "SELECT * FROM TripsView;";
    $result = $conn->query($sql);

    while($row = $result->fetch_object()) {
        echo $row->tripId . "<br>";
        echo $row->startDate . "<br>";
        echo $row->endDate . "<br>";
        echo $row->startLocation . "<br>";
        echo $row->endLocation . "<br>";
        echo $row->totalCrewSpaces . "<br>";
        echo $row->tripDescription . "<br>";
        echo $row->shipId . "<br>";
        echo $row->shipName . "<br>";
        echo $row->shipCrew . "<br>";
        echo $row->captainId . "<br>";
        echo $row->captainName . "<br>";
        echo $row->imagePath . "<br>";
        echo "<br>";
    }

?>