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
    <title>Toodle - Interactive game</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <script type="text/javascript" charset="utf-8" src="js/appframework.ui.min.js"></script>
    <link rel="stylesheet" href="stylesheets/oeuvre2.css" media="all">
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
              Tu as réussi le second défi !
            </p>
            <br>
            <p>
              Récapitulons, ce que tu viens de mettre en application: <br>
            </p>
            <br>
            <p>
              Tu as recomposé l'oeuvre de Frank stella en utilisant "<span class="rose">27</span>" en paramètre de la fonction <span class="rose">DessinerLignes()</span>.
              <br>
            </p>
            
            <a href="map.php"><button class="continuer">DÉFI SUIVANT</button></a>
          </div>
      </div>
      <div id="loose">
          <div class="content-loose">
            <p class="title">
              RAT&#201;&nbsp;!
            </p>
            <hr>
            <br>
            <p class="text-loose">
              Dommage <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
                Regarde bien l'oeuvre et recommence !
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
            <h2 class="rose">DÉFI <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>À l'aide de la fonction <span class="rose">DessinerLignes()</span>, ajoute ou supprime des lignes afin de recréer l'oeuvre.</p>
                <br>
            </div>
            <canvas id="mycanvas"></canvas>
            <div class="button" id="plus"><p>+</p></div>
            <div class="button" id="moins"><p>-</p></div>

            <div class="result">
                <div class="buttonV" id="but">
                    <img src="img/flag.png" alt="Indice"/>
                </div>
                <p class="bleu">DessinerLignes(<span id="nbLignes" class="rose"></span>)</p>
                <div class="buttonV" id="valider">
                    <i class="fa fa-check fa-2x" aria-hidden="true"></i>
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
    <script src="js/oeuvre2.js"></script>
    <script>

    </script>
</body>
</html>