<?php

include 'login.php';

if(isset($_POST['pseudo'])){
    // Get all pseudo users
    $result = $bdd->prepare("SELECT pseudo FROM user");
    $result->execute();

    // Check error pseudo
    $error = null;
    if (strlen($_POST['pseudo']) < 3){
        $error = "Pseudo trop court (entre 3 et 10 caractères).";
    }
    else if (strlen($_POST['pseudo']) > 10){
        $error = "Pseudo trop long (entre 3 et 10 caractères).";
    }
    else {
        while ($row = $result->fetch(PDO::FETCH_ASSOC)){
            if($_POST['pseudo'] === $row['pseudo']){
                $error = "Pseudo déjà utilisé.";
                break;
            }
        }
    }
    
    // No error then save pseudo
    if(strlen($error) == null) {
        $_SESSION['pseudo'] = $_POST['pseudo'];
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
            <form action="" method="post">
                <label for="pseudo">Veuillez choisir un pseudo</label>
                <input required type="text" name="pseudo" id="pseudo" placeholder="Pseudo" />
                <p class="error"> <?php echo $error; ?></p>
                <button name="submit" type="submit" >
                    <span class="fa-stack ">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-check fa-stack-1x fa-inverse" aria-hidden="true"></i>
                    </span>
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