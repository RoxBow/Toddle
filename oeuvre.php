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
    <div class="container">
       <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
            <div class="blockRight">
                <p class="name"><?php echo $_SESSION['pseudo']." - "; ?></p>
                <form name="chrono" class="chrono">
                    <input type="text" name="minute" id="min">min
                    <input type="text" name="seconde" id="sec">s
                </form>
           </div>
        </header>
        <div id="jeu">
          <section class="leftBloc" id="leftBloc">
              <div class="wrap">
                <div class='content'>
                  <h2>Well Hello!</h2>
                  <p>GROS ZIZI</p>
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
                  <h2>Défi N.1</h2></br>
                  <div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate risus id metus laoreet porta. Nam pellentesque quam et lobortis pellentesque. Quisque massa odio, auctor eu metus a, viverra tincidunt justo. In ullamcorper velit eros, quis consequat nulla dapibus sit amet. Nulla cursus tortor ac sapien rutrum porta. Suspendisse potenti. Duis a diam accumsan, commodo ligula a, malesuada leo.</p>
                  </div>
                  <!-- <button>Valider mon oeuvre <i class="fa fa-play-circle fa-3x" aria-hidden="true"></i></button> -->
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
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/hammer-time.min.js"></script>
<!--     <script src="code.jquery.com/ui/1.10.4/jquery-ui.js"></script>-->    
        <!--<script src="js/main.js"></script>-->
    <script src="js/global.js"></script>
    <script src="js/chrono.js"></script>
    <script src="js/oeuvre.js"></script>

</body>
</html>