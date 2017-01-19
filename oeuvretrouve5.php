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
    <script type="text/javascript" charset="utf-8" src="js/appframework.ui.min.js"></script>
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
              FÉLICITATIONS !
            </p>
            <hr>
            <p>
              Tu as retrouvé la dernière oeuvre du parcours ! "Du Jaune au Violet" a été réalisée par François Morellet.
            </p>
            <br>
            <p>
              Découvrons ensemble les <span class="rose">boucles</span>.
            </p>
            <p>
                Elles nous permettent d'effectuer une action plusieurs fois automatiquement.
            </p>
            <br>
            <p>
                <span class="bold">Exemple:</span> Je veux dessiner 6 souris. <br>
                <span class="rose">for(</span>&nbsp;&nbsp;var souris&nbsp;=&nbsp;0;&nbsp;&nbsp; souris&nbsp;<&nbsp;6; &nbsp;&nbsp; souris&nbsp;=&nbsp;souris+1&nbsp;&nbsp;){<br>
                <br>
                    <span class="fct">DessinerSouris();</span>
                <br>
                <span class="accolade">}</span>
                <br>
                <br>
            </p>
            <br>
            <p class="text-go rose">
              PRÊT &Agrave; RELEVER LE DÉFI ? <br>
            </p>
            <br>
            <button class="go" id="oeuvretrouve5go">GO</button>
        </section>
        <?php
            include 'footer.php';
        ?>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/global.js"></script>
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
            
            $("#oeuvretrouve5go").click(function() {
                location.href = "oeuvre5.php";
            });
        });
    </script>
</body>
</html>