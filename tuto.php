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
            <p>Découvre le code informatique avec Toddle au <br>Centre Georges Pompidou, en résolvant nos 5 défis.</p>
        </div>
        <section class="lessons">
            <div class="lesson up">
                <div class="content">
                    <p class="number">1</p>
                    <hr>
                    <p>Aide-toi du plan de l’étage mis à ta disposition et pars à la recherche du tableau demandé !</p>
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
                    <p>Tu penses avoir trouvé l’&#156;uvre grâce aux indices et au plan ? Clique sur le bouton "trouvé" et prends-la en photo !</p>
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
                    <p>Une fois l’&#156;uvre trouvée, tiens-toi prêt à relever le défi correspondant !</p>
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
                    <button class="understood">OK</button>
                </div>
            </div>
            <div class="lesson">
               <i class="fa fa-chevron-left" aria-hidden="true"></i>
                <div class="content">
                    <p class="number spec">4</p>
                    <hr>
                    <div class="blocL4">
                        <span class="containerImg"><img src="img/chrono.png" alt="chrono"></span>
                        <p>Un chronomètre débutera dès le début de l'aventure !</p>
                    </div>
                    <div class="blocL4">
                        <span class="containerImg"><img src="img/gift.png" alt="cadeau"></span>
                        <p>Les trois plus rapides d'entre vous auront le droit à une surprise !</p>
                    </div>
                    <button class="understood go">GO</button>
                </div>
            </div>
        </section>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/global.js"></script>
    <script type="application/javascript">
        $(document).ready(function () {
            /* ### TUTO ### */
            $('.lesson', '.lessons').click(function (e) {
                e.preventDefault();

                if ($(e.target).hasClass('understood')) {
                    // add "up" class to lesson selected and hide others
                    //$(e.target).parent().parent().toggleClass('up').next(".lesson").addClass("up");
                    $(this).toggleClass('up').next(".lesson").addClass("up");
                } else if ($(e.target).hasClass('fa-chevron-left')) {
                    // click on arrow left, open previous lesson
                    $(e.target).parent().toggleClass('up').prev(".lesson").addClass("up");
                }
                if ($(e.target).hasClass('understood') && $(e.target).parent().parent().is(':last-child')) {
                    location.href = "map.php"; // Redirect to map after making tuto
                }

                return false;
            });
        });
    </script>
</body>
</html>