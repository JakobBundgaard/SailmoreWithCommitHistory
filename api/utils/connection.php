<?php 
    
    $mySQL = new mysqli($server, $user, $password, $database);

    if(!$mySQL) {
        die("Connection failed: " . mysqli_connect_error());
    }else {
    echo "Success";
    }
?>