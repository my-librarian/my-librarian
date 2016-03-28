<?php

include '../config.php';

$data = [];

foreach($_POST as $key => $value) {
  $data[$key] = mysqli_escape_string($link, $value);
}

$subjectId = $data['id'];
$name = $data['name'];

$query = "UPDATE subject SET `name` = '$name' WHERE id = '$subjectId'";
mysqli_query($link, $query) or die(mysqli_error($link));

?>
