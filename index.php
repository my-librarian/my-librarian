<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'views/include/header.php';

// set default view
$view = 'home';

// if there's a view given and its not empty
// get it as $view
if(isset($_GET['view']) && $_GET['view'] != '') {

  // receive from htaccess
  $view = $_GET['view'];
}

$view = 'views/'.$view.'.php';

// try to open the $view from views folder,
// else show 404
if(file_exists($view)) {
  include $view;
} else {
  include 'views/errors/404.php';
}

include 'views/include/footer.php';
?>
