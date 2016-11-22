<?php 

session_start();

if( !isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

?>

<!doctype html>
<html class="no-js" lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Toodle - Interactive game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheets/oeuvre.css" media="all">
</head>
<body>
    <div class="container">
       <header>
            <img src="img/toddle_form.png" alt="toddle" class="toddle_form">
            <img src="img/toddle_text.png" alt="toddle" class="toddle_text">
            <p class="name"><?php echo $_SESSION['pseudo']; ?></p>
        </header>
        <div id="jeu">
          <section class="leftBloc">
              <canvas id="canvas" class="box drag-target"></canvas>
          </section>
          <section class="rightBloc">
              <div class="codeBloc">
                  <h2>Code</h2>
                  <div>
                      <p>function myFunction(p1, p2) {<br>return p1 * p2; <br>}</p>
                  </div>
                  <button>Valider mon oeuvre <i class="fa fa-play-circle fa-3x" aria-hidden="true"></i></button>
              </div>
              <div class="etiqBloc" id="etiqBloc">
                  <h2>Étiquettes</h2>
                  <div class="etiq" id="vert">ChangerEnVert()</div>
                  <div class="etiq" id="rouge">ChangerEnRouge()</div>
                  <div class="etiq" id="jaune">ChangerEnJaune()</div>
                  <div class="etiq" id="carre">MettreUnCarré()</div>
                  <div class="etiq" id="violet">ChangerEnViolet()</div>
                  <div class="etiq" id="rond">MettreUnCercle()</div>
<!--                   <div class="etiq" id="cercle">Cercle()</div>
                  <div class="etiq" id="violet">Violet()</div> -->
              </div>
          </section>
        </div>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/hammer-time.min.js"></script>
<!--     <script src="code.jquery.com/ui/1.10.4/jquery-ui.js"></script>-->    
        <!--<script src="js/main.js"></script>-->
    <script src="js/global.js"></script>
    <script src="js/oeuvre.js"></script>
    <script>
      $( document ).ready(function() {
        var jeu = document.getElementById("jeu");
        var etiqBloc = document.getElementById("etiqBloc");
        var element = vert;
        var element2 = rouge;
        var element3 = jaune;
        var element4 = carre;
        var element5 = violet;
        var element6 = rond;
          /*POUR LE DRAG, IDEE DE LA DIFFERENCE DE DEPLACEMENT, ECRIRE SA SUR UN PAPIER ET UN CRAYON DEMAIN !*/
          /*Drag & drop du bouton vert*/

        var hammertime = new Hammer(element);
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        var tapX, tapY;
            hammertime.on('pan', function(e) {
                tapX = e.center.x;
                tapY = e.center.y;

                element.style.left = (tapX-100) + "px";
                element.style.top = (tapY-50) + "px";
            });
            hammertime.on('panend', function(e) {
                if ((tapX>0 && tapX<canvas.width)&&(tapY>0 && tapY<canvas.height)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#CBE6A3";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element.style.display = "none";
                } else{
                    element.style.left = "51%";
                    element.style.top = "59%";
                }
            });

            /*Drag & drop du bouton rouge*/

        var hammertime2 = new Hammer(element2);
        hammertime2.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            hammertime2.on('pan', function(e) {

                tapX = e.center.x;
                tapY = e.center.y;
                console.log(tapX+"---"+tapY);
                element2.style.left = (tapX-350) + "px";
                element2.style.top = (tapY-50) + "px";
            });
            hammertime2.on('panend', function(e) {
                if ((tapX>0 && tapX<canvas.width)&&(tapY>0 && tapY<canvas.height)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#AA1123";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element2.style.display = "none";
                } else{
                    element2.style.left = "51%";
                    element2.style.top = "59%";
                }
            });

            /*Drag & drop du bouton jaune*/

        var hammertime3 = new Hammer(element3);
        hammertime3.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            hammertime3.on('pan', function(e) {

                tapX = e.center.x;
                tapY = e.center.y;

                element3.style.left = (tapX-100) + "px";
                element3.style.top = (tapY-100) + "px";
            });
            hammertime3.on('panend', function(e) {
                if ((tapX>0 && tapX<canvas.width)&&(tapY>0 && tapY<canvas.height)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#F8CB00";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element3.style.display = "none";
                } else{
                    element3.style.left = "51%";
                    element3.style.top = "59%";
                }
            });
      });


    </script>
</body>
</html>