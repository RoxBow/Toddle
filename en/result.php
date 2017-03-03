<?php

include '../login.php';

session_start();

$emailSaved = false;

if(!isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

if(isset($_POST['mail'])){
    $mail = trim($_POST['mail']); // Remove space before and after string
    $mail = strip_tags($mail);
    
    $requestMail = $bdd->prepare("UPDATE user SET mail='".$mail."' WHERE pseudo='".$_SESSION['pseudo']."'");
    $requestMail->execute();
    $emailSaved = true;
    
    $to  = $mail;

     // Sujet
     $subject = 'Participation Toddle';

     // message
     $message = '
     <html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <title>Toddle mail</title>
    <style type="text/css">
      /* -------------------------------------
                GLOBAL RESETS
            ------------------------------------- */
              
              
            /* -------------------------------------
                RESPONSIVE AND MOBILE FRIENDLY STYLES
            ------------------------------------- */
            @media only screen and (max-width: 620px) {
              table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important; }
              table[class=body] p,
              table[class=body] ul,
              table[class=body] ol,
              table[class=body] td,
              table[class=body] span,
              table[class=body] a {
                font-size: 16px !important; }
              table[class=body] .wrapper,
              table[class=body] .article {
                padding: 10px !important; }
              table[class=body] .content {
                padding: 0 !important; }
              table[class=body] .container {
                padding: 0 !important;
                width: 100% !important; }
              table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important; }
              table[class=body] .btn table {
                width: 100% !important; }
              table[class=body] .btn a {
                width: 100% !important; }
              table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important; }}
            /* -------------------------------------
                PRESERVE THESE STYLES IN THE HEAD
            ------------------------------------- */
            @media all {
              .ExternalClass {
                width: 100%; }
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
                line-height: 100%; }
              .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important; }
              .btn-primary table td:hover {
                background-color: #34495e !important; }
              .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important; } }
    </style>
  </head>
  <body style="background-color:#fff;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;">
    <table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#fff;width:100%;">
      <tr>
        <td style="vertical-align:top;">&nbsp;</td>
        <td class="container" align="center" style="vertical-align:top;display:block;max-width:580px;padding:20px;width:580px;color:#355E7E;font-family: "Verdana", sans-serif;font-size:16px;margin:0 auto !important;">
          <div class="content" style="box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;">
            <!-- START CENTERED WHITE CONTAINER -->
            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;">
              <tr>
                <td style="vertical-align:top;">
                  <p style="margin:0;"><img src="http://vincentdeplais.fr/toddle/img/logoToddle.png" alt="toddle" class="logoToddle" style="border:none;-ms-interpolation-mode:bicubic;max-width:100%;width:45%;display:block;margin:0 auto;"/></p>
                  <hr class="separateur" style="width:100%;height:10px;background:#F38F9A;border-radius:100px;border:none;margin:5% 0;">
                  <table border="0" cellpadding="0" cellspacing="0" class="header" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;text-align:center;text-transform:uppercase;margin:0 0 3% 0;font-weight:600;">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;">
                          <p class="name" style="margin:0;font-size:1.1em;color:#F38F9A;font-size:2em;font-weight:600;">'.$_SESSION['pseudo'].'</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;">
                          <p class="thanks" style="font-size:1.1em;margin:3% 0;color:#355E7E;">MERCI D\'AVOIR JOUÉ AVEC TODDLE !</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;">
                          <p style="margin:0;font-size:1.1em;color:#355E7E;">SI TU SOUHAITES VÉRIFIER TA POSITION,<br>
                            LE CLASSEMENT EST DISPONIBLE EN CLIQUANT ICI :</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;">
                          <button style="background:#355E7E;padding:2% 3%;font-size:1.4em;font-weight:600;border:none;border-radius:30px;margin:3% 0 0 0;cursor:pointer;"><a href="http://vincentdeplais.fr/toddle/classement/" style="text-decoration:none;color:#fff;">VOIR LE CLASSEMENT</a></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;">
                          <p style="margin:0;margin:1% 0;font-weight:600;color:#355E7E;">Nous te tiendrons informé si tu termines sur le podium, afin que tu viennes chercher ta récompense.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;">
                          <p style="margin:0;margin:1% 0;font-weight:600;color:#355E7E;">Nous espérons que l\'expérience t\'a plû et que tu voudras en savoir plus à propos de la programmation et du développement web.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="vertical-align:top;">
                          <p style="margin:0;margin:1% 0;font-weight:600;color:#355E7E;">À très vite,<br>
                            L\'équipe de développement</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table border="0" cellpadding="0" cellspacing="0" class="footer" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;margin:3% 0;text-align:center;">
                    <tr>
                      <td style="vertical-align:top;">
                        <img src="http://vincentdeplais.fr/toddle/img/logo_color_avec.png" alt="agence" style="border:none;-ms-interpolation-mode:bicubic;max-width:100%;display:inline-block;width:20%;vertical-align:middle;">
                        <img src="http://vincentdeplais.fr/toddle/img/logo_pompidou.png" alt="pompidou" style="border:none;-ms-interpolation-mode:bicubic;max-width:100%;display:inline-block;width:20%;vertical-align:middle;">
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </td>
        <td style="vertical-align:top;">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
     ';

     // Pour envoyer un mail HTML, l'en-tête Content-type doit être défini
     $headers  = 'MIME-Version: 1.0' . "\r\n";
     $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

     // En-têtes additionnels
     $headers .= 'From: Toddle <concours.toddle@gmail.com>' . "\r\n";
     $headers .= "Content-Transfer-Encoding: 8bit\r\n";

     // Envoi
     mail($to, $subject, $message, $headers);
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
        if($nbr == 1 && $nbr == 21 && $nbr == 31 && $nbr == 41 && $nbr == 51 && $nbr == 61 && $nbr == 71 && $nbr == 81 && $nbr == 91 && $nbr == 101  ){
            $place = "st";
        } elseif ($nbr == 2 && $nbr == 22 && $nbr == 32 && $nbr == 42 && $nbr == 52 && $nbr == 62 && $nbr == 72 && $nbr == 82 && $nbr == 92 && $nbr == 102 ) {
          $place = "nd";
        } elseif ($nbr == 3 && $nbr == 23 && $nbr == 33 && $nbr == 43 && $nbr == 53 && $nbr == 63 && $nbr == 73 && $nbr == 83 && $nbr == 93 && $nbr == 103 ) {
          $place = "rd";
        } else {
            $place = "th";
        }
    }
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
    <link rel="stylesheet" href="../stylesheets/result.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
    ?>
    <div class="container">
       <header>
            <img src="../img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="../img/toddle_text.png" alt="toddle" class="toddle_text">
        </header>
        <div class="content">
            <p class="announce">Congratulations <span><?php echo $_SESSION['pseudo']; ?></span> !<br>You’ve solved all the puzzles <br>within <span id="minResult"><?php echo $_SESSION['min'];?> minutes</span> and <span id="secResult"><?php echo $_SESSION['sec'];?> seconds</span>.<br>You’ve reached the <span><?php echo $_SESSION['nbrUser'].$place; ?></span> place ! </p>
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
                    <p>A prize will be given to the fastest ones amongst all the participants</p>
                    <hr class="trait">
                    <p>If you wish to be kept updated of the ranking, consider giving us your email.</p>
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
                <label for="pseudo">Think about let your email address</label>
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
                <p>Adresse email bien enregistrée</p>
                </div>";
            }
        ?>
        
    </div> <!-- .container -->
  
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/chrono.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
              $('.listeUser').on('touchmove', function (e) { e.stopPropagation(); }); // Allow scroll
          
              $(".blocEmail").animate({
                top: "5%"
              }, 1500, function() {
                setTimeout(function(){
                    $(".blocEmail").animate({
                        top: "-30%"
                    }, 1500);
                }, 500);
              });
            
            $(document).on("touchstart", function (e) {
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
            $(".sendMail").on("touchstart", function(e) {
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