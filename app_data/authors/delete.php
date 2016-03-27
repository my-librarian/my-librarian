<?php

include '../config.php';

$authorId = $_POST['id'];

$query = "DELETE FROM author WHERE id = '$authorId'";
mysqli_query($link, $query) or http_response_code(500);

$query = "DELETE FROM authorassoc WHERE authorid = '$authorId'";
mysqli_query($link, $query) or http_response_code(500);

?>
