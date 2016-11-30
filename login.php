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

if(isset($_POST['pseudo'])){
    $_SESSION['pseudo'] = $_POST['pseudo'];
    $request = $bdd->prepare("INSERT INTO user (pseudo) VALUES ('".$_SESSION['pseudo']."')"); // prepare command 
    $request->execute(); // Add pseudo to DB
}
else if(isset($_POST['mail'])){
    $requestMail = $bdd->prepare("UPDATE user SET mail='".$_POST['mail']."' WHERE pseudo='".$_SESSION['pseudo']."'");
    $requestMail->execute();
}
else if(isset($_POST['min'], $_POST['sec'])){
    $requestTime = $bdd->prepare("UPDATE user SET min='".$_POST['min']."', sec='".$_POST['sec']."' WHERE pseudo='".$_SESSION['pseudo']."'");
    $requestTime->execute();
}

?>