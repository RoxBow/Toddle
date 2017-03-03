<?php

include '../login.php';

if(isset($_POST['pseudo'])){
    // Get all pseudo users
    $result = $bdd->prepare("SELECT pseudo FROM user");
    $result->execute();

    $pseudo = trim($_POST['pseudo']); // Remove space before and after string
    $pseudo = strip_tags($pseudo); // Supprime les balises HTML et PHP d'une chaîne
    
    // Check error pseudo
    $error = null;
    if (strlen($pseudo) < 3){
        $error = "Pseudo trop court (entre 3 et 10 caractères).";
    }
    else if (strlen($pseudo) > 10){
        $error = "Pseudo trop long (entre 3 et 10 caractères).";
    }
    else {
        while ($row = $result->fetch(PDO::FETCH_ASSOC)){
            if(strtolower($pseudo) === strtolower($row['pseudo']) ){
                $error = "Pseudo déjà utilisé";
                break;
            }
        }
    }
    
    // No error then save pseudo
    if($error == null) {
        $_SESSION['pseudo'] = $pseudo;
        $request = $bdd->prepare("INSERT INTO user (pseudo) VALUES ('".$_SESSION['pseudo']."')"); // prepare command 
        $request->execute(); // Add pseudo to DB
        header('Location: tuto.php');
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
    <link rel="stylesheet" href="../stylesheets/name.css" media="all">
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
        <div class="container_form">
            <form action="" method="post">
                <label for="pseudo">Choose a username</label>
                <input required type="text" name="pseudo" id="pseudo" placeholder="Username" autocomplete="off" />
                <p class="error"> <?php echo $error; ?></p>
                <button name="submit" type="submit" >
                    <span class="fa-stack ">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-check fa-stack-1x fa-inverse" aria-hidden="true"></i>
                    </span>
                </button>
            </form>
        </div>
        <?php
            include 'footer.php';
        ?>
    </div>
    
    <script src="../js/jquery-3.1.1.min.js"></script>
    <script src="../js/global.js"></script>
    <script src="../js/chrono.js"></script>
    <script type="text/javascript">
        // Reset timer & level
        localStorage.setItem("seconde", 0);
        localStorage.setItem("minute", 0);
        localStorage.setItem("levelUser", 1);
    </script>
</body>
</html>