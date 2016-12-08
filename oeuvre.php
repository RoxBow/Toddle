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
    <link rel="stylesheet" href="stylesheets/oeuvre.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>
    <div class="overlay"></div>
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
              Il consistait à transformer l'oeuvre de Yves Klein pour te faire découvrir l'algorithmique.
            </p>
            <br>
            <p>
              Récapitulons, ce que tu viens de mettre en application: <br>
            </p>
            <br>
            <p>
              Tu devais rendre l'oeuvre violet et y ajouter trois carrés. Tu as donc selectionné les fonctions changerEnViolet() et MettreUnCarre() qui t'ont permis de 
            </p>
            <button class="continuer">D&#201;FI SUIVANT</button>
          </div>
      </div>
      <div id="loose">
          <div class="content-loose">
            <p class="title">
              F&#201;LICITATIONS !
            </p>
            <hr>
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
        <div id="jeu">
          <section class="leftBloc" id="leftBloc">
              <div class="wrap">
                <div class='content'>
                    <h2>Indice</h2>
                </div>
              </div>
              <div class="wrap2">
                <div id="indicecontent" class='content'>
                  <canvas id="canvas2"></canvas>
                </div>
              </div>
              <div class="bouton2" id="indice">
                <img src="img/bulb.png" alt="Objectif"/>
              </div>
              <div class="bouton2" id="but">
                <img src="img/flag.png" alt="Indice"/>
              </div>
              <canvas id="canvas" class="box drag-target">
              </canvas>
          </section>
          <section class="rightBloc">
              <div class="codeBloc">
                  <h2>D&#201;FI 1/7</h2><br>
                  <div class="consignes">
                      <p>
                        Aide toi des fonctions algorithmiques mises à ta disposition ci-dessous, pour transformer le bleu d’Yves Klein, en violet. Ajoute-y 3 carrés en haut à gauche.
                      </p>
                      <br>
                      <p>
                        Glisse la fonction qui te semble appropriée sur l’oeuvre. Si tu penses avoir réussi la transformation comme demandé, il ne te reste plus qu’à valider.
                      </p>
                  </div>
              </div>
              <div class="etiqBloc" id="etiqBloc">
                  <div class="etiq" id="vert">ChangerEnVert()</div>
                  <div class="etiq" id="rouge">ChangerEnRouge()</div>
                  <div class="etiq" id="jaune">ChangerEnJaune()</div>
                  <div class="etiq" id="carre">MettreUnCarré()</div>
                  <div class="etiq" id="violet">ChangerEnViolet()</div>
                  <div class="etiq" id="rond">MettreUnCercle()</div>
                  <div class="bouton" id="undo"><i class="fa fa-undo fa-2x" aria-hidden="true"></i></div>
                  <div class="bouton" id="valider"><i class="fa fa-check fa-2x" aria-hidden="true"></i></div>
              </div>
          </section>
        </div>
        <footer>
            <img src="img/logo_pompidou.png" alt="pompidou">
            <img src="img/logo_gris_avec.png" alt="avec">
        </footer>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/hammer-time.min.js"></script>
<!--     <script src="code.jquery.com/ui/1.10.4/jquery-ui.js"></script>-->    
        <!--<script src="js/main.js"></script>-->
    <script src="js/global.js"></script>
    <script src="js/resemble.js"></script>
    <script src="js/chrono.js"></script>
    <script src="js/oeuvre.js"></script>
    <script>
    </script>
</body>
</html>