<?php

include '../config.php';

$name = mysqli_escape_string($link, $_POST['name']);

$query = "INSERT INTO author(`name`) VALUES('$name')";
mysqli_query($link, $query) or http_response_code(500);
echo mysqli_insert_id($link);

?>
