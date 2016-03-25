<?php

include '../config.php';

$data = [];

foreach($_POST as $key => $value) {
  $data[$key] = mysqli_escape_string($link, $value);
}

function getId($table, $name) {

  global $link;

  $query = "SELECT id FROM $table WHERE name LIKE '$name'";
  $result = mysqli_query($link, $query) or http_response_code(500);
  $row = mysqli_fetch_assoc($result);

  if($row) {
    return $row['id'];
  } else {
    $query = "INSERT INTO $table(name) values('$name')";
    mysqli_query($link, $query) or http_response_code(500);
    return mysqli_insert_id($link);
  }

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
