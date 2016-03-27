<?php

include '../config.php';
include 'get-id.php';

$data = [];

foreach($_POST as $key => $value) {
  $data[$key] = mysqli_escape_string($link, $value);
}

$subjectId = getId('subject', $data['subject']);
$authorId = getId('author', $data['author']);
$bookid = $data['id'];

unset($data['subject']);
unset($data['author']);
unset($data['id']);

$data['subjectid'] = $subjectId;

$fields = [];
foreach($data as $key=> $value) {
  array_push($fields, "`$key`='$value'");
}

$query = "SELECT authorid FROM authorassoc WHERE bookid = '$bookid'";
$result = mysqli_query($link, $query) or http_response_code(500);
$oldAuthorId = mysqli_fetch_assoc($result)['authorid'];

if($authorId != $oldAuthorId) {
  $query = "UPDATE authorassoc ".
           "SET authorid = '".$authorId."' ".
           "WHERE bookid = '$bookid' AND authorid = '".$oldAuthorId."'";
  mysqli_query($link, $query) or http_response_code(502);
}

$fields = implode(', ', $fields);
$query = "UPDATE book SET $fields WHERE id = '$bookid'";
mysqli_query($link, $query) or die(mysqli_error($link));
