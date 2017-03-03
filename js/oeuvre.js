
var jeu = document.getElementById("jeu");
var leftBloc = document.getElementById("leftBloc");
var indicecontent = document.getElementById("indicecontent");

//Initialisations
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Affectations
canvas.width = leftBloc.offsetWidth;
canvas.height = leftBloc.offsetHeight;

/*Le canvas de travail*/
ctx.fillStyle="#FFF";
ctx.fillRect(0,0,canvas.width,canvas.height);

var validation = 0,
    verification = 0,
    verification2 = 2,
    cpush = 0,
    tuto = 0;

// Update time script
sec = localSec;
min = localMin;

// When page is left
$(window).bind('beforeunload',function(){
    localStorage.setItem("seconde", $("#sec").val() );
    localStorage.setItem("minute", $("#min").val() );
});

/*Intéractions sur la page*/

      $(document).ready(function() {
          /* ### CHRONO ### */
            $("#sec").val(localSec);
            $("#min").val(localMin);
            chrono();
      	
        /*######################################"*/

        function touche() {
          if (tuto==0) {
            $("#handclick").css("animation-play-state","paused");
            $("#handclick").css("display","none");
            tuto=1;
          }
        }

        document.body.addEventListener('touchstart', touche, false);

        cPush();
        
        var etiqBloc = document.getElementById("etiqBloc");
        var valider = document.getElementById("valider");
        var element = document.getElementById("rectangle");
        var element2 = document.getElementById("rouge");
        var element3 = document.getElementById("jaune");
        var element4 = document.getElementById("carre");
        var element5 = document.getElementById("rond");
        var element6 = document.getElementById("violet");
        var offleft = $("#jeu").css("padding-left").slice(0,2);
        var offset = $("#leftBloc").offset();
        var mouseX, mouseY;


        $("#undo").on("touchstart", function(){
          if (cpush==0) {
            cUndo();
          }
          if (cpush==1) {
            cUndo2();
          }
        });

        $("#valider").on("touchstart", function(){
          if (validation==0 && verification ==1) {
            $( "#rectangle,#carre,#rond" ).css("z-index","5");
            $( "#rouge,#jaune,#violet" ).css("display","block");
            $( "#secondeconsigne").toggle("slide");
            $( "#rectangle,#carre,#rond" ).css("display","none");
            setTimeout(function(){
                if(dir == "fr"){
                    $("#secondeconsigne").text("Maintenant que le cadre est déterminé, glisse la bonne couleur dans ton rectangle pour finaliser le tableau de Yves Klein.");
                }
                else {
                    $("#secondeconsigne").text("Now that you have set up the border, drag and drop the right colour in the rectangle pour to complete Yves Klein's painting");
                }
              $( "#secondeconsigne").toggle("slide");
              $( "#rectangle,#carre,#rond,#rouge,#jaune,#violet" ).animate({
                left: "2.5%",
              }, 500);
            }, 500);
            validation=1;
            cpush=1;
            cPush2();
          } else{
            if (validation==0 && verification==0) {
              $('#loose').fadeIn(500);
            } else{
                if (validation==1 && verification2 ==0) {
                    $('#loose').fadeIn(500);
                } else{
                  if (validation==1 && verification2==1) {
                    $('#win').fadeIn(500);
                  } else{
                    $('#loose').fadeIn(500);
                  }
                }
            }
          }
        });

          // Redirection or not after level complete
        $(".continuer").on("touchstart", function(){
            if(levelUser < 5){
                nbrLevel++;
                localStorage.setItem("levelUser", nbrLevel);
                localStorage.setItem("seconde", $("#sec").val() );
                localStorage.setItem("minute", $("#min").val() );
                document.location.replace("map.php");
            }
            else {
                document.location.replace("result.php");
            }
        });

        $(".rechercher").on("touchstart", function(){
          $('#loose').fadeOut(500);
        });

          /*Drag & drop du bouton rectangle*/

        var hammertime = new Hammer(element);
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });


        hammertime.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element.style.backgroundColor=pinkToddle;
              element.style.left = (mouseX - element.offsetWidth/2)+"px";
              element.style.top = (mouseY- element.offsetHeight*4.15)+"px";
        });

        hammertime.on('panend', function(e) {
          element.style.backgroundColor=bleuToddle;
          if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop && mouseY<canvas.height+offset.top)) {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.fillStyle="#FFF";
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.strokeRect(0,0,canvas.width,canvas.height);
            element.style.left = "51%";
            element.style.top = "52.5%";
            verification=1;
            cPush();
          } else{
              element.style.left = "51%";
              element.style.top = "52.5%";
          }
        });

            /*Drag & drop du bouton Bleu1*/

        var hammertime2 = new Hammer(element2);
        hammertime2.get('pan').set({ direction: Hammer.DIRECTION_ALL });


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
                  ctx.fillStyle="#0000FF";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element2.style.left = "2.5%";
                  element2.style.top = "52.5%";
                  verification2=0;
                  cPush2();
                } else{
                    element2.style.left = "2.5%";
                    element2.style.top = "52.5%";
                }
        });

            /*Drag & drop du bouton BleuKlein*/

        var hammertime3 = new Hammer(element3);
        hammertime3.get('pan').set({ direction: Hammer.DIRECTION_ALL });

            hammertime3.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element3.style.backgroundColor=pinkToddle;
              element3.style.left = (mouseX - element3.offsetWidth*1.65)+"px";
              element3.style.top = (mouseY- element3.offsetHeight*2.65)+"px";
            });
            hammertime3.on('panend', function(e) {
            element3.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop&& mouseY<canvas.height+offset.top)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#002FA7";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element3.style.left = "2.5%";
                  element3.style.top = "52.5%";
                  verification2=1;
                  cPush2();
                } else{
                    element3.style.left = "2.5%";
                    element3.style.top = "52.5%";
                }
            });

      /*Drag & drop du bouton carre*/

        var hammertime4 = new Hammer(element4);
        hammertime4.get('pan').set({ direction: Hammer.DIRECTION_ALL });

        hammertime4.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element4.style.backgroundColor=pinkToddle;
              element4.style.left = (mouseX - element4.offsetWidth/2)+"px";
              element4.style.top = (mouseY- element4.offsetHeight*2.65)+"px";
        });

        hammertime4.on('panend', function(e) {
            element4.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop && mouseY<canvas.height+offset.top)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#FFF";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  ctx.beginPath();
                  ctx.rect(mouseX-165, mouseY-(window.innerHeight*15/100)-165, 300, 300);
                  ctx.stroke();
                  element4.style.left = "51%";
                  element4.style.top = "52.5%";
                  verification=0;
                  cPush();
                } else{
                    element4.style.left = "51%";
                    element4.style.top = "52.5%";
                }
        });

        /*Drag & drop du bouton pour le cercle*/

        var hammertime5 = new Hammer(element5);
        hammertime5.get('pan').set({ direction: Hammer.DIRECTION_ALL });

            hammertime5.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element5.style.backgroundColor=pinkToddle;
              element5.style.left = (mouseX - element5.offsetWidth/2)+"px";
              element5.style.top = (mouseY- element5.offsetHeight)+"px";
            });
            hammertime5.on('panend', function(e) {
                element5.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop&& mouseY<canvas.height+offset.top)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#FFF";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  ctx.beginPath();
                  ctx.arc(mouseX-25,mouseY-(window.innerHeight*15/100),165,0,2*Math.PI);
                  ctx.stroke();
                  element5.style.left = "51%";
                  element5.style.top = "52.5%";
                  verification=0;
                  cPush();
                } else{
                    element5.style.left = "51%";
                    element5.style.top = "52.5%";
                }
            });

        /*Drag & drop du pour le changement en Bleu3*/

        var hammertime6 = new Hammer(element6);
        hammertime6.get('pan').set({ direction: Hammer.DIRECTION_ALL });

        hammertime6.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y;
              element6.style.backgroundColor=pinkToddle;
              element6.style.left = (mouseX - element6.offsetWidth*1.65)+"px";
              element6.style.top = (mouseY- element6.offsetHeight*4.2)+"px";
        });

        hammertime6.on('panend', function(e) {
                element6.style.backgroundColor=bleuToddle;
                if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop&& mouseY<canvas.height+offset.top)) {
                  ctx.clearRect(0,0,canvas.width,canvas.height);
                  ctx.fillStyle="#005890";
                  ctx.fillRect(0,0,canvas.width,canvas.height);
                  element6.style.left = "2.5%";
                  element6.style.top = "52.5%";
                  verification2=0;
                  cPush2();
                } else{
                    element6.style.left = "2.5%";
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

/*functions for undo*/

var cPushArray2 = new Array();
var cStep2 = -1;

function cPush2() {
    cStep2++;
    if (cStep2 < cPushArray2.length) {
      cPushArray2.length = cStep2;
    }
    cPushArray2.push(canvas.toDataURL());
}

function cUndo2() {
    if (cStep2 > 0) {
        cStep2--;
        var canvasPic2 = new Image();
        canvasPic2.src = cPushArray2[cStep2];
        canvasPic2.onload = function () { ctx.drawImage(canvasPic2, 0, 0); }
    }
}