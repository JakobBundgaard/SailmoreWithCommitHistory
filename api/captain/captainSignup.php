<?php
    // Includes
    include_once '../utils/connection.php';

    // Get raw posted data
    
    $data = json_decode(file_get_contents("php://input"));
    if ($data == null) {
        $error = " No data received from client";
        //echo $error;
        return;
    }
    
    $email = $data->email;
    $password = $data->password;
    $name = $data->name;
    $age = $data->age;
    $gender = 0;
    $nationality = 1;
    $bio = $data->bio;

    // Prepare statement
    // $stmt = $conn->prepare("INSERT INTO captain (captainEmail, captainPassword, captainName, captainAge, captainGender, captainNationality, captainDescription, captainExperience, shipId) 
    // VALUES (?, ?, ?, ?, ?, ?, ?, null, 0)");
    // $stmt->bind_param("ssssiss", $email, $password, $name, $age, $gender, $nationality, $bio, "none", null);
    
    // if ($stmt->execute()) {
    //     echo "New record created successfully";
    // } else {
    //     echo "Error: " . $stmt->error;
    // }
    
    // $stmt->close();
    exit();
?>