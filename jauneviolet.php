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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="stylesheets/jauneviolet.css" media="all">
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
                </form>
                <p class="defi">Défi <span id="nbrDefi"></span>/5</p>
           </div>
        </header>
        <section>
            <h2 class="rose">DÉFI <span id="levelUser"></span>/5</h2>
            <div class="consignes">
                <p>Remplis les informations manquantes</p>
                <br>
            </div>
            <div class="leftBloc">
                <div class="bouton2" id="indice">
                    <img src="img/bulb.png" alt="Objectif"/>
                </div>
                <div class="bouton2" id="but">
                    <img src="img/flag.png" alt="Indice"/>
                </div>
                <canvas id="myCanvas"></canvas>
            </div>
            <div class="rightBloc">
                <div class="code bleu">
                    <div id="chaude"><span class="blueColor">var</span> teinteChaude = [<p class="contentChaud"></p>];</div>
                       <div id="froide"><span class="blueColor">var</span> teinteFroide = [<p class="contentFroid"></p>];</div>

                       <span class="blueColor">function</span> <span class="violetColor"><input type="text" maxlength="12" value="nameFunction" id="nameFunction"></span>() {<br>
                       <div class="indent1"><span class="blueColor">for</span>(<span class="blueColor">var</span> i; i &lt; <input type="number" value="0" id="nbrSquare" min="0">; i++) {
                               <div class="indent2">paquetCarre.push({
                                    <div class="indent3">x : canvas.width / 2,<br>
                                    y : canvas.height / 2,<br>
                                    width: largeur,<br>
                                    height: hauteur,<br>
                                    color: <select name="color" id="color"><option disabled selected value>Select color </option>
<option value="teinteFroide">Teintes froides</option><option value="teinteChaude">Teintes chaudes</option></select></div>
                               });</div>
                           }</div>
                       }
                </div>
                
            </div>
        </section>
        <?php
            include 'footer.php';
        ?>
    </div>

    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script src="js/global.js"></script>
    <script src="js/chrono.js"></script>
    <script src="js/jauneviolet.js"></script>
</body>
</html>