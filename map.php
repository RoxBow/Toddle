<?php

session_start();

if( !isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

?>

<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Toodle - Interactive game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheets/map.css" media="all">
</head>
<body>
    <div class="container">
       <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
            <p class="name"><?php echo $_SESSION['pseudo']; ?></p>
        </header>
        <img src="img/map.svg" alt="map" class="map"/>
        <div class="group_btn">
            <form>
                <div class="container_input">
                    <input type="file" id="picture" name="picture" value="TROUVÉ ?" accept="image/*" capture="camera" onchange="getFile()">
                    <label for="picture">TROUVÉ ?</label>
                    <img width="250" height="250" id="preview" src="http://placehold.it/250x250&text='click to upload'">
                </div>
            </form>
            <button class="help_map"><i class="fa fa-question fa-lg" aria-hidden="true"></i></button>
        </div>
        
        <!-- POPUP -->
        <div class="overlay">
          <div class="popup">
            <i class="fa fa-times close" aria-hidden="true"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sit iste nobis inventore magni odit nihil! Voluptatem adipisci libero rerum minus, alias fuga in deleniti?</p>
          </div>
        </div>
        <!-- POPUP -->
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/resemble.js"></script>
    <script src="js/main.js"></script>
</body>
</html>