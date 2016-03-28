<?php

include '../config.php';

$subjectId = $_POST['id'];

$query = "DELETE FROM subject WHERE id = '$subjectId'";
mysqli_query($link, $query) or http_response_code(500);

?>
