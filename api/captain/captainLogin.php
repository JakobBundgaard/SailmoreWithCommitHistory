<?php

require_once "../utils/connection.php";

$data = json_decode(file_get_contents('php://input'), true);
$captainEmail = $data['captainEmail'];
$captainPassword = $data['captainPassword'];

$sql = "SELECT captainEmail, captainPassword FROM captain WHERE captainEmail = '$captainEmail' AND captainPassword = '$captainPassword'";
$result = mysqli_query($conn, $sql);



echo json_encode(mysqli_fetch_object($result));

?>