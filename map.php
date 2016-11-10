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
           <form action="">
                <div class="container_input">
                    <input type="file" class="find" id="picture" name="picture" value="TROUVÉ ?" accept="image/*" capture="camera">
                    <label for="picture">TROUVÉ ?</label>
                </div>
                <button class="help_map" id="ok"><i class="fa fa-question fa-lg" aria-hidden="true"></i></button>
            </form>
        </div>
        
        <!-- POPUP -->
        <div class="overlay">
          <div class="popup">
            <span class="close">x</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
        <!-- POPUP -->
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>