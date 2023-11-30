<?php

include_once "../utils/connection.php";

function signUpCrew($conn, $name, $email, $password, $passwordRepeat, $nationality, $skill, $bio, $gender, $age, $experience) {
    $response = array();

    // Fetch gender options from the database
    $genderOptions = getGenderOptions($conn);

    //Validate the input
    if (empty($name) || empty($email) || empty($password) || empty($passwordRepeat) || empty($nationality) || empty($skill) || empty($bio) || empty($gender) || empty($age)) {
        $response['error'] = "All fields are required.";
        return $response;
    }

    if ($password !== $passwordRepeat) {
        $response['error'] = "Passwords do not match.";
        return $response;
    }

    // Check if the email already exists in the database
    if (isEmailExists($conn, $email)) {
        $response['error'] = "Email already exists.";
        return $response;
    }

    // You may want to add more validation logic as needed.

    // Hash the password before storing it in the database
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into the crew table
    $sql = "INSERT INTO crew (crewName, crewAge, crewPassword, crewEmail, crewGender, crewNationality, crewDescription, crewExperience, crewSkill)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sissiissi", $name, $age, $hashedPassword, $email, $gender, $nationality, $bio, $experience, $skill);

    if ($stmt->execute()) {
        $response['success'] = "User signed up successfully.";
    } else {
        $response['error'] = "Error signing up user: " . $stmt->error;
    }

    $stmt->close();

    return $response;
}

function loginCrew($conn, $email, $password) {
    $response = array();

    // Check if the email exists in the database
    if (!isEmailExists($conn, $email)) {
        $response['error'] = "Email does not exist.";
        return $response;
    }

    // Fetch crew data based on the email
    $crewData = getCrewDataByEmail($conn, $email);

    // Verify the password
    if (password_verify($password, $crewData['crewPassword'])) {
        $response['success'] = "User logged in successfully.";
        // You can include crew data in the response if needed
        $response['crewData'] = $crewData;
    } else {
        $response['error'] = "Incorrect password.";
    }

    return $response;
}

function getCrewDataByEmail($conn, $email) {
    $sql = "SELECT * FROM crew WHERE crewEmail = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $crewData = $result->fetch_assoc();
    $stmt->close();

    return $crewData;
}


function getGenderOptions($conn) {
    $sql = "SELECT * FROM gender";
    $result = $conn->query($sql);

    $genders = [];
    while ($row = $result->fetch_assoc()) {
        $genders[] = $row['gender'];
    }

    return $genders;
}

function isEmailExists($conn, $email) {
    $sql = "SELECT COUNT(*) as count FROM crew WHERE crewEmail = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $count = $row['count'];
    $stmt->close();

    return $count > 0;
}

?>
