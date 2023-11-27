<?php

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// header('Content-Type: application/json');

include_once "../utils/connection.php";

echo " From crewSignup";

?>

<h2>Skills</h2>
    <?php 
        $sql = "SELECT * FROM skills;";
        $result = $conn->query($sql);

        while($row = $result->fetch_object()) {
            echo $row->skill . "<br>";
        }
    
    ?>