<?php

include '../config.php';

$query = "SELECT * FROM subject";
$result = mysqli_query($link, $query) or http_response_code(500);
$rows = [];

while($row = mysqli_fetch_assoc($result)) {
  array_push($rows, $row);
}

echo json_encode($rows);

?>
