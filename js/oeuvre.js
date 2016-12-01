
var canvas=document.getElementById("canvas");
var jeu = document.getElementById("jeu");
var leftBloc = document.getElementById("leftBloc");
var ctx=canvas.getContext("2d");
canvas.width=window.innerWidth/2;
canvas.height=leftBloc.offsetHeight;
ctx.fillStyle="#002FA7";
ctx.fillRect(0,0,canvas.width,canvas.height);

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
        var offset = $("#jeu").offset();
        var mouseX, mouseY;

        var hm = new Hammer(undo);
        var hm2 = new Hammer(valider);
        var hm3 = new Hammer(indice);
        var hm4 = new Hammer(but);

        	/*Réactions au touch*/

        hm.on('press', function(e) {
            undo.style.backgroundColor=bleuToddle;
        });
        hm.on('pressup', function(e) {
            undo.style.backgroundColor=pinkToddle;
        });

        hm.on('tap', function(e) {
            cUndo();
        });

        hm2.on('press', function(e) {
            valider.style.backgroundColor=bleuToddle;
        });
        hm2.on('pressup', function(e) {
            valider.style.backgroundColor=pinkToddle;
        });

        hm3.on('press', function(e) {
            indice.style.backgroundColor=bleuToddle;
        });
        hm3.on('pressup', function(e) {
            indice.style.backgroundColor=pinkToddle;
        });
        hm3.on('tap', function(e) {
          $('.overlay').fadeToggle();
          if ($('.wrap2').hasClass('active')) {
            $('.wrap2').toggleClass('active');
            setTimeout(function(){
            $('.wrap').toggleClass('active');
            },700);
          } else{
            $('.wrap').toggleClass('active');
          }
        });

        hm4.on('press', function(e) {
            but.style.backgroundColor=bleuToddle;
        });
        hm4.on('pressup', function(e) {
            but.style.backgroundColor=pinkToddle;
        });
        hm4.on('tap', function(e) {
          $('.overlay').fadeToggle();
          if ($('.wrap').hasClass('active')) {
            $('.wrap').toggleClass('active');
            setTimeout(function(){
            $('.wrap2').toggleClass('active');
            },700);
          } else {
            $('.wrap2').toggleClass('active');
          }
        });

          /*Drag & drop du bouton vert*/

        var hammertime = new Hammer(element);

        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
          /*A voir*/
        hm.get('press').set({ time: 100 });
        hm2.get('press').set({ time: 100 });
        hm3.get('press').set({ time: 100 });
        hm4.get('press').set({ time: 100 });

        hammertime.on('pan', function(e) {
              mouseX = e.center.x;
              mouseY = e.center.y ;
              element.style.backgroundColor=pinkToddle;
              element.style.left = (mouseX - element.offsetWidth/2)+"px";
              element.style.top = (mouseY- element.offsetHeight)+"px";
        });

        hammertime.on('panend', function(e) {
          element.style.backgroundColor=bleuToddle;
          if ((mouseX>jeu.offsetLeft+offleft && mouseX<canvas.width-offleft)&&(mouseY>jeu.offsetTop+offset.top && mouseY<canvas.height+offset.top)) {
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
                if ((mouseX>jeu.offsetLeft+offleft && mouseX<canvas.width-offleft)&&(mouseY>jeu.offsetTop+offset.top && mouseY<canvas.height+offset.top)) {
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
                if ((mouseX>jeu.offsetLeft+offleft && mouseX<canvas.width-offleft)&&(mouseY>jeu.offsetTop+offset.top && mouseY<canvas.height+offset.top)) {
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
                if ((mouseX>jeu.offsetLeft+offleft && mouseX<canvas.width-offleft)&&(mouseY>jeu.offsetTop+offset.top && mouseY<canvas.height+offset.top)) {
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
                if ((mouseX>jeu.offsetLeft+offleft && mouseX<canvas.width-offleft)&&(mouseY>jeu.offsetTop+offset.top && mouseY<canvas.height+offset.top)) {
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
                if ((mouseX>jeu.offsetLeft+offleft && mouseX<canvas.width-offleft)&&(mouseY>jeu.offsetTop+offset.top && mouseY<canvas.height+offset.top)) {
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