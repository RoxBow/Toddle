<?php

session_start();

if(!isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

?>

<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Toodle - Interactive game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheets/end.css" media="all">
</head>
<body>
    <div class="container">
        <div class="content">
            <p>Merci d'avoir joué<br> et appris avec <img src="img/toddle_text.png" id="reset" alt="toddle"></p>
            <hr>
            <p class="render">Remets la tablette au point de départ</p>
        </div>
    </div>
  
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>