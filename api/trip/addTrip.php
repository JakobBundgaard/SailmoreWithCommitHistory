<?php
include_once "../utils/connection.php";

echo "Add Trip";

?>

<h2>Trip</h2>
    <?php 
        $sql = "SELECT * FROM ships;";
        $result = $conn->query($sql);

        while($row = $result->fetch_object()) {
            echo $row->shipName . "<br>";
            echo $row->shipCrew . "<br>";
            echo $row->shipDescription . "<br>";
            echo $row->shipModel . "<br>";
            echo $row->shipYear . "<br>";
            echo "<br>";
        }
    
    ?>
