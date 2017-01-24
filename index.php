<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Toodle - Interactive game</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Full Screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
    <script type="text/javascript" charset="utf-8" src="js/appframework.ui.min.js"></script>
    <link rel="stylesheet" href="stylesheets/index.css" media="all">
</head>
<body>
    <?php
        include 'credits.php';
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
            <button type="button" class="launch">COMMENCER L'EXPÉRIENCE</button>
        </div>
        <?php
            include 'footer.php';
        ?>
    </div>
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/global.js"></script>
    <script>
        $(document).ready(function () {
             // button launch experience
            $(".launch", ".container").click(function () {
                location.href = "name.php";
            });
        });
    </script>
</body>
</html>