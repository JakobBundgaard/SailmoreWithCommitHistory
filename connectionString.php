<?php 
    $server = "mysql36.unoeuro.com";
    $user = "stefanoskl_dk";
    $password = "bDmcpFwh9azkyxGfBdn4";
    $database = "stefanoskl_dk_db";

    $mySQL = new mysqli($server, $user, $password, $database);

    if(!$mySQL) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>