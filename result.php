<?php

include 'login.php';  // Ok.

session_start();

if(!isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

$result = $bdd->prepare("SELECT pseudo FROM user");
$result->execute();

?>

<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Toodle - Interactive game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheets/result.css" media="all">
</head>
<body>
    <div class="container">
       <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
        </header>
        <div class="content">
            <p class="announce">Félicitations <?php echo $_SESSION['pseudo']; ?> !<br>Vous avez résolu tous les défis<br>en <span id="minResult">minutes</span>  et <span id="secResult">secondes</span>  </p>
            <section>
                <ul class="listeUser">
                    <?php
                        $nbr = 0;
                        while ($row = $result->fetch(PDO::FETCH_ASSOC)){
                            $nbr++;
                            if($row['pseudo'] == $_SESSION['pseudo']){
                                echo "<li class='own'>".$nbr.". ".$row['pseudo']."</li>";
                            }
                            echo "<li><span>".$nbr.".</span> ".$row['pseudo']."</li>";
                        }
                    ?>
                </ul>
                <div class="giftBlock">
                    <p>Un cadeau sera remis au plus rapide d'entre vous</p>
                    <hr class="trait">
                    <p>Pour être informé du classement, pensez à nous laisser votre adresse e-mail !</p>
                    <button>
                        <span class="fa-stack fa-4x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-envelope fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
            </section>
        </div>
        
        <!-- POPUP -->
        <div class="overlay">
          <div class="popup">
           <i class="fa fa-times fa-3x close" aria-hidden="true"></i>
            <form action="login.php" method="post">
                <label for="pseudo">Veuillez entrer votre adresse e-mail</label>
                <input type="text" name="mail" id="mail" placeholder="jean@gmail.com" />
                <button name="submit" type="submit" >
                    <span class="fa-stack fa-4x">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-check fa-stack-1x fa-inverse" aria-hidden="true"></i>
                    </span>
                </button>
            </form>
          </div>
        </div>
        <!-- POPUP -->
    </div>
  
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/chrono.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            stopchrono(); // Arrête chrono
            $("#minResult").prepend( localMin + " ");
            $("#secResult").prepend( localSec + " " );
            
            $(document).click(function (e) {
                if( $(".fa-envelope").is(e.target) ){
                    $(".overlay").fadeIn();
                }
                else if ( $(".close").is(e.target) ) {
                    $(".overlay").fadeOut();
                }
            });
        });
    </script>
</body>
</html>