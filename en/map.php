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
    <link rel="stylesheet" href="../stylesheets/map.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>

    <div class="container">
        <div id="overlayChargement">
            <div class="cs-loader-inner">
                <label> ●</label>
                <label> ●</label>
                <label> ●</label>
                <label> ●</label>
                <label> ●</label>
                <label> ●</label>
            </div>
            <div class="analyse">
                <p>ANALYZING</p>
            </div>
        </div>
       <header>
            <img src="../img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="../img/toddle_text.png" alt="toddle" class="toddle_text">
            <div class="blockRight">
                <p class="name"><?php echo $_SESSION['pseudo']." - "; ?></p>
                <form name="chrono" class="chrono">
                    <input type="text" name="minute" id="min" readonly>min
                    <input type="text" name="seconde" id="sec" readonly>s
                </form>
                <p class="defi">Challenge <span id="nbrDefi"></span>/5</p>
            </div>
        </header>
        <div class="content">
            <object data="../img/map.svg" type="image/svg+xml" id="map"></object> <!-- Import map -->
            <div class="group_btn">
                <form>
                    <div class="container_input">
                        <input type="file" id="picture" name="picture" value="TROUVÉ ?" accept="image/*" capture="camera" onchange="getFile()">
                        <label for="picture">FOUND ?</label>
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
        <?php
            include 'footer.php';
        ?>
        
        <!-- POPUP -->
        <div class="overlay" id="indiceBloc">
          <div class="popup2">
            <i class="fa fa-times close" aria-hidden="true" id="close"></i>
            <div>
                <h3 class="sous-titre2">CLUE</h3>
                <span id="indiceMap"></span>
            </div>
          </div>
        </div>
        <!-- POPUP -->
    </div>
    
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/map.js"></script>
    <script src="../js/chrono.js"></script>
    <script src="../js/resemble.js"></script>
    <script>
        console.log("Level: "+localStorage.getItem("levelUser"));
        console.log("ROOM: "+currentRoom);
        console.log("OEUVRE: "+currentArt);
    </script>
</body>
</html>