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
        <section class="congratulate">
            <p class="title">
              WELL DONE !
            </p>
            <hr>
            <p>
              You found "<i>Composition n° 24</i>" (1926) by Friedrich Vordemberge-Gildewart.
            </p>
            <br>
            <p>
              Let’s learn together what <span class="bold rose">variables</span> are.
            </p>
            <p>
                To put it simple, these are some kind of <span class="bold">"boxes"</span> where you can put <span class="bold">data</span> (numbers, words ...) necessary.
            </p>
            <br>
            <p>
                <span class="bold">Example:</span> I need to draw 6 cats. I put the number "6" in a box named "nbCats" just as follows:
                <br>
                <br>
                <span class="rose">var</span> nbCats = 6;
                <br>
                <br>
                Let’s draw some cats: <span class="bold">DrawACat(<span class="rose">nbCats</span>);</span>
                <br>
            </p>
            <br>
            <p class="text-go rose">
              READY TO MEET THE CHALLENGE ? <br>
            </p>
            <br>
            <button class="go" id="oeuvretrouve3go">GO</button>
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
            
            $("#oeuvretrouve3go").on(""+touchOrClick()+"", function() {
                localStorage.setItem("seconde", $("#sec").val());
                localStorage.setItem("minute", $("#min").val());
                document.location.replace("oeuvre33.php");
            });
        });
    </script>
</body>
</html>