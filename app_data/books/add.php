<?php

include '../config.php';
include 'get-id.php';

$data = [];

foreach($_POST as $key => $value) {
  $data[$key] = mysqli_escape_string($link, $value);
}

$subjectId = getId('subject', $data['subject']);
$authorId = getId('author', $data['author']);

unset($data['subject']);
unset($data['author']);

$data['subjectid'] = $subjectId;

$columns = implode("`,`", array_keys($data));
$values = implode("','", array_values($data));

$query = "INSERT INTO book(`$columns`) VALUES('$values')";
mysqli_query($link, $query) or http_response_code(500);
$bookId = mysqli_insert_id($link);

$query = "INSERT INTO authorassoc(bookid, authorid) VALUES('$bookId', '$authorId')";
mysqli_query($link, $query) or http_response_code(500);

echo $bookId;

?>
