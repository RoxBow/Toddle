<?php

include 'login.php';

session_start();

if(!isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

// Get all pseudo users
$result = $bdd->prepare("SELECT pseudo, min, sec FROM user ORDER BY min, sec");
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
    <?php
        include 'credits.php';
    ?>
    <div class="container">
       <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
        </header>
        <div class="content">
            <p class="announce">Félicitations <span><?php echo $_SESSION['pseudo']; ?></span> !<br>Tu as résolu tous les défis<br>en <span id="minResult">minutes</span>  et <span id="secResult">secondes</span>.<br>Tu termines à la <span><?php echo $_SESSION['nbrUser']; ?>ème</span> position </p>
            <section>
                <ul class="listeUser">
                    <?php
                        $nbr = 0;
                        while ($row = $result->fetch(PDO::FETCH_ASSOC)){
                            $nbr++;
                            if($row['pseudo'] == $_SESSION['pseudo']){
                                echo "<li class='own'><span class='nbr'>".$nbr.".</span> <span class='pseudo'>".$row['pseudo']."</span> <span class='time'>".$row['min']."m ".$row['sec']."s</span></li>";
                                $_SESSION['nbrUser'] = $nbr;
                            }
                            else {
                                echo "<li><span class='nbr'>".$nbr.".</span> <span class='pseudo'>".$row['pseudo']."</span> <span class='time'>".$row['min']."m ".$row['sec']."s</span></li>";
                            }
                            
                        }
                    ?>
                </ul>
                <div class="giftBlock">
                    <p>Un cadeau sera remis au plus rapide d'entre vous</p>
                    <hr class="trait">
                    <p>Afin d'être tenu informé du classement, pense à nous laisser votre adresse e-mail !</p>
                    <button>
                        <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-envelope fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    </button>
                    <button>
                        <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-arrow-right fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
            </section>
        </div>
        <footer>
            <img src="img/logo_pompidou.png" alt="pompidou">
            <img src="img/logo_gris_avec.png" alt="avec">
        </footer>
        
        <!-- POPUP -->
        <div class="overlay">
          <div class="popup">
           <i class="fa fa-times close" aria-hidden="true"></i>
            <form action="login.php" method="post">
                <label for="pseudo">Veuillez entrer votre adresse e-mail</label>
                <input type="text" name="mail" id="mail" placeholder="jean@gmail.com" />
                <button name="submit" type="submit" >
                    <span class="fa-stack">
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
            // Save time user in DB
            $.ajax({
                type: "POST",
                url: "login.php",
                data: { 'min': localMin, 'sec': localSec },
                success: function(data) {
                    console.log("Temps: "+localMin+" minutes et "+localSec+" secondes"  );
                }
            });
            
            $("#minResult").prepend( localMin + " ");
            $("#secResult").prepend( localSec + " " );
            
            $(document).click(function (e) {
                if( $(".fa-envelope").is(e.target) ){
                    $(".overlay").fadeIn(); // Open popup
                }
                else if ( $(".close").is(e.target) || $(".overlay").is(e.target)) {
                    $(".overlay").fadeOut();
                }
                if( $(".fa-arrow-right").is(e.target) ){
                    document.location.href = "end.php"; // Redirect to last page
                }
            });
            
            // Scroll to position user in list
            $('.listeUser').animate({ scrollTop: $(".own").position().top - 500 }, 700);
        });
    </script>
</body>
</html>