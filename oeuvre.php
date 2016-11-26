<?php 

session_start();

if( !isset($_SESSION['pseudo']) ){
    header("location: name.php");
}

/*
### Chrono mode PHP ###
$start = new DateTime($_SESSION['start']); // put old date in date object

$_SESSION['end'] = date("h:i:s"); // get actual date
$end = new DateTime($_SESSION['end']); // put actual date in date object

$interval = $start->diff($end); // put diff date in interval
print $interval->format("Tu as mis %H:%I:%S"); // display diff between date
*/

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
            <div class="blockRight">
                <p class="name"><?php echo $_SESSION['pseudo']." - "; ?></p>
                <form name="chrono" class="chrono">
                    <input type="text" name="minute" id="min">min
                    <input type="text" name="seconde" id="sec">s
                </form>
           </div>
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
    <script src="js/chrono.js"></script>
    <script>
    
      $( document ).ready(function() {


        
        var etiqBloc = document.getElementById("etiqBloc");
        var element = document.getElementById("vert");
        var element2 = document.getElementById("rouge");
        var element3 = document.getElementById("jaune");
        var element4 = document.getElementById("carre");
        var element5 = document.getElementById("rond");
        var element6 = document.getElementById("violet");
        var startX, startY, startEX, startEY, tapX, tapY, mouseX, mouseY, left, top;

          /*POUR LE DRAG, IDEE DE LA DIFFERENCE DE DEPLACEMENT, ECRIRE SA SUR UN PAPIER ET UN CRAYON DEMAIN !*/

          /*Drag & drop du bouton vert*/

        var hammertime = new Hammer(element);
        hammertime.on('panstart',function(e){
            startX = e.center.x;
            startY = e.center.y;
            gauche = element.offsetLeft;;
            droite = element.offsetTop;;
        });

        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammertime.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              tapX = -(startX-(e.center.x));
              tapY = -(startY-(e.center.y));
              startEX = tapX;
              startEY = tapY;
              element.style.left = (mouseX - element.offsetWidth/2)+"px";
              element.style.top = (mouseY- element.offsetHeight)+"px";
        });

        hammertime.on('panend', function(e) {
            console.log('cest fini');
                if ((mouseX>0 && mouseX<canvas.width)&&(mouseY>0 && mouseY<canvas.height)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#276D2A";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  //element.style.display = "none";
                  element.style.left = "51.5%";
                  element.style.top = "58%";
                } else{
                    element.style.left = "51.5%";
                    element.style.top = "58%";
                }
        });

            /*Drag & drop du bouton rouge*/

        var hammertime2 = new Hammer(element2);
        hammertime2.on('panstart',function(e){
            startX = e.center.x;
            startY = e.center.y;
            gauche = element.offsetLeft;;
            droite = element.offsetTop;;
        });

        hammertime2.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammertime2.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              tapX = -(startX-(e.center.x));
              tapY = -(startY-(e.center.y));
              startEX = tapX;
              startEY = tapY;
              console.log(element, element.offsetWidthcfd);
              element2.style.left = (mouseX - element2.offsetWidth*1.75)+"px";
              element2.style.top = (mouseY- element2.offsetHeight*1)+"px";
        });

        hammertime2.on('panend', function(e) {
            console.log('cest fini');
                if ((mouseX>0 && mouseX<canvas.width)&&(mouseY>0 && mouseY<canvas.height)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#ED1C24";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  //element2.style.display = "none";
                  element2.style.left = "51.5%";
                  element2.style.top = "58%";
                } else{
                    element2.style.left = "51.5%";
                    element2.style.top = "58%";
                }
        });

            /*Drag & drop du bouton jaune*/

        var hammertime3 = new Hammer(element3);
        hammertime3.on('panstart',function(e){
            startX = e.center.x;
            startY = e.center.y;
            gauche = element.offsetLeft;;
            droite = element.offsetTop;;
        });
        hammertime3.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            hammertime3.on('pan', function(e) {
                mouseX = e.center.x;
              mouseY = e.center.y ;
              tapX = -(startX-(e.center.x));
              tapY = -(startY-(e.center.y));
              startEX = tapX;
              startEY = tapY;
              console.log(element, element.offsetWidthcfd);
              element3.style.left = (mouseX - element3.offsetWidth/2)+"px";
              element3.style.top = (mouseY- element3.offsetHeight*2.5)+"px";
            });
            hammertime3.on('panend', function(e) {
            console.log('cest fini');
                if ((mouseX>0 && mouseX<canvas.width)&&(mouseY>0 && mouseY<canvas.height)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#FECC0B";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  //element3.style.display = "none";
                  element3.style.left = "51.5%";
                  element3.style.top = "58%";
                } else{
                    element3.style.left = "51.5%";
                    element3.style.top = "58%";
                }
            });

      /*Drag & drop du bouton carre*/

        var hammertime4 = new Hammer(element4);
        hammertime4.on('panstart',function(e){
            startX = e.center.x;
            startY = e.center.y;
            gauche = element.offsetLeft;;
            droite = element.offsetTop;;
        });

        hammertime4.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammertime4.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              tapX = -(startX-(e.center.x));
              tapY = -(startY-(e.center.y));
              startEX = tapX;
              startEY = tapY;
              element4.style.left = (mouseX - element4.offsetWidth*1.75)+"px";
              element4.style.top = (mouseY- element4.offsetHeight*2.5)+"px";
        });

        hammertime4.on('panend', function(e) {
            console.log('cest fini');
                if ((mouseX>0 && mouseX<canvas.width)&&(mouseY>0 && mouseY<canvas.height)) {
                  ctx.beginPath();
                  ctx.strokeStyle="white";
                  ctx.lineWidth=4;
                  ctx.rect(mouseX-50, mouseY-(window.innerHeight*15/100)-65, 100, 100);
                  ctx.stroke();
                  //element4.style.display = "none";
                  element4.style.left = "51.5%";
                  element4.style.top = "58%";
                } else{
                    element4.style.left = "51.5%";
                    element4.style.top = "58%";
                }
        });

        /*Drag & drop du bouton pour le cercle*/

        var hammertime5 = new Hammer(element5);
        hammertime5.on('panstart',function(e){
            startX = e.center.x;
            startY = e.center.y;
            gauche = element.offsetLeft;;
            droite = element.offsetTop;;
        });
        hammertime5.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            hammertime5.on('pan', function(e) {
                mouseX = e.center.x;
              mouseY = e.center.y ;
              tapX = -(startX-(e.center.x));
              tapY = -(startY-(e.center.y));
              startEX = tapX;
              startEY = tapY;

              element5.style.left = (mouseX - element5.offsetWidth/2)+"px";
              element5.style.top = (mouseY- element5.offsetHeight*3.75)+"px";
            });
            hammertime5.on('panend', function(e) {
            console.log('cest fini');
                if ((mouseX>0 && mouseX<canvas.width)&&(mouseY>0 && mouseY<canvas.height)) {
                  ctx.beginPath();
                  ctx.strokeStyle="white";
                  ctx.lineWidth=4;
                  ctx.arc(mouseX-25,mouseY-(window.innerHeight*15/100),100,0,2*Math.PI);
                  ctx.stroke();
                  //element5.style.display = "none";
                  element5.style.left = "51.5%";
                    element5.style.top = "58%";
                } else{
                    element5.style.left = "51.5%";
                    element5.style.top = "58%";
                }
            });

        /*Drag & drop du pour le changement en violet*/

        var hammertime6 = new Hammer(element6);
        hammertime6.on('panstart',function(e){
            startX = e.center.x;
            startY = e.center.y;
            gauche = element.offsetLeft;;
            droite = element.offsetTop;;
        });

        hammertime6.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammertime6.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              tapX = -(startX-(e.center.x));
              tapY = -(startY-(e.center.y));
              startEX = tapX;
              startEY = tapY;
              element6.style.left = (mouseX - element6.offsetWidth*1.75)+"px";
              element6.style.top = (mouseY- element6.offsetHeight*3.75)+"px";
        });

        hammertime6.on('panend', function(e) {
            console.log('cest fini');
                if ((mouseX>0 && mouseX<canvas.width)&&(mouseY>0 && mouseY<canvas.height)) {
                  ctx.fillStyle="#9F00FF";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element6.style.display = "none";
                } else{
                    element6.style.left = "51.5%";
                    element6.style.top = "58%";
                }
        });
            /*Fin document.ready()*/
      });

    </script>
</body>
</html>