<?php

include '../config.php';

$query = 'DELETE FROM book WHERE id = "'.$_POST['id'].'"';
mysqli_query($link, $query) or http_response_code(500);

$query = 'DELETE FROM authorassoc WHERE bookid = "'.$_POST['id'].'"';
mysqli_query($link, $query) or http_response_code(500);

?>
