<?php

include '../config.php';

$where = '';
if(isset($_GET['term'])) {
  $where = "WHERE name LIKE '%".$_GET['term']."%'";
}

$query = "SELECT name FROM subject $where";
$result = mysqli_query($link, $query);
$rows = [];

while($row = mysqli_fetch_assoc($result)) {
  array_push($rows, $row['name']);
}

echo json_encode($rows);

?>
