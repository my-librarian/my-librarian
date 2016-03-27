<?php

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

?>
