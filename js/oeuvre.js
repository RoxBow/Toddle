
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

  document.body.addEventListener(""+touchOrClick()+"", touche, false);

  cPush();
  
  var etiqBloc = document.getElementById("etiqBloc");
  var valider = document.getElementById("valider");
  var element = document.getElementById("rectangle");
  hobjects(element,"52.5%","51%",4.15,1/2);
  var element2 = document.getElementById("rouge");
  hobjects(element2,"52.5%","2.5%",1,1.75);
  var element3 = document.getElementById("jaune");
  hobjects(element3,"52.5%","2.5%",2.65,1.65);
  var element4 = document.getElementById("carre");
  hobjects(element4,"52.5%","51%",2.65,1/2);
  var element5 = document.getElementById("rond");
  hobjects(element5,"52.5%","51%",1,1/2);
  var element6 = document.getElementById("violet");
  hobjects(element6,"53%","2.5%",4.2,1.65);

  var offleft = $("#jeu").css("padding-left").slice(0,2);
  var offset = $("#leftBloc").offset();
  var mouseX, mouseY;


  $("#undo").on(""+touchOrClick()+"", function(){
    if (cpush==0) {
      cUndo();
    }
    if (cpush==1) {
      cUndo2();
    }
  });

  $("#valider").on(""+touchOrClick()+"", function(){
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
  $(".continuer").on(""+touchOrClick()+"", function(){
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

  $(".rechercher").on(""+touchOrClick()+"", function(){
    $('#loose').fadeOut(500);
  });

        /*Drag & drop du bouton rectangle*/
  function hobjects(iden,haut,gauche,divHaut,divGauche,){
      var hammertime = new Hammer(iden);
      hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });

      hammertime.on('pan', function(e) {
          mouseX = e.center.x;
          mouseY = e.center.y ;
          iden.style.backgroundColor=pinkToddle;
          iden.style.left = (mouseX - iden.offsetWidth*divGauche)+"px";
          iden.style.top = (mouseY- iden.offsetHeight*divHaut)+"px";
      });

      hammertime.on('panend', function(e) {
        iden.style.backgroundColor=bleuToddle;
        if ((mouseX>leftBloc.offsetLeft && mouseX<canvas.width+leftBloc.offsetLeft)&&(mouseY>jeu.offsetTop && mouseY<canvas.height+offset.top)) {
          test(iden);
        } else{
            iden.style.left = gauche;
            iden.style.top = haut;
        }
      });
  }
  function reset(id,styleGauche,styleHaut){
    id.style.left = styleGauche;
    id.style.top = styleHaut;
  }
  function test(identifiant){
    switch(identifiant) {
        case rectangle:
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.fillStyle="#FFF";
          ctx.fillRect(0,0,canvas.width,canvas.height);
          ctx.strokeRect(0,0,canvas.width,canvas.height);
          reset(identifiant,"51%","52.5%");
          verification=1;
          cPush();
        break;
        case carre:
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.fillStyle="#FFF";
          ctx.fillRect(0,0,canvas.width,canvas.height);
          ctx.beginPath();
          ctx.rect(mouseX-165, mouseY-(window.innerHeight*15/100)-165, 300, 300);
          ctx.stroke();
          reset(identifiant,"51%","52.5%");
          verification=0;
          cPush();
        break;
        case rond:
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.fillStyle="#FFF";
          ctx.fillRect(0,0,canvas.width,canvas.height);
          ctx.beginPath();
          ctx.arc(mouseX-25,mouseY-(window.innerHeight*15/100),165,0,2*Math.PI);
          ctx.stroke();
          reset(identifiant,"51%","52.5%");
          verification=0;
          cPush();
        break;
        case rouge:
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.fillStyle="#0000FF";
          ctx.fillRect(0,0,canvas.width,canvas.height);
          reset(identifiant,"2.5%","52.5%");
          verification2=0;
          cPush2();
        break;
        case jaune:
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.fillStyle="#002FA7";
          ctx.fillRect(0,0,canvas.width,canvas.height);
          reset(identifiant,"2.5%","52.5%");
          verification2=1;
          cPush2();
        break;
        case violet:
          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.fillStyle="#005890";
          ctx.fillRect(0,0,canvas.width,canvas.height);
          reset(identifiant,"2.5%","52.5%");
          verification2=0;
          cPush2();
        break;
        default:
    }
  }
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