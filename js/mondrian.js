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
    
/* ##### CHRONO  END  ##### */
});

var canvas, ctx;

var tuto = 0;
function touche() {
    if (tuto == 0) {
        $("#handclick").css("animation-play-state","paused");
        $("#handclick").css("display","none");
        tuto=1;
    }
}
document.body.addEventListener('touchstart', touche, false);

var nbrLine, colorLine, x1, x2, y1, y2;

// Variables pour les fonctions

  var orientationLigne=["Horizontal","Vertical"];


if(dir == "fr"){
  var couleurs = ["Jaune","Rouge","Bleu"];
} else {
  var couleurs = ["Yellow","Red","Blue"];
}

var couselect = 0,
    oriselect = 0,
    nbselect = 0;

//Var pour compter le bon resultat
var result = 0,
    result2=0,
    result3=0,
    result4=0,
    result5=0,
    result6=0;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas2 = document.getElementById("myCanvas2");
    ctx2 = canvas2.getContext("2d");
    canvas3 = document.getElementById("myCanvas3");
    ctx3 = canvas3.getContext("2d");
    canvas4 = document.getElementById("myCanvas4");
    ctx4 = canvas4.getContext("2d");
    canvas5 = document.getElementById("myCanvas5");
    ctx5 = canvas5.getContext("2d");
    canvas6 = document.getElementById("myCanvas6");
    ctx6 = canvas6.getContext("2d");

    $("#couleur").text(couleurs[couselect]);
    $("#orientation").text(orientationLigne[oriselect]);
    $("#nombre").text(nbselect);

}

$("#poubelle").on("touchstart", function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    ctx3.clearRect(0,0,canvas3.width,canvas3.height);
    ctx4.clearRect(0,0,canvas4.width,canvas4.height);
    ctx5.clearRect(0,0,canvas5.width,canvas5.height);
    ctx6.clearRect(0,0,canvas6.width,canvas6.height);
    if(dir == "fr"){
        $(".code").text("CréerCadre();");
    } else {
        $(".code").text("CreateBorder();");
    }
});

$("#couplus").on("touchstart",function(){
    if (couselect==2) {
        couselect=0;
        $("#couleur").text(couleurs[couselect]);
    } else{
        couselect++;
        $("#couleur").text(couleurs[couselect]);
    };
});

$("#coumoins").on("touchstart",function(){
    if (couselect==0) {
        couselect=2;
        $("#couleur").text(couleurs[couselect]);
    } else{
        couselect--;
        $("#couleur").text(couleurs[couselect]);
    };
});

$("#oriplus").on("touchstart",function(){
    if (oriselect==1) {
        oriselect=0;
        $("#orientation").text(orientationLigne[oriselect]);
    } else{
        oriselect++;
        $("#orientation").text(orientationLigne[oriselect]);
    };
});

$("#orimoins").on("touchstart",function(){

    if (oriselect==0) {
        oriselect=1;
        $("#orientation").text(orientationLigne[oriselect]);
    } else{
        oriselect--;
        $("#orientation").text(orientationLigne[oriselect]);
    };
});

$("#nbplus").on("touchstart",function(){
    if (nbselect==10) {
        nbselect=0;
        $("#nombre").text(nbselect);
    } else{
        nbselect++;
        $("#nombre").text(nbselect);
    }
});

$("#nbmoins").on("touchstart",function(){
    if (nbselect==0) {
        nbselect=10;
        $("#nombre").text(nbselect);
    } else{
        nbselect--;
        $("#nombre").text(nbselect);
    }

});

