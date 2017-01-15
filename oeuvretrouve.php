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
              Tu as trouvé l'oeuvre indiquée ! Il s'agit d'&nbsp;&quot;IKB3 Monochrome Bleu"<br> d'Yves Klein.
            </p>
            <br>
            <p>
              Tu vas découvrir un principipe fondamental de la programmation:&nbsp;<span class="rose">l'Algorithmique</span>. 
            </p>
            <br>
            <p>
                L'algorithmique définit des règles dans le but d'effectuer une action. Ces règles portent le nom de l'action que l'on veut effectuer. Elles s'écrivent d'une manière particulière.
            </p>
            <br>
            <p>
                <span class="bold">Exemple:</span> Je veux dessiner un rond. En algorithmique on va écrire ce que l'on veut faire, suivi de parenthèses:
            <br>
            <span class="fonction bold">DessinerUnRond</span><span class="parentheses bold">()</span>
            </p>
            <br>
            <p>
                Si notre action est composé de plusieurs mots, on ne met pas d'espace entre les mots et chaque nouveau mot est écrit avec une majuscule.
            </p>
            <br>
            <p class="text-go rose">
              PR&Ecirc;T &Agrave; RELEVER LE D&Eacute;FI ? <br>
            </p>
            <br>
            <a href="oeuvre.php"><button class="go">GO</button></a>
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