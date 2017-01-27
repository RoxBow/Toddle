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
    <link rel="stylesheet" href="../stylesheets/oeuvre.css" media="all">
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
              WELL DONE !
            </p>
            <hr>
            <p class="text-win">
              Good job <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
              You’ve succeeded in solving the first puzzle !
            </p>
            <br>
            <p>
              Let’s sum up what you just have put together :
             <br>
            </p>
            <br>
            <p>
              You have reproduced Klein Blue by the French artist Yves Klein by using the <span class="bold">functions</span>:
              <br>
              <span class="name">CreateRectangle</span><span class="parentheses">()</span> et <span class="name">FillInBlue</span><span class="parentheses">()</span>.
            </p>
            
            <button class="continuer">NEXT</button>
          </div>
      </div>
      <div id="loose">
          <div class="content-loose">
            <p class="title">
              OOPS !
            </p>
            <hr>
            <br>
            <p class="text-loose">
              What a shame <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
                Be sure to observe the artwork again and try again !
            </p>
            <br>
            <button class="rechercher">Back</button>
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
                <p class="defi">Challenge <span id="nbrDefi"></span>/5</p>
           </div>
        </header>
        <div id="jeu">
          <img src="../img/h3.png" alt="Mouvement à faire" id="handclick">
          <section class="leftBloc" id="leftBloc">
              <canvas id="canvas" class="box drag-target">
              </canvas>
          </section>
          <section class="rightBloc">
              <div class="codeBloc">
                  <h2>CHALLENGE <span id="levelUser"></span>/5</h2><br>
                  <div class="consignes">
                      <p>
                        Using <span class="bold">algorithmic functions</span> available below, reproduce Yves Klein’s piece of art.
                      </p>
                      <br>
                      <p id="secondeconsigne">
                          Drag and drop the <span class="bold">function</span> that seems appropriate to reproduce the artwork.
                      </p>
                  </div>
              </div>
              <div class="etiqBloc" id="etiqBloc">

                  <div class="etiq" id="rectangle">CreateRectangle()</div>
                  <div class="etiq" id="carre">CreateSquare()</div>
                  <div class="etiq" id="rond">CreateCircle()</div>

                  <div class="etiq" id="rouge">FillInBlue1()</div>
                  <div class="etiq" id="jaune">FillInBlue2()</div>
                  <div class="etiq" id="violet">FillInBlue3()</div>

                  <div class="bouton" id="undo"><i class="fa fa-undo fa-2x" aria-hidden="true"></i></div>
                  <div class="bouton" id="valider"><i class="fa fa-check fa-2x" aria-hidden="true"></i></div>
              </div>
          </section>
        </div>
        <?php
            include 'footer.php';
        ?>
    </div>
    
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/hammer-time.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/resemble.js"></script>
    <script src="../js/chrono.js"></script>
    <script src="../js/canvas.js"></script>
    <script src="../js/oeuvre.js"></script>
    <script>
    </script>
</body>
</html>