$(".continuer").on("touchstart",function(){
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

$(".rechercher").on("touchstart",function(){
    $('#loose').fadeOut(500);
});

$("#valider").on("touchstart", function(){
    if (result==1 && result2==1 && result3==1 && result4==1 && result5==1 && result6==1) {
        win();
    } else lose();
});

$(".bva").on("touchstart", function() {
    var colorLine = couleurs[couselect];
    var sens = orientationLigne[oriselect];
    var nb = nbselect;
    createLine(sens, nb, colorLine);
});

function createLine(orientationLigne, nombre, color){
    if (color == "Jaune" || color == "Yellow") {
        colorname="yellow";
    } else if (color == "Bleu" || color == "Blue") {
        colorname="blue";
    } else if (color == "Rouge" || color == "Red") {
        colorname="red";
    }
    var x1,x2,y1,y2;
    if(orientationLigne === "Vertical"){
        x1 = 30;
    }
    else if(orientationLigne === "Horizontal") {
        y1 = 50;
        x1 = 0;
        x2 = canvas.width;
        y2 = y1;
    }

    if(orientationLigne === "Vertical"){
            if (colorname==="yellow") {
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.beginPath();
                for (var i=0; i<nombre; i++){
                    result=0;
                    if (i==0){ x1=10; }
                    if (i==1){ x1=35; }
                    if (i==2){ x1=125; }
                    if (i==3){ x1=195; }
                    if (i==4){ x1=220; }
                    if (i==5){ x1=250; }
                    if (i==6){ x1=267; }
                    if (i==7){ x1=290; result=1; }
                    if (i==8){ x1=257; result=0;}
                    if (i==9){ x1=150; }
                    x2 = x1;
                    y1 = 0;
                    y2 = canvas.height;
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = "#e4c900";
                    ctx.stroke();
                }
            }
            if (colorname==="red") {
                ctx2.clearRect(0,0,canvas2.width,canvas2.height);
                ctx2.beginPath();
                for (var i=0; i<nombre; i++){
                    result2=0;
                    if (i==0){ x1=95; }
                    if (i==1){ x1=280; result2=1; }
                    if (i==2){ x1=5; result2=0;}
                    if (i==3){ x1=105; }
                    if (i==4){ x1=50; }
                    if (i==5){ x1=200; }
                    if (i==6){ x1=250; }
                    if (i==7){ x1=295; }
                    if (i==8){ x1=175; }
                    if (i==9){ x1=278; }
                    x2 = x1;
                    y1 = 0;
                    y2 = canvas2.height;
                    ctx2.moveTo(x1, y1);
                    ctx2.lineTo(x2, y2);
                    ctx2.lineWidth = 5;
                    ctx2.strokeStyle = "#b82730";
                    ctx2.stroke();
                }
            }
            if (colorname==="blue") {
                ctx3.clearRect(0,0,canvas3.width,canvas3.height);
                ctx3.beginPath();
                for (var i=0; i<nombre; i++){
                    result3=0;
                    if (i==0){ x1=22; result3=1; }
                    if (i==1){ x1=100; result3=0;}
                    if (i==2){ x1=200; }
                    if (i==3){ x1=25; }
                    if (i==4){ x1=50; }
                    if (i==5){ x1=125; }
                    if (i==6){ x1=243; }
                    if (i==7){ x1=159; }
                    if (i==8){ x1=257; }
                    if (i==9){ x1=222; }
                    x2 = x1;
                    y1 = 0;
                    y2 = canvas3.height;
                    ctx3.moveTo(x1, y1);
                    ctx3.lineTo(x2, y2);
                    ctx3.lineWidth = 5;
                    ctx3.strokeStyle = "#124479";
                    ctx3.stroke();
                }
            }
        }

        if(orientationLigne === "Horizontal"){
            if (colorname==="yellow") {
                ctx4.clearRect(0,0,canvas4.width,canvas4.height);
                ctx4.beginPath();
                for (var i=0; i<nombre; i++){
                    result4=0;
                    if (i==0){ y1=15; }
                    if (i==1){ y1=35; }
                    if (i==2){ y1=65; }
                    if (i==3){ y1=95; }
                    if (i==4){ y1=120; }
                    if (i==5){ y1=130; }
                    if (i==6){ y1=145; result4=1; }
                    if (i==7){ y1=125; result4=0;}
                    if (i==8){ y1=25; }
                    if (i==9){ y1=110; }
                    x1 = 0;
                    x2 = canvas4.width;
                    y2 = y1;
                    ctx4.moveTo(x1, y1);
                    ctx4.lineTo(x2, y2);
                    ctx4.lineWidth = 2;
                    ctx4.strokeStyle = "#e4c900";
                    ctx4.stroke();
                }
            }
            if (colorname === "red") {
                ctx5.clearRect(0,0,canvas5.width,canvas5.height);
                ctx5.beginPath();
                for (var i=0; i<nombre; i++){
                    result5=0;
                    if (i==0){ y1=7; }
                    if (i==1){ y1=100; result5=1; }
                    if (i==2){ y1=50; result5=0;}
                    if (i==3){ y1=110; }
                    if (i==4){ y1=145; }
                    if (i==5){ y1=45; }
                    if (i==6){ y1=20; }
                    if (i==7){ y1=124; }
                    if (i==8){ y1=129; }
                    if (i==9){ y1=72; }
                    x1 = 0;
                    x2 = canvas5.width;
                    y2 = y1;
                    ctx5.moveTo(x1, y1);
                    ctx5.lineTo(x2, y2);
                    ctx5.lineWidth = 2;
                    ctx5.strokeStyle = "#b82730";
                    ctx5.stroke();
                }
            }
            if (colorname==="blue") {
                ctx6.clearRect(0,0,canvas6.width,canvas6.height);
                ctx6.beginPath();
                for (var i=0; i<nombre; i++){
                    result6=0;
                    if (i==0){ y1=18; }
                    if (i==1){ y1=61; }
                    if (i==2){ y1=142; result6=1;}
                    if (i==3){ y1=25; result6=0;}
                    if (i==4){ y1=50; }
                    if (i==5){ y1=125; }
                    if (i==6){ y1=243; }
                    if (i==7){ y1=159; }
                    if (i==8){ y1=111; }
                    if (i==9){ y1=123; }
                    x1 = 0;
                    x2 = canvas6.width;
                    y2 = y1;
                    ctx6.moveTo(x1, y1);
                    ctx6.lineTo(x2, y2);
                    ctx6.lineWidth = 2;
                    ctx6.strokeStyle = "#124479";
                    ctx6.stroke();
                }
            }
        }
    if (nombre != 0) {
        if(dir == "fr"){
            $(".code").append("<p>EffacerLigne("+color+","+orientationLigne+")</p>");
            $(".code").append("<p>DessinerLigne("+color+","+orientationLigne+","+nombre+")</p>");
        }
        else {
            $(".code").append("<p>ClearLine("+color+","+orientationLigne+")</p>");
            $(".code").append("<p>DrawLine("+color+","+orientationLigne+","+nombre+")</p>");
        }
    }
}

function win(){
    $('#win').fadeIn(500);
}
function lose(){
    $('#loose').fadeIn(500);
}

// When document is loaded
(function () {
    init();
})();