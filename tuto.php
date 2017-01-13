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
    <meta name="viewport" content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="stylesheets/tuto.css" media="all">
</head>
<body>
    <div class="container">
        <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
            <div class="blockRight">
                <p class="name"><?php echo $_SESSION['pseudo']; ?></p>
            </div>
        </header>
        <div class="entete">
            <p>Bienvenue <span><?php echo $_SESSION['pseudo']; ?></span> !</p>
            <p>Découvre le code informatique avec Toddle au centre Georges Pompidou, en résolvant nos 5 défis.</p>
        </div>
        <section class="lessons">
            <div class="lesson up">
                <div class="content">
                    <p class="number">1</p>
                    <hr>
                    <p>Aide toi du plan de l’étage mis à ta disposition pour partir à la recherche du tableau demandé !</p>
                    <img src="img/tuto1.gif" alt="map" class="map">
                    <p>La salle où tu dois te rendre clignotera sur le plan !</p>
                    <button class="understood">OK</button>
                </div>
            </div>
            <div class="lesson">
               <i class="fa fa-chevron-left" aria-hidden="true"></i>
                <div class="content">
                    <p class="number">2</p>
                    <hr>
                    <p>Tu penses avoir trouvé l’oeuvre grâce aux indices et au plan ? Clique sur le bouton "trouvé" et prends la en photo !</p>
                    <div class="group_gif">
                        <img src="img/tuto2_1.gif" alt="trouvé"><img src="img/tuto2_2.gif" alt="photo">
                    </div>
                    <p>Nous te dirons alors si tu es au bon endroit !</p>
                    <button class="understood">OK</button>
                </div>
            </div>
            <div class="lesson">
               <i class="fa fa-chevron-left" aria-hidden="true"></i>
                <div class="content">
                    <p class="number">3</p>
                    <hr>
                    <p>Une fois l’oeuvre trouvée, tiens toi prêt à relever le défi correspondant !</p>
                    <ul>
                        <li>
                            <img src="img/ampoule.png" alt="ampoule">
                            <p>Aide toi des indices et du plan</p>
                        </li>
                        <li>
                            <img src="img/retour.png" alt="fleche">
                            <p>Annule tes erreurs</p>
                        </li>
                        <li>
                            <img src="img/drapeau.png" alt="drapeau">
                            <p>Ne perds pas de vue ton objectif</p>
                        </li>
                        <li>
                            <img src="img/valide.png" alt="coche">
                            <p>Valide si tu penses avoir trouvé</p>
                        </li>
                    </ul>
                    <button class="understood">GO</button>
                </div>
            </div>
        </section>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>