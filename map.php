<?php 

if( !isset($_SESSION['pseudo']) ){
    header("location: index.php");
}

session_start();

echo "<h1>Mon pseudo est: ".$_SESSION['pseudo'];

?>

<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Application web</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheets/map.css" media="all">
</head>
<body>
    <div class="container">
        <img src="img/normal.svg" alt="map"/>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>