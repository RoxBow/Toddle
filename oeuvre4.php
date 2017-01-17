<?php 

session_start();

if( !isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

/*
### Chrono mode PHP ###
$start = new DateTime($_SESSION['start']); // put old date in date object

$_SESSION['end'] = date("h:i:s"); // get actual date
$end = new DateTime($_SESSION['end']); // put actual date in date object

$interval = $start->diff($end); // put diff date in interval
print $interval->format("Tu as mis %H:%I:%S"); // display diff between date
*/

?>

<!doctype html>
<html class="no-js" lang="fr">
<head>
        <meta charset="UTF-8">
        <title>Jaune au violet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="stylesheets/mondrian.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>
    <div class="container">
        <div id="win">
            <div class="content-win">
            <p class="title">
              F&#201;LICITATIONS !
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
              Tu as donc compris les variables et comment les utiliser comme paramètres d'une fonction. <br><br>
              Découvre ton dernier défi !
            </p>
            <a href="map.php"><button class="continuer">D&#201;FI SUIVANT</button></a>
            </div>
        </div>
        <div id="loose">
            <div class="content-loose">
            <p class="title">
              RAT&#201;&nbsp;!
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
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
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
            <h2 class="rose six">DÉFI <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>Recréé l'oeuvre de Piet Mondrian en donnant des arguments à la fonction suivante: DessinerUneLigne(couleur, sens, nombre).</p>
                <br>
            </div>
            <div class="leftBloc">
                <div class="souscontainer">
                    <canvas id="myCanvas"></canvas>
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
                        <
                        </span>
                        <span class="valeurs" id="couleur"></span>
                        <span class="selecteurs" id="couplus">></span>
                        </div>
                    </div>
                    <div class="orientation">
                        <p>Orientation</p>
                        <div class="choix">
                        <span class="selecteurs" id="orimoins">
                        <
                        </span>
                        <span class="valeurs" id="orientation"></span>
                        <span class="selecteurs" id="oriplus">></span>
                        </div>
                    </div>
                    <div class="nombre">
                        <p>Nombre</p>
                        <div class="choix">
                        <span class="selecteurs" id="nbmoins">
                        <
                        </span>
                        <span class="valeurs" id="nombre"></span>
                        <span class="selecteurs" id="nbplus">></span>
                        </div>
                    </div>
                </div>
                <div class="controles">
                    <div class="bouton2" id="indice">
                        <img src="img/bulb.png" alt="Objectif"/>
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

    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script src="js/global.js"></script>
    <script src="js/chrono.js"></script>
    <script src="js/mondrian.js"></script>
</body>
</html>