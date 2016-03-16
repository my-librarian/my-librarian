<?php

include '../config.php';

$query = 'DELETE FROM book WHERE id = "'.$_POST['id'].'"';
mysqli_query($link, $query) or http_response_code(500);

?>
