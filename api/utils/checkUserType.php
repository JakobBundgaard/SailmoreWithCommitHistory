<?php

session_start();

// Include your connection file
require_once "../utils/connection.php";

// Check if the captainId is set in the session
if (isset($_SESSION['captainId'])) {
    // User is logged in as a captain
    $response['userType'] = 'captain';
} else if (isset($_SESSION['crewId'])) {
    // User is logged in as a crew member
    $response['userType'] = 'crew';
} else {
    // User is not logged in
    $response['userType'] = 'guest';
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
