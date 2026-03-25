<?php
header('Content-type: application/json');
$username = $_POST['username'] ?? '';

$taken_usernames = ['admin', 'root', 'user123'];

if (in_array(strtolower($username), $taken_usernames)) {
    $response = [
        "available" => false,
        "message" => "Sorry, that name is already taken"
    ];
} else {
    $response = [
        "available" => true,
        "message" => "Username is available!"
    ];
}

echo json_encode($response);
?>