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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheets/tuto.css" media="all">
</head>
<body>
    <div class="container">
        <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
            <p class="name"><?php echo $_SESSION['pseudo']; ?></p>
        </header>
        <section class="lessons">
            <div class="lesson up">
                <div class="content">
                    <p class="number">1</p>
                    <p class="explication">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vel mollitia beatae, error delectus veniam nisi adipisci! Architecto eum illo repellat modi, illum eaque inventore porro vitae quod sed ipsum!</p>
                    <button class="understood">COMPRIS</button>
                </div>
            </div>
            <div class="lesson">
               <i class="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
                <div class="content">
                    <p class="number">2</p>
                    <p class="explication">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vel mollitia beatae, error delectus veniam nisi adipisci! Architecto eum illo repellat modi, illum eaque inventore porro vitae quod sed ipsum!</p>
                    <button class="understood">COMPRIS</button>
                </div>
            </div>
            <div class="lesson">
               <i class="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
                <div class="content">
                    <p class="number">3</p>
                    <p class="explication">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vel mollitia beatae, error delectus veniam nisi adipisci! Architecto eum illo repellat modi, illum eaque inventore porro vitae quod sed ipsum!</p>
                    <button class="understood">C'EST PARTI !</button>
                </div>
            </div>
        </section>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>