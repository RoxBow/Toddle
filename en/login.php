<?php

session_start();

// Connect to DB
try {
  $dns = 'mysql:host=localhost;dbname=applibd';
  $user = 'root';
  $pass = 'root';
  $bdd = new PDO( $dns, $user, $pass);
} catch ( Exception $e ) {
  echo $e->getMessage();
  die();
}

if(isset($_POST['min'], $_POST['sec'])){
    $requestTime = $bdd->prepare("UPDATE user SET min='".$_POST['min']."', sec='".$_POST['sec']."' WHERE pseudo='".$_SESSION['pseudo']."'");
    $requestTime->execute();
}

?>