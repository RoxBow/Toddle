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
        <link rel="stylesheet" href="stylesheets/mondrian.css" media="all">
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
        <section class="bleu">
            <h2 class="rose six">DÉFI <span id="levelUser"></span>/5</h2>
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
                <div class="souscontainer">
                    <canvas id="myCanvas"></canvas>
                </div>
            </div>
            <div class="rightBloc">
                <div class="code bleu">
                    <p> function creationLigne (x1, y1, x2, y2, couleur){<br>
                        context.beginPath();<br>
                        context.moveTo(x, y);<br>
                        context.lineTo(x2, y2);<br>
                        context.lineWidth = 20;<br>
                        context.strokeStyle = color;<br>
                        context.stroke();<br>
                    }<br>
                    creationLigne(<select name="sens" id="sens">
                        <option value="vertical">Vertical</option>
                        <option value="horizontal">Horizontal</option>
                    </select>,<input type="number" id="x1"  value="0"/>,<input type="number" id="y1" value="0" disabled />,<select name="color" id="color">
                        <option value="yellow">Jaune</option>
                        <option value="red">Rouge</option>
                        <option value="blue">Bleu</option>
                    </select>)
                    </p>
                  <button class="valide">Valider</button>
                </div>
                <div class="selection">
                    <div class="couleur">
                        <p>Couleur</p>
                        <div class="choix">
                        <span class="selecteurs" id="coumoins">
                        <
                        </span>
                        <span class="valeurs" id="couleur"></span>
                        <span class="selecteurs" id="couplus">></span>
                        </div>
                    </div>
                    <div class="orientation">
                        <p>Orientation</p>
                        <div class="choix">
                        <span class="selecteurs">
                        <
                        </span>
                        <span class="valeurs" id="orientation">Horizontales</span>
                        <span class="selecteurs">></span>
                        </div>
                    </div>
                    <div class="nombre">
                        <p>Nombre</p>
                        <div class="choix">
                        <span class="selecteurs">
                        <
                        </span>
                        <span class="valeurs" id="nombre">7</span>
                        <span class="selecteurs">></span>
                        </div>
                    </div>
                </div>
                <div class="controles">
                    <div class="bouton2" id="indice">
                        <img src="img/bulb.png" alt="Objectif"/>
                    </div>
                    <div id="valider">
                        <button class="bva">AJOUTER</button>
                    </div>
                    <div class="bouton">
                        <i class="fa fa-check fa-2x" aria-hidden="true"></i></div>
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
    <script src="js/mondrian.js"></script>
</body>
</html>