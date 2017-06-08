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
    <title>Toddle - Interactive game</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="../stylesheets/oeuvre55.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>
    <div class="container">
        <div id="win">
            <div class="content-win">
            <p class="title">
              FÉLICITATIONS !
            </p>
            <hr>
            <p class="text-win">
              Bravo <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
                Tu as réussi le dernier défi !
            </p>
            <br>
            <p>
                Tu as compris <span class="bold">les bases de la programmation informatique</span> !
            </p>
            <p>
                As-tu été assez rapide pour gagner une récompense ?<br><br>Découvre-le tout de suite !
            </p>
            <button class="continuer">RÉSULTAT</button>
            </div>
        </div>
        <div id="loose">
            <div class="content-loose">
            <p class="title">
              RECOMMENCE !
            </p>
            <hr>
            <p class="text-loose">
              Dommage <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
                Regarde attentivement l'oeuvre et ton code pour atteindre ton objectif !
            </p>
            <br>
            <button class="rechercher">Retour</button>
            </div>
        </div>
        <header>
            <img src="../img/toddle_form.png" alt="toddle" class="toddle_form" id="skip">
            <img src="../img/toddle_text.png" alt="toddle" class="toddle_text">
            <div class="blockRight">
                <p class="name"><?php echo $_SESSION['pseudo']." - "; ?></p>
                <form name="chrono" class="chrono">
                    <input type="text" name="minute" id="min">min
                    <input type="text" name="seconde" id="sec">s
                </form>
                <p class="defi">Défi <span id="nbrDefi"></span>/5</p>
           </div>
        </header>
        <section class="bleu">
            <img src="../img/h3.png" alt="Mouvement à faire" id="handclick"/>
            <h2 class="rose medium">DÉFI <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>Complète le code suivant pour recréer l'oeuvre de Newman. Glisse les étiquettes au bon endroit pour écrire ton code.</p>
                <br>
            </div>
            <div class="leftBloc">
                <div class="souscontainer">
                    <canvas id="myCanvas"></canvas>
                    <canvas id="myCanvas2"></canvas>
                </div>
            </div>
            <div class="rightBloc">
                <div class="code bleu">
                    <p>var couleurTriangle = <span class="cadre"><span id="noircache">noir</span></span>;</p>
                    <br>
                    <p><span class="cadre"><span id="varcache">var couleurLigne</span></span> = <span class="cadre"><span id="rougecache">rouge</span></span>;</p>
                    <br>
                    <p><span class="cadre"><span id="dtcache">dessinerTriangle</span></span>(<span class="cadre"><span id="ctcache">couleurTriangle</span></span>);</p>
                    <br>
                    <p><span class="cadre"><span id="dlcache">dessinerLigne</span></span>(couleurLigne);</p>
                </div>
                <div class="etiquettes">
                    <div class="etiq" id="rouge">rouge</div>
                    <div class="etiq" id="cligne"> var couleurLigne</div>
                    <div class="etiq" id="ctriangle">couleurTriangle</div>
                    <div class="etiq" id="dligne">dessinerLigne</div>
                    <div class="etiq" id="dtriangle">dessinerTriangle</div>
                    <div class="etiq" id="noir">noir</div>
                </div>

                <div class="bouton" id="valider">
                    <i class="fa fa-check fa-2x" aria-hidden="true"></i>
                </div>

                <div class="bouton" id="undo"><i class="fa fa-undo fa-2x" aria-hidden="true"></i></div>
            </div>
        </section>
        <?php
            include 'footer.php';
        ?>
    </div>

    <script type="text/javascript" src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/hammer-time.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/chrono.js"></script>
    <script src="../js/oeuvre55.js"></script>
</body>
</html>