<?php

include '../config.php';

if(isset($_GET['id'])) {
  $id = $_GET['id'];
} else {
  http_response_code(404);
  die;
}

$query = "SELECT b.*, a.name as author, s.name as subject ".
         "FROM book b ".
         "JOIN subject s ON b.subjectid = s.id ".
         "JOIN authorassoc aa ON b.id = aa.bookid ".
         "JOIN author a ON a.id = aa.authorid ".
         "WHERE b.id = '$id'";

$result = mysqli_query($link, $query) or die(mysqli_error($link));

$row = mysqli_fetch_assoc($result);

if($row) {
  echo json_encode($row);
} else {
  http_response_code(404);
}

?>
