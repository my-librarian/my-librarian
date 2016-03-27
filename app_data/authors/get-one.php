<?php

include '../config.php';

$id = $_GET['id'];

$query = "SELECT * FROM author WHERE id = '$id'";
$result = mysqli_query($link, $query) or http_response_code(500);
$row = mysqli_fetch_assoc($result);

echo json_encode($row);

?>
