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
    header("location: tuto.php"); // Redirect user when pseudo validate
}

?>