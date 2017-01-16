<?php

include 'login.php';

session_start();

$emailSaved = false;

if(!isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

if(isset($_POST['mail'])){
    $mail = trim($_POST['mail']); // Remove space before and after string
    $mail = strip_tags($mail);
    
    $requestMail = $bdd->prepare("UPDATE user SET mail='".$_POST['mail']."' WHERE pseudo='".$_SESSION['pseudo']."'");
    $requestMail->execute();
    $emailSaved = true;
}

// Get all pseudo users
$result = $bdd->prepare("SELECT pseudo, min, sec FROM user ORDER BY min, sec");
$result->execute();

$nbr = 0;
while ($row = $result->fetch(PDO::FETCH_ASSOC)){
    $nbr++;
    if($row['pseudo'] == $_SESSION['pseudo']){
        $_SESSION['min'] = $row['min'];
        $_SESSION['sec'] = $row['sec'];
        $_SESSION['nbrUser'] = $nbr;
        if($nbr == 1){
            $place = "er";
        }
        else {
            $place = "ème";
        }
    }
}

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
            <p class="announce">Félicitations <span><?php echo $_SESSION['pseudo']; ?></span> !<br>Tu as résolu tous les défis<br>en <span id="minResult"><?php echo $_SESSION['min'];?> minutes</span>  et <span id="secResult"><?php echo $_SESSION['sec'];?> secondes</span>.<br>Tu termines à la <span><?php echo $_SESSION['nbrUser'].$place; ?></span> position </p>
            <section>
                <ul class="listeUser">
                    <?php
                    
                        $search = $bdd->prepare("SELECT pseudo, min, sec FROM user ORDER BY min, sec");
                        $search->execute();
                        $nbr = 0;
                        while ($row = $search->fetch(PDO::FETCH_ASSOC)){
                            $nbr++;
                            if($row['pseudo'] == $_SESSION['pseudo']){
                                echo "<li class='own'><span class='nbr'>".$_SESSION['nbrUser'].".</span> <span class='pseudo'>".$_SESSION['pseudo']."</span> <span class='time'>".$_SESSION['min']."m ".$_SESSION['sec']."s</span></li>";
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
                    <p>Afin d'être tenu informé du classement, pense à nous laisser ton adresse e-mail !</p>
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
        <?php
            include 'footer.php';
        ?>
        
        <!-- POPUP -->
        <div class="overlay blocPoppin">
          <div class="popup">
           <i class="fa fa-times close" aria-hidden="true"></i>
            <form action="" method="post" id="formMail">
                <label for="pseudo">Pense à nous laisser ton adresse mail</label>
                <input type="text" name="mail" id="mail" placeholder="jean@gmail.com" autocomplete="off" />
                <p class="error"> <?php echo $error; ?></p>
                <button name="submit" class="sendMail">
                    <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-check fa-stack-1x fa-inverse" aria-hidden="true"></i>
                    </span>
                </button>
            </form>
          </div>
        </div>
        <!-- POPUP -->
        
        <?php
            // Display it if email is saved
            if($emailSaved === true){
                echo "<div class='blocEmail'>
                <span class='fa-stack'>
                    <i class='fa fa-circle fa-stack-2x'></i>
                    <i class='fa fa-check fa-stack-1x fa-inverse' aria-hidden='true'></i>
                </span>
                <p>Adresse email bien enregistré</p>
                </div>";
            }
        ?>
        
    </div> <!-- .container -->
  
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/chrono.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
              $(".blocEmail").animate({
                top: "5%"
              }, 1500, function() {
                setTimeout(function(){
                    $(".blocEmail").animate({
                        top: "-30%"
                    }, 1500);
                }, 500);
              });
            
            $(document).click(function (e) {
                if( $(".fa-envelope").is(e.target) ){
                    $(".blocPoppin").fadeIn(); // Open popup
                }
                else if ( $(".blocPoppin").is(e.target) || $(".close").is(e.target) ) {
                    $(".blocPoppin").fadeOut();
                }
                if( $(".fa-arrow-right").is(e.target) ){
                    document.location.href = "end.php"; // Redirect to last page
                }
            });
            
            // Check onclick if mail entered is correct
            $(".sendMail").click(function(e) {
                if(validateEmail($("#mail").val()) === false){
                    e.preventDefault();
                    $(".error").text("Adresse mail invalide");
                }
                else if(validateEmail($("#mail").val()) === true) {
                    $('form#formMail').submit();
                }
            });
            
            // Scroll to position user in list
            $('.listeUser').animate({ scrollTop: $(".own").position().top - 500 }, 700);
        });
        
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    </script>
</body>
</html>