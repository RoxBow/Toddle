<?php 

if(isset($_SESSION['pseudo'])){
    header("location: map.php");
}

?>

<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Application web</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheets/accueil.css" media="all">
</head>
<body>
    <div class="container">
        <div class="overlay" style="display:none;">
            <div class="containerForm">
                <p>Choisir un pseudo pour débuter l'aventure.</p>
                <form action="login.php" method="post">
                    <label for="pseudo">Pseudo:</label>
                    <input type="text" name="pseudo" id="pseudo"/>
                    <input type="submit" value="Valider" name="submit">
                </form>
            </div>
        </div>
        
        <button type="button" class="launch">COMMENCER L'EXPÉRIENCE</button>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>