
var jeu = document.getElementById("jeu");
var leftBloc = document.getElementById("leftBloc");
var indicecontent = document.getElementById("indicecontent");

/*Le canvas de travail*/
ctx.fillStyle="#002FA7";
ctx.fillRect(0,0,canvas.width,canvas.height);

/*Le canvas d'objectif*/
ctx2.fillStyle="#9F00FF";
ctx2.fillRect(0,0,canvas2.width,canvas2.height);

ctx2.beginPath();
ctx2.strokeStyle="white";
ctx2.lineWidth=4;
ctx2.rect(30, 20, 85, 85);
ctx2.rect(135, 20, 85, 85);
ctx2.rect(30, 125, 85, 85);
ctx2.stroke();

/*On récupère les données du canvas d'objectif*/
var avalider = canvas2.toDataURL();


/* #####    CHRONO      ##### */

// Update time script
sec = localSec;
min = localMin;

// When page is left
$(window).bind('beforeunload',function(){
    localStorage.setItem("seconde", $("#sec").val() );
    localStorage.setItem("minute", $("#min").val() );
});

$(document).ready(function() {
    /* ### CHRONO ### */
    $("#sec").val(localSec);
    $("#min").val(localMin);
    chrono();
});

/*Intéractions sur la page*/


      $( document ).ready(function() {

      	cPush();
        
        var etiqBloc = document.getElementById("etiqBloc");
        var undo = document.getElementById("undo");
        var valider = document.getElementById("valider");
        var indice = document.getElementById("indice");
        var but = document.getElementById("but");
        var element = document.getElementById("vert");
        var element2 = document.getElementById("rouge");
        var element3 = document.getElementById("jaune");
        var element4 = document.getElementById("carre");
        var element5 = document.getElementById("rond");
        var element6 = document.getElementById("violet");
        var offleft = $("#jeu").css("padding-left").slice(0,2);
        var offset = $("#leftBloc").offset();
        var mouseX, mouseY;

        var actif;

        var hm = new Hammer(undo);
        var hm2 = new Hammer(valider);
        var hm3 = new Hammer(indice);
        var hm4 = new Hammer(but);

        	/*Réactions au touch*/

        hm.on('tap', function(e) {
            cUndo();
            $("#undo").toggleClass('bluebouton');
            setTimeout(function(){
                $('#undo').toggleClass('bluebouton');
              },150);
        });

        hm2.on('tap', function(e) {
            var validation = canvas.toDataURL();
            $("#valider").toggleClass('bluebouton');
            setTimeout(function(){
                $('#valider').toggleClass('bluebouton');
              },150);
            resemble(avalider).compareTo(validation).onComplete(function(data){
              if (data.misMatchPercentage<40.00) {
                $('#win').fadeIn(500);

              } else{
                $('#loose').fadeIn(500);
                $('.wrap2').toggleClass('active');
                $('#but').toggleClass('bluebouton');
                $('.overlay').fadeToggle();
              }
            });
        });

        $("#continuer").click(function(){
          window.location.replace("result.php");
        });

        $("#rechercher").click(function(){
          $('#loose').fadeOut(500);
        });

        hm3.on('tap', function(e) {
          /*Affichage Pop-up*/

          if ($('.wrap2').hasClass('active')) {

            $('.wrap2').toggleClass('active');
            $('#but').toggleClass('bluebouton');
              /*Enlever les deux overlay suivant pour lanimation de 
              transition entre les deux pop-up, si le noir doit disparaitre, ou pas*/
            $('.overlay').fadeToggle();

            setTimeout(function(){
                $('.wrap').toggleClass('active');
                $('#indice').toggleClass('bluebouton');
                $('.overlay').fadeToggle();
              },700);

          } else{
            $('.wrap').toggleClass('active');
            $('#indice').toggleClass('bluebouton');
             $('.overlay').fadeToggle();
          }

          /*Réaction du bouton*/
        });

        hm4.on('tap', function(e) {

          if ($('.wrap').hasClass('active')) {

            $('.wrap').toggleClass('active');
            $('#indice').toggleClass('bluebouton');
            $('.overlay').fadeToggle();

              setTimeout(function(){
                $('.wrap2').toggleClass('active');
                $('#but').toggleClass('bluebouton');
                $('.overlay').fadeToggle();
              },700);
          } else {
            $('.wrap2').toggleClass('active');
            $('#but').toggleClass('bluebouton');
            $('.overlay').fadeToggle();
          }
        });

          /*Drag & drop du bouton vert*/

        var hammertime = new Hammer(element);

        hammertime.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element.style.backgroundColor=pinkToddle;
              element.style.left = (mouseX - element.offsetWidth/2)+"px";
              element.style.top = (mouseY- element.offsetHeight)+"px";
        });

        hammertime.on('panend', function(e) {
          element.style.backgroundColor=bleuToddle;
          if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop && mouseY<canvas.height+offset.top)) {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle="#276D2A";
            ctx.fillRect(0,0,canvas.width,canvas.height);
            element.style.left = "51%";
            element.style.top = "52.5%";
            cPush();
          } else{
              element.style.left = "51%";
              element.style.top = "52.5%";
          }
        });

            /*Drag & drop du bouton rouge*/

        var hammertime2 = new Hammer(element2);

        hammertime2.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y;
              element2.style.backgroundColor=pinkToddle;
              element2.style.left = (mouseX - element2.offsetWidth*1.75)+"px";
              element2.style.top = (mouseY- element2.offsetHeight*1)+"px";
        });

        hammertime2.on('panend', function(e) {
            element2.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop&& mouseY<canvas.height+offset.top)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#ED1C24";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element2.style.left = "51%";
                  element2.style.top = "52.5%";
                  cPush();
                } else{
                    element2.style.left = "51%";
                    element2.style.top = "52.5%";
                }
        });

            /*Drag & drop du bouton jaune*/

        var hammertime3 = new Hammer(element3);

            hammertime3.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element3.style.backgroundColor=pinkToddle;
              element3.style.left = (mouseX - element3.offsetWidth/2)+"px";
              element3.style.top = (mouseY- element3.offsetHeight*2.75)+"px";
            });
            hammertime3.on('panend', function(e) {
            element3.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop&& mouseY<canvas.height+offset.top)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#FECC0B";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element3.style.left = "51%";
                  element3.style.top = "52.5%";
                  cPush();
                } else{
                    element3.style.left = "51%";
                    element3.style.top = "52.5%";
                }
            });

      /*Drag & drop du bouton carre*/

        var hammertime4 = new Hammer(element4);

        hammertime4.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element4.style.backgroundColor=pinkToddle;
              element4.style.left = (mouseX - element4.offsetWidth*1.75)+"px";
              element4.style.top = (mouseY- element4.offsetHeight*2.75)+"px";
        });

        hammertime4.on('panend', function(e) {
            element4.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop && mouseY<canvas.height+offset.top)) {
                  ctx.beginPath();
                  ctx.strokeStyle="white";
                  ctx.lineWidth=4;
                  ctx.rect(mouseX-50, mouseY-(window.innerHeight*15/100)-65, 100, 100);
                  ctx.stroke();
                  element4.style.left = "51%";
                  element4.style.top = "52.5%";
                  cPush();
                } else{
                    element4.style.left = "51%";
                    element4.style.top = "52.5%";
                }
        });

        /*Drag & drop du bouton pour le cercle*/

        var hammertime5 = new Hammer(element5);

            hammertime5.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element5.style.backgroundColor=pinkToddle;
              element5.style.left = (mouseX - element5.offsetWidth/2)+"px";
              element5.style.top = (mouseY- element5.offsetHeight*4.5)+"px";
            });
            hammertime5.on('panend', function(e) {
                element5.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop&& mouseY<canvas.height+offset.top)) {
                  ctx.beginPath();
                  ctx.strokeStyle="white";
                  ctx.lineWidth=4;
                  ctx.arc(mouseX-25,mouseY-(window.innerHeight*15/100),100,0,2*Math.PI);
                  ctx.stroke();
                  element5.style.left = "51%";
                  element5.style.top = "52.5%";
                  cPush();
                } else{
                    element5.style.left = "51%";
                    element5.style.top = "52.5%";
                }
            });

        /*Drag & drop du pour le changement en violet*/

        var hammertime6 = new Hammer(element6);

        hammertime6.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y;
              element6.style.backgroundColor=pinkToddle;
              element6.style.left = (mouseX - element6.offsetWidth*1.75)+"px";
              element6.style.top = (mouseY- element6.offsetHeight*4.5)+"px";
        });

        hammertime6.on('panend', function(e) {
                element6.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop&& mouseY<canvas.height+offset.top)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#9F00FF";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element6.style.left = "51%";
                  element6.style.top = "52.5%";
                  cPush();
                } else{
                    element6.style.left = "51%";
                    element6.style.top = "52.5%";
                }
        });

        /*Fin document.ready()*/
});

/*functions for undo*/

var cPushArray = new Array();
var cStep = -1;

function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { 
    	cPushArray.length = cStep; 
    }
    cPushArray.push(canvas.toDataURL());
}

function cUndo() {
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
    }
}