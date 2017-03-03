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
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="../stylesheets/tuto.css" media="all">
</head>
<body>
    <div class="container">
        <header>
            <img src="../img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="../img/toddle_text.png" alt="toddle" class="toddle_text">
            <div class="blockRight">
                <p class="name"><?php echo $_SESSION['pseudo']; ?></p>
            </div>
        </header>
        <div class="entete">
            <p>Welcome <span><?php echo $_SESSION['pseudo']; ?></span> !</p>
            <p>Discover computer programming with Toddle within the Centre Georges Pompidou by solving the 5 given challenges.</p>
        </div>
        <section class="lessons">
            <div class="lesson up">
                <div class="content">
                    <p class="number">1</p>
                    <hr>
                    <p>Use the floor map entrusted to you by the app and start looking for the requested artwork !</p>
                    <img src="../img/tuto1.gif" alt="map" class="map">
                    <p>The room where you must go will be blinking on the map !</p>
                    <button class="understood">OK</button>
                </div>
            </div>
            <div class="lesson">
               <i class="fa fa-chevron-left" aria-hidden="true"></i>
                <div class="content">
                    <p class="number">2</p>
                    <hr>
                    <p>If you think you have found the artwork thanks to the clues and the map floor, click on the “Found” button and take a picture of the artwork !</p>
                    <div class="group_gif">
                        <img src="../img/tuto_f_en.gif" alt="trouvé"><img src="../img/tuto2_2.gif" alt="photo">
                    </div>
                    <p>We will let you know if you’re in the right place.</p>
                    <button class="understood">OK</button>
                </div>
            </div>
            <div class="lesson">
               <i class="fa fa-chevron-left" aria-hidden="true"></i>
                <div class="content">
                    <p class="number">3</p>
                    <hr>
                    <p>Once you’ve found the right artwork, be ready and prepare yourself to meet the corresponding challenge !</p>
                    <ul>
                      <li>
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-question fa-stack-1x fa-inverse" aria-hidden="true"></i>
                            </span>
                            <p>Use the clues</p>
                        </li>
                       <li>
                            <img src="../img/retour.png" alt="fleche">
                            <p>Cancel your errors</p>
                        </li>
                        <li>
                            <img src="../img/poubelleBlue.png" alt="poubelle">
                            <p>Reset from zero if it's a mess</p>
                        </li>
                        
                        
                        <li>
                            <img src="../img/valide.png" alt="coche">
                            <p>Valid if you have found</p>
                        </li>
                    </ul>
                    <button class="understood">OK</button>
                </div>
            </div>
            <div class="lesson">
               <i class="fa fa-chevron-left" aria-hidden="true"></i>
                <div class="content">
                    <p class="number spec">4</p>
                    <hr>
                    <div class="blocL4">
                        <span class="containerImg"><img src="../img/chrono.png" alt="chrono"></span>
                        <p>A timer will start at the beginning of the adventure !</p>
                    </div>
                    <div class="blocL4">
                        <span class="containerImg"><img src="../img/gift.png" alt="cadeau"></span>
                        <p>The three fastest amongst all the participants will be receiving a special gift !</p>
                    </div>
                    <button class="understood go">GO</button>
                </div>
            </div>
        </section>
    </div>
    
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/global.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            /* ### TUTO ### */
            $('.lesson', '.lessons').on("touchstart", function (e) {
                e.preventDefault();

                if ($(e.target).hasClass('understood')) {
                    // add "up" class to lesson selected and hide others
                    //$(e.target).parent().parent().toggleClass('up').next(".lesson").addClass("up");
                    $(this).toggleClass('up').next(".lesson").addClass("up");
                } else if ($(e.target).hasClass('fa-chevron-left')) {
                    // click on arrow left, open previous lesson
                    $(e.target).parent().toggleClass('up').prev(".lesson").addClass("up");
                }
                if ($(e.target).hasClass('understood') && $(e.target).parent().parent().is(':last-child')) {
                    location.href = "map.php"; // Redirect to map after making tuto
                }

                return false;
            });
        });
    </script>
</body>
</html>