<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Toodle - Interactive game</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="stylesheets/index.css" media="all">
    
    <link rel="apple-touch-icon" sizes="125x125" href="img/iconewebclip.png"> <!-- Icon webclip -->
    <link rel="icon" type="image/png" href="img/iconewebclip.png" />
    <meta name="apple-mobile-web-app-title" content="Toddle"> <!-- Name webclip -->
</head>
<body>
    <?php
        include 'fr/credits.php';
    ?>
    <div class="container">
          <div class="cs-loader-inner">
            <label>	●</label>
            <label>	●</label>
            <label>	●</label>
            <label>	●</label>
            <label>	●</label>
            <label>	●</label>
          </div>
        <div class="content">
            <img src="img/logo_toddle.png" alt="toddle" class="logo_toddle" />
            <div class="blocBtn">
               <div class="btnChoice">
                   <button type="button" class="lang selected" value="french">FRANÇAIS</button>
                    <button type="button" class="lang" value="english">ENGLISH</button>
               </div>
                <button type="button" class="launch" id="startFrench">COMMENCER L'EXPÉRIENCE</button>
                
            </div>
            <button id="validLang" class="valide">
                <span class="fa-stack ">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-check fa-stack-1x fa-inverse" aria-hidden="true"></i>
                </span>
            </button>
        </div>
        <?php
            include 'fr/footer.php';
        ?>
    </div>
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/global.js"></script>
    <script>
        $(document).ready(function () {
            $(".lang",".blocBtn").click(function () {
                if(!$(this).hasClass("selected")){
                    $(".lang").toggleClass("selected");
                }
            });
            
            $(".launch", ".content").click(function () {
                $(this).animate({
                    left: "100%",
                    opacity: 0
                }, 700, "linear", function() {
                    $(this).css("display","none");
                    $(".btnChoice, .valide",".content").css("display","flex");
                    
                    $(".btnChoice, .valide",".content").animate({
                        right: "0%",
                        opacity: 1
                    });
                });
            });
            
             // button launch experience
            $("#validLang .fa", ".container").click(function () {
                if($(".selected").attr("value") == "french"){
                    location.href = "fr/name.php";
                }
                else if($(".selected").attr("value") == "english") {
                    location.href = "en/name.php";
                }
            });
        });
    </script>
</body>
</html>