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
    <link rel="stylesheet" href="stylesheets/oeuvre.css" media="all">
</head>
<body>
    <div class="container">
       <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
            <p class="name"><?php echo $_SESSION['pseudo']; ?></p>
        </header>
        <section class="leftBloc">
            
        </section>
        <section class="rightBloc">
            <div class="etiqBloc">
                <h2>Étiquettes</h2>
                <div class="etiq">Etiquette 1</div>
                <div class="etiq">Etiquette 2</div>
                <div class="etiq">Etiquette 3</div>
            </div>
            <div class="codeBloc">
                <h2>Code</h2>
                <div>
                    <p>function myFunction(p1, p2) {<br>return p1 * p2; <br>}</p>
                </div>
                <button>Valider mon oeuvre <i class="fa fa-play-circle fa-3x" aria-hidden="true"></i></button>
            </div>
        </section>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>