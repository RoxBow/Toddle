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
    <title>Toodle - Interactive game</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="../stylesheets/oeuvre2.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>
    <div class="container">
        <div id="win">
          <div class="content-win">
            <p class="title">
              WELL DONE !
            </p>
            <hr>
            <p class="text-win">
              Great <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
              You’ve succeeded in solving the second challenge.
            </p>
            <br>
            <p>
              Let’s sum up what you learnt<br>
            </p>
            <br>
            <p>
              You have rebuilt Frank Stella’s work using "<span class="rose">27</span>" as a <span class="bold">parameter</span> of <span class="rose">theDrawLines()</span> function.
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
            <h2 class="rose">DÉFI <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>
                    Using <span class="rose">DrawLines() </span><span class="bold">function</span>, add or delete some lines to recreate the artwork you have found.
                </p>
                <br>
            </div>
            <canvas id="mycanvas"></canvas>
            <div class="button" id="plus">
                <p><i class="fa fa-plus-circle" aria-hidden="true"></i></p>
            </div>
            <div class="button" id="moins">
                <p><i class="fa fa-minus-circle" aria-hidden="true"></i></p>
            </div>

            <div class="result">
                <p class="bleu">DrawLines(<span id="nbLignes" class="rose"></span>)</p>
                <div class="buttonV" id="valider">
                    <i class="fa fa-check fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        </section>
        <?php
            include 'footer.php';
        ?>
    </div>
    
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/chrono.js"></script>
    <script src="../js/oeuvre2.js"></script>
</body>
</html>