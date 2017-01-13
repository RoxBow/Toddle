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
        <title>Grille: oeuvre 3</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="stylesheets/oeuvre3.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>
    <div class="container">
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
            <div class="consignes">
                <p>&Agrave; l'aide des curseurs et de l'aperçu sur le code, modifie la valeur des angles dans les fonctions, afin de recréer l'oeuvre.</p>
                <br>
            </div>
            <div class="leftBloc">
                <div class="souscontainer">
                    <div class="content">
                        <canvas id="myCanvas"></canvas>
                        <canvas id="myCanvas2"></canvas>
                        <canvas id="myCanvas3"></canvas>
                        <canvas id="myCanvas4"></canvas>
                    </div>
                </div>
            </div>
            <div class="rightBloc">
                <div class="code">
                    <p>var angle = <span id="val1">0</span></p>
                    <p>var angle2 = <span id="val2">0</span></p>
                    <p>var angle3 = <span id="val3">0</span></p>
                    <p>var angle4 = <span id="val4">0</span></p>
                    <p>DessinerGrille1();</p>
                    <p>DessinerGrille2();</p>
                    <p>DessinerGrille3();</p>
                    <p>DessinerGrille4();</p>
                    <p>TournerGrille1()</p>
                    <p>TournerGrille1()</p>
                    <p>TournerGrille1()</p>
                    <p>TournerGrille1()</p>
                </div>
                <div class="columns">
                    <div class="gauche">
                        <div><span id="output1"></span>°</div>
                        <input type="range" class="range" name="a" min="0" max="180" step="0.5" value="0"/>
                        
                        <div><span id="output2"></span>°</div>
                        <input type="range" class="range2" name="a" min="0" max="180" step="0.5" value="0"/>
                        
                    </div>
                    <div class="droite">
                        <div><span id="output3"></span>°</div>
                        <input type="range" class="range3" name="a" min="0" max="180" step="0.5" value="0"/>

                        <div><span id="output4"></span>°</div>
                        <input type="range" class="range4" name="a" min="0" max="180" step="0.5" value="0"/>
                        <div class="buttonV" id="valider">
                            <i class="fa fa-check fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <footer>
            <img src="img/logo_pompidou.png" alt="pompidou">
            <img src="img/logo_gris_avec.png" alt="avec">
        </footer>
    </div>

    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script src="js/global.js"></script>
    <script src="js/chrono.js"></script>
    <script src="js/oeuvre3.js"></script>
</body>
</html>