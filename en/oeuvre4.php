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
              GOOD JOB !
            </p>
            <hr>
            <p class="text-win">
              Great <span class="name"><?php echo $_SESSION['pseudo'];?></span>&nbsp;!
            </p>
            <p>
              You’ve solved the fourth puzzle !
            </p>
            <br>
            <p>
              You have now understood what <span class="bold">variables</span> are and how to use them in <span class="bold">parameters</span> within a <span class="bold">function</span>. <br><br>
              Let’s move on to your last puzzle !
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
        <section class="bleu">
            <img src="../img/h3.png" alt="Mouvement à faire" id="handclick"/>
            <h2 class="rose medium">CHALLENGE <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>Reproduce the work of Piet Mondrian by giving arguments to the following function: DrawLine (color, orientation, number)</p>
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
                    <p>Createborder();</p>
                </div>
                <div class="selection">
                    <div class="couleur">
                        <p>Color</p>
                        <div class="choix">
                        <span class="selecteurs" id="coumoins">
                        &lsaquo;
                        </span>
                        <span class="valeurs" id="couleur"></span>
                        <span class="selecteurs" id="couplus">&rsaquo;</span>
                        </div>
                    </div>
                    <div class="orientationLigne">
                        <p>Direction</p>
                        <div class="choix">
                        <span class="selecteurs" id="orimoins">
                        &lsaquo;
                        </span>
                        <span class="valeurs" id="orientation"></span>
                        <span class="selecteurs" id="oriplus">&rsaquo;</span>
                        </div>
                    </div>
                    <div class="nombre">
                        <p>Number</p>
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
                        <button class="bva">ADD</button>
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