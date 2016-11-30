<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Application web</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheets/name.css" media="all">
</head>
<body>
    <div class="container">
        <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
        </header>
        <div class="container_form">
            <form onsubmit="event.preventDefault(); validateMyForm();" action="login.php" method="post">
                <label for="pseudo">Veuillez choisir un pseudo</label>
                <input required type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
                <button name="submit" type="submit" >
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/chrono.js"></script>
    <script>
        // Reset timer
        localStorage.setItem("seconde", 0);
        localStorage.setItem("minute", 0);
    </script>
</body>
</html>