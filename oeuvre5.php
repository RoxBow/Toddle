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
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <script type="text/javascript" charset="utf-8" src="js/appframework.ui.min.js"></script>
    <link rel="stylesheet" href="stylesheets/jauneviolet.css" media="all">
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
                Tu as compris les bases de la programmation informatique !
            </p>
            <p>
                As-tu été assez rapide pour gagner une récompense ?<br><br>Découvre-le tout de suite !
            </p>
            <a href="result.php"><button class="continuer">RÉSULTAT</button></a>
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
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form" id="skip">
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
        <section>
            <img src="img/h3.png" alt="Mouvement à faire" id="handclick">
            <h2 class="rose">DÉFI <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>Choisis la teinte correspondante pour chaque zone, et ajoute le nombre de carré dans le code.</p>
                <br>
            </div>
            <div class="topBloc">
                <div class="souscontainer">
                    <div class="teintes">
                        <p class="bleu" id="chaudG">TEINTES CHAUDES</p>
                        <br><br>
                        <p class="rose" id="froidG">TEINTES FROIDES</p>
                    </div>
                    <canvas id="myCanvas"></canvas>
                    <div class="teintes">
                        <p class="rose" id="chaudD">TEINTES CHAUDES</p>
                        <br><br>
                        <p class="bleu" id="froidD">TEINTES FROIDES</p>
                    </div>
                </div>
            </div>
            <div class="sousBloc bleu">
                <div class="bouton2" id="indice">
                    <img src="img/bulb.png" alt="Objectif"/>
                </div>
                <div id="codegauche">
                    <p>
                        <p class="indent1">for( var compteur = 0; compteur&lsaquo;<span id="nbgauche" class="rose"></span>;&nbsp;&nbsp;compteur++){</p><br>

                            <p class="indent2">var couleurs = [<span id="colorsG"></span>]</p>
                            <p class="indent2">DessinerCarré(compteur);</p><br>
                        <p class="indent1">}</p>
                    </p>
                </div>
                <div id="codedroit">
                    <p>
                        <p class="indent1">for( var compteur = 0; compteur&lsaquo;<span id="nbdroit" class="rose"></span>; compteur++){</p><br>
                            <p class="indent2">var couleurs = [<span id="colorsD"></span>]</p>
                            <p class="indent2">DessinerCarré(compteur);</p><br>
                        <p class="indent1">}</p>
                    </p>
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

    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/global.js"></script>
    <script src="js/chrono.js"></script>
    <script src="js/hammer-time.min.js"></script>
    <script src="js/jauneviolet.js"></script>
</body>
</html>