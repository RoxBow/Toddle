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
    <link rel="stylesheet" href="stylesheets/oeuvretrouve.css" media="all">
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
        <section class="congratulate">
            <p class="title">
              F&#201;LICITATIONS !
            </p>
            <hr>
            <p>
              Tu as trouvé cette oeuvre ! "4 DOUBLES TRAMES, TRAITS MINCES 0°- 22°5 - 45°- 67°5" est celle de François Morellet.
            </p>
            <br>
            <p>
              D&eacute;couvrons ensemble les <span class="rose">variables</span>.
            </p>
            <p>
                Ce sont des "boites" où l'on peut mettre des chiffres par exemple.
            </p>
            <br>
            <p>
                <span class="bold">Exemple:</span> Je veux dessiner 6 chats. Je mets le chiffre "6" dans une boite se nommant "nbChats" comme suivant:
                <br>
                <br>
                <span class="rose">var</span> nbChats = 6;
                <br>
                <br>
                <!-- "<span class="rose">var</span>" nous disant que ce qui suit est une boite. -->
                Dessinons ces chats: <span class="bold">DessinerUnChat(<span class="rose">nbChats</span>);</span>
                <br>
            </p>
            <br>
            <p class="text-go rose">
              PR&Ecirc;T &Agrave; RELEVER LE D&Eacute;FI ? <br>
            </p>
            <br>
            <a href="oeuvre3.php"><button class="go">GO</button></a>
        </section>
        <?php
            include 'footer.php';
        ?>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/chrono.js"></script>
    <script>
        /* #####    CHRONO      ##### */

        // Update time script
        sec = localSec;
        min = localMin;

        // When page is left
        $(window).bind('beforeunload',function(){
            localStorage.setItem("seconde", $("#sec").val() );
            localStorage.setItem("minute", $("#min").val() );
        });

        $(document).ready(function() {
            /* ### CHRONO ### */
            $("#sec").val(localSec);
            $("#min").val(localMin);
            chrono();
        });
    </script>
</body>
</html>