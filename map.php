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
                <button type="button" class="help_map"><i class="fa fa-question fa-lg" aria-hidden="true"></i></button>
            </div>
        </div>
        
        <!-- POPUP -->
        <div class="overlay">
          <div class="popup">
            <i class="fa fa-times fa-3x close" aria-hidden="true"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sit iste nobis inventore magni odit nihil! Voluptatem adipisci libero rerum minus, alias fuga in deleniti?</p>
          </div>
        </div>
        <!-- POPUP -->
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/resemble.js"></script>
    <script src="js/main.js"></script>
    <script src="js/map.js"></script>
    <script src="js/chrono.js"></script>
   
</body>
</html>