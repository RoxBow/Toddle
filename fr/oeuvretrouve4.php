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
    <link rel="stylesheet" href="../stylesheets/oeuvretrouve.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>
    <div class="container">
        <header>
            <img src="../img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="../img/toddle_text.png" alt="toddle" class="toddle_text">
            <div class="blockRight">
                <p class="name"><?php echo $_SESSION['pseudo']." - "; ?></p>
                <form name="chrono" class="chrono">
                    <input type="text" name="minute" id="min" readonly>min
                    <input type="text" name="seconde" id="sec" readonly>s
                </form>
            </div>
        </header>
        <section class="congratulate2">
            <p class="title">
              FÉLICITATIONS !
            </p>
            <hr>
            <p>
              Tu as retrouvé <i>New York City (1942)</i> de Piet Mondrian !
            </p>
            <br>
            <p>
              Tu vas utiliser tout ce que tu as vu auparavant pour le prochain defi:<br><br>
            </p>
            <p>
                - <span class="bold">Les fonctions</span>: <span class="rose">DessinerUneLigne();</span><br>
                - <span class="bold">Les paramètres</span>: DessinerUneLigne(<span class="rose">5</span>);<br>
                - <span class="bold">Les variables</span>: <span class="rose">var</span> nbLignes = <span class="rose">5</span> 
            </p>
            <br>
            <br>
            <p class="text-go rose">
              PRÊT À RELEVER LE DÉFI ? <br>
            </p>
            <br>
            <button class="go" id="oeuvretrouve4go">GO</button>
        </section>
        <?php
            include 'footer.php';
        ?>
    </div>
    
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/chrono.js"></script>
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
            
            $("#oeuvretrouve4go").click(function() {
                localStorage.setItem("seconde", $("#sec").val());
                localStorage.setItem("minute", $("#min").val());
                document.location.replace("oeuvre4.php");
            });
        });
    </script>
</body>
</html>