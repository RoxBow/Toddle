<?php

session_start();

if(!isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

/*
### Chrono mode PHP ###
if(empty($_SESSION['start'])) {
    $_SESSION['start'] = date("h:i:s");
}
*/

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
    <?php
        include 'credits.php';
    ?>
    <div class="container">
       <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
            <div class="blockRight">
                <p class="name"><?php echo $_SESSION['pseudo']." - "; ?></p>
                <form name="chrono" class="chrono">
                    <input type="text" name="minute" id="min" readonly>min
                    <input type="text" name="seconde" id="sec" readonly>s
                </form>
            </div>
        </header>
        <div class="content">
            <object data="img/map.svg" type="image/svg+xml" id="map"></object> <!-- Import map -->
            <div class="group_btn">
                <form>
                    <div class="container_input">
                        <input type="file" id="picture" name="picture" value="TROUVÉ ?" accept="image/*" capture="camera" onchange="getFile()">
                        <label for="picture">TROUVÉ ?</label>
                    </div>
                </form>
                <button id="indice" type="button" class="help_map">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-question fa-stack-1x fa-inverse" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
        </div>
        <footer>
            <img src="img/logo_pompidou.png" alt="pompidou">
            <img src="img/logo_gris_avec.png" alt="avec">
        </footer>
        
        <!-- POPUP -->
        <div class="overlay">
          <div class="popup2">
            <i class="fa fa-times close" aria-hidden="true" id="close"></i>
            <p>
                <span class="sous-titre2">Indice 1</span>
                La première oeuvre devant laquelle tu dois te rendre, est une oeuvre monochrome d'un artiste français du XXe siècle. Il est connu pour son travail autour d'une couleur particulière.
            </p>
          </div>
        </div>
        <!-- POPUP -->
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/global.js"></script>
    <script src="js/map.js"></script>
    <script src="js/chrono.js"></script>
    <script src="js/resemble.js"></script>
    <script>
        console.log("Level: "+localStorage.getItem("levelUser"));
        console.log("ROOM: "+currentRoom);
        console.log("OEUVRE: "+currentArt);
    </script>
</body>
</html>