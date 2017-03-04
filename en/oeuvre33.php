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
    <link rel="stylesheet" href="../stylesheets/oeuvre33.css" media="all">
    <link rel="stylesheet" href="../stylesheets/jquery-ui.min.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>
    <div class="container">
        <div id="win">
          <div class="content-win">
            <p class="title">
              GOOD JOB !
            </p>
            <hr>
            <p class="text-win">
              Great <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
              You’ve succeeded in solving the third challenge.
            </p>
            <br>
            <p>
              Let’s sum up what you've learnt<br>
            </p>
            <br>
            <p>
              You have recreated Piet Mondrian’s artwork by coupling the right<span class="bold"> values </span>with the <span class="bold">arguments</span> of the <span class="bold">functions</span>.
              <br>
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
              Sorry <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
                Take another look at the artwork.
            </p>
            <br>
            <button class="rechercher">Try again</button>
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
    <section>
        <img src="../img/h3.png" alt="Mouvement à faire" id="handclick">
        <h2 class="rose">CHALLENGE <span id="levelUser"></span>/5</h2>
        <div class="consignes">
            <p>Using the cursors and the code preview, change <span class="bold">the value </span> of the angles in the functions in order to recreate the artwork.</p>
            <br>
        </div>
        <div class="leftBloc">
            <div class="souscontainer">
                <div class="content">
                    <canvas id="myCanvas1"></canvas>
                    <canvas id="myCanvas2"></canvas>
                    <canvas id="myCanvas3"></canvas>
                    <canvas id="myCanvas4"></canvas>
                </div>
            </div>
        </div>
        <div class="rightBloc">
            <div class="code bleu">
                <p class="alinea1"><span class="rose">var</span> angle = <span class="noir valDeg" id="val1">0</span>;</p>
                <p class="alinea1"><span class="rose">var</span> angle2 = <span class="noir valDeg" id="val2">0</span>;</p>
                <p class="alinea1"><span class="rose">var</span> angle3 = <span class="noir valDeg" id="val3">0</span>;</p>
                <br>
                <div class="alinea2">
                  <p>DrawCircle(white);</p>
                  <p>DrawLine(black);</p>
                  <p>DrawRectangle(grey);</p>
                  <p>DrawRectangle(black);</p>
                </div>

                <br>
                <div class="alinea3">
                  <p>TurnRectangle(gris,<span class="noir">angle</span>);</p>
                  <p>TurnRectangle(noir,<span class="noir">angle2</span>);</p>
                  <p>TurnLigne(<span class="noir">angle3</span>);</p>
                </div>
            </div>
            <div class="columns">
                <div class="gauche">
                    <div><span id="output1">0</span>°</div>
                    <div class="range" id="range1"></div>

                    <div><span id="output2">0</span>°</div>
                    <div class="range" id="range2"></div>

                    <div><span id="output3">0</span>°</div>
                    <div class="range" id="range3"></div>
                </div>
                <div class="droite">
                    <div class="buttonV" id="valider">
                        <i class="fa fa-check fa-3x" aria-hidden="true"></i>
                    </div>
                </div>
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
    <script src="../js/jquery-ui.min.js"></script>
    <script src="../js/touchpunch.min.js"></script>
    <script src="../js/oeuvre33.js"></script>

    
</body>
</html>