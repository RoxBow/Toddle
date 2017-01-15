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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
              F&#201;LICITATIONS !
            </p>
            <hr>
            <p class="text-win">
              Bravo <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
              Tu as réussi le premier défi !
            </p>
            <br>
            <p>
              Récapitulons, ce que tu viens de mettre en application: <br>
            </p>
            <br>
            <p>
              Tu as retrouvé l'oeuvres de Yves Klein en utilisant la fonction:
              <br>
              <span class="name">ChangerEnBleu</span><span class="parentheses">()</span>.
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
            <br>
            <p class="text-loose">
              Dommage <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
              Il y a un petit soucis sur ta transformation.
            </p>
            <br>
            <p>
              Regarde bien à nouveau l'objectif que tu dois accomplir.
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
                </form><br>
           </div>
        </header>
        <section>
            <h2 class="rose">DÉFI <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>&Agrave; l'aide de la fonction <span class="rose">DessinerLignes()</span>, ajoute ou supprime des lignes afin de recréer l'oeuvre.</p>
                <br>
            </div>
            <canvas id="mycanvas"></canvas>
            <div class="button" id="plus"><p>+</p></div>
            <div class="button" id="moins"><p>-</p></div>

            <div class="result">
                <div class="buttonV" id="but">
                    <img src="img/flag.png" alt="Indice"/>
                </div>
                <p>DessinerLignes(<span id="nbLignes"></span>)</p>
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