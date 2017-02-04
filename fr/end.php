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
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <script type="text/javascript" charset="utf-8" src="../js/appframework.ui.min.js"></script>
    <link rel="stylesheet" href="../stylesheets/end.css" media="all">
</head>
<body>
    <div class="container">
        <div class="content">
            <p>Merci d'avoir participé<br> à l'expérience <img src="../img/toddle_text.png" id="reset" alt="toddle"> !</p>
            <hr>
            <p class="render">Remets la tablette <br> au point de départ</p>
        </div>
    </div>
  
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/global.js"></script>
    <script>
        $(document).ready(function () {
            var countClick = 0;
            
            // Two tap on toddle (end.php) -> Reset app
            $("#reset",".content").click(function () {
                countClick += 1;
                if (countClick == 2) {
                    location.href = "../index.php";
                }
            });
        });
    </script>
</body>
</html>