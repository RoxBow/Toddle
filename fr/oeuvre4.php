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
    <title>Jaune au violet</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="../stylesheets/mondrian.css" media="all">
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
              Tu as réussi le quatrième défi !
            </p>
            <br>
            <p>
              Tu as donc compris <span class="bold">les variables</span> et comment les utiliser comme <span class="bold">paramètres</span> d'une <span class="bold">fonction</span>. <br><br>
              Découvre ton dernier défi !
            </p>
            <button class="continuer">DÉFI SUIVANT</button>
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
                Regarde attentivement l'oeuvre et recommence !
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
            <h2 class="rose six">DÉFI <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>Recréé l'oeuvre de Piet Mondrian en donnant des arguments à la fonction suivante: DessinerUneLigne(couleur, sens, nombre).</p>
                <br>
            </div>
            <div class="leftBloc">
                <div class="souscontainer">
                    <canvas id="myCanvas"></canvas>
                    <canvas id="myCanvas2"></canvas>
                    <canvas id="myCanvas3"></canvas>
                    <canvas id="myCanvas4"></canvas>
                    <canvas id="myCanvas5"></canvas>
                    <canvas id="myCanvas6"></canvas>
                </div>
            </div>
            <div class="rightBloc">
                <div class="code bleu">
                    <p>CréerCadre();</p>
                </div>
                <div class="selection">
                    <div class="couleur">
                        <p>Couleur</p>
                        <div class="choix">
                        <span class="selecteurs" id="coumoins">
                        &lsaquo;
                        </span>
                        <span class="valeurs" id="couleur"></span>
                        <span class="selecteurs" id="couplus">&rsaquo;</span>
                        </div>
                    </div>
                    <div class="orientationLigne">
                        <p>Orientation</p>
                        <div class="choix">
                        <span class="selecteurs" id="orimoins">
                        &lsaquo;
                        </span>
                        <span class="valeurs" id="orientation"></span>
                        <span class="selecteurs" id="oriplus">&rsaquo;</span>
                        </div>
                    </div>
                    <div class="nombre">
                        <p>Nombre</p>
                        <div class="choix">
                        <span class="selecteurs" id="nbmoins">
                        &lsaquo;
                        </span>
                        <span class="valeurs" id="nombre"></span>
                        <span class="selecteurs" id="nbplus">&rsaquo;</span>
                        </div>
                    </div>
                </div>
                <div class="controles">
                    <div class="bouton2" id="poubelle">
                        <img src="../img/poubelle.png" alt="Objectif"/>
                    </div>
                    <div id="ajouter">
                        <button class="bva">AJOUTER</button>
                    </div>
                    <div class="bouton" id="valider">
                        <i class="fa fa-check fa-2x" aria-hidden="true"></i></div>
                    </div>
            </div>
        </section>
        <?php
            include 'footer.php';
        ?>
    </div>

    <script type="text/javascript" src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/chrono.js"></script>
    <script src="../js/mondrian.js"></script>
</body>
</html>