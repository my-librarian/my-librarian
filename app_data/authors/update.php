<?php

include '../config.php';

$data = [];

foreach($_POST as $key => $value) {
  $data[$key] = mysqli_escape_string($link, $value);
}

$authorId = $data['id'];
$name = $data['name'];

$query = "UPDATE author SET `name` = '$name' WHERE id = '$authorId'";
mysqli_query($link, $query) or die(mysqli_error($link));

?>
