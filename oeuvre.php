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

            <div class="etiqBloc">
                <h2>Étiquettes</h2>
                <div class="etiq" id="vert" draggable="true">Vert()</div>
                <div class="etiq" id="rouge" draggable="true">Rouge()</div>
                <div class="etiq" id="jaune" draggable="true">Jaune()</div>
            </div>
        </section>
    </div>
    
    <script src="js/jquery-3.1.1.min.js"></script>
<<<<<<< HEAD
    <script src="js/hammer-time.min.js"></script>
    <script srx="code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <!--<script src="js/main.js"></script>-->
    <script src="js/global.js"></script>
    <script src="js/oeuvre.js"></script>
    <script>
        /*var element = document.getElementById('vert');
        Hammer(element).on("tap", function(event) {
            alert('hello!');
        });
        Hammer(element).on("doubletap", function(event) {
            alert('ntm!');
        });
        Hammer($('.etiq').get(0)).on('dragstart', function(event) {
            console.log('dragstart', event);
            alert("tamere");
        });

        Hammer($('.etiq').get(0)).on('drag', function(event){
          // console.log('drag', event.gesture.deltaX, event.gesture.deltaY)
          var target = event.target;
          $(target).css({
            'transform': 'translate(' + event.gesture.deltaX + 'px,' + event.gesture.deltaY + 'px)'
          });
        });

        Hammer(document.body).on('release', function(event){
          console.log('release', event);
          event.gesture.preventDefault()
        });

        Hammer(document.body).on('dragend', function(event) {
          console.log('dragend', event);
          
          $(event.target).css({'transform': 'translate(0,0)'});
          debugger;
          var dropEl = document.elementFromPoint(event.gesture.center.pageX, event.gesture.center.pageY);
          console.log('dropped on', dropEl);
          if ($(dropEl).hasClass('drop-target')) {
            console.log('dropped on drop target');
          }
        })
        $(document.body).on('mousedown', '[draggable]', function(event){

          console.log('mousedown', event);
        })
        $(document.body).on('mouseup', '[draggable]', function(event){
          
          console.log('mouseup', event);
          event.preventDefault()
        })*/
      function touchHandler(event)
      {
          var touches = event.changedTouches,
              first = touches[0],
              type = "";
           
          switch(event.type)
          {
              case "touchstart": type = "mousedown";break;
              case "touchmove":  type="mousemove"; break;       
              case "touchend":   type="mouseup"; break;
              default: return;
          }
          var simulatedEvent = document.createEvent("MouseEvent");
          simulatedEvent.initMouseEvent(type, true, true, window, 1,
                                    first.screenX, first.screenY,
                                    first.clientX, first.clientY, false,
                                    false, false, false, 0/*left*/, null);
           
          first.target.dispatchEvent(simulatedEvent);
          event.preventDefault();
      }
       
      function initTouch()
      {
         document.addEventListener("touchstart", touchHandler, true);
         document.addEventListener("touchmove", touchHandler, true);
         document.addEventListener("touchend", touchHandler, true);
         document.addEventListener("touchcancel", touchHandler, true);   
      }
      $(document).ready(function (){initTouch();});
    </script>
=======
    <script src="js/global.js"></script>
    <script src="js/oeuvre.js"></script>
    <script src="js/hammer.min.js"></script>
>>>>>>> 2171ed3fad9766e584bc5ff3ab1479ea2bb63dbf
</body>
</html>