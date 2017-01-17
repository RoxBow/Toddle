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
    
/* ##### CHRONO  END  ##### */
});

var canvas;
var ctx;

var nbrLine, colorLine, x1, x2, y1, y2;

// Variables pour les fonctions
var couleurs=["Jaune","Rouge","Bleu"];
var orientation=["Horizontales","Verticales"];
var couselect=0;
var oriselect=0;
var nbselect=0;
//Var pour compter le bon resultat
var result=0;
var result2=0;
var result3=0;
var result4=0;
var result5=0;
var result6=0;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = 1100;

    $("#couleur").text(couleurs[couselect]);
    $("#orientation").text(orientation[oriselect]);
    $("#nombre").text(nbselect);
}

$("#couplus").on("click",function(){
    if (couselect==2) {
        couselect=0;
        $("#couleur").text(couleurs[couselect]);
    } else{
        couselect++; 
        $("#couleur").text(couleurs[couselect]);
    };   
});

$("#coumoins").on("click",function(){
    if (couselect==0) {
        couselect=2;
        $("#couleur").text(couleurs[couselect]);
    } else{
        couselect--; 
        $("#couleur").text(couleurs[couselect]);
    };
});

$("#oriplus").on("click",function(){
    if (oriselect==1) {
        oriselect=0;
        $("#orientation").text(orientation[oriselect]);
    } else{
        oriselect++; 
        $("#orientation").text(orientation[oriselect]);
    };   
});

$("#orimoins").on("click",function(){

    if (oriselect==0) {
        oriselect=1;
        $("#orientation").text(orientation[oriselect]);
    } else{
        oriselect--; 
        $("#orientation").text(orientation[oriselect]);
    };
});

$("#nbplus").on("click",function(){
    if (nbselect==10) {
        nbselect=0;
        $("#nombre").text(nbselect);
    } else{
        nbselect++;
        $("#nombre").text(nbselect);
    }
});

$("#nbmoins").on("click",function(){
    if (nbselect==0) {
        nbselect=10;
        $("#nombre").text(nbselect);
    } else{
        nbselect--;
        $("#nombre").text(nbselect);
    }    

});

$(".continuer").on("click",function(){
    if(levelUser < 5){
        nbrLevel++;
        localStorage.setItem("levelUser", nbrLevel);
        document.location.replace("map.php");
    }
    else {
        document.location.replace("result.php");
    }
});
$(".rechercher").on("click",function(){
    $('#loose').fadeOut(500);
});

$("#valider").on("click", function(){
    if (result==1 && result2==1 && result3==1 && result4==1 && result5==1 && result6==1) {
        win();
    } else lose();
});

$(".bva").click(function() {
    var colorLine = couleurs[couselect];
    var sens = orientation[oriselect];
    var nb = nbselect;
    createLine(sens, nb, colorLine);
});

function createLine(orientation, nombre, color){
    if (color=="Jaune") {
        colorname="yellow";
    } else if (color=="Bleu") {
        colorname="blue";
    } else if (color=="Rouge") {
        colorname="red";
    }
    var x1,x2,y1,y2;
    if(orientation === "Verticales"){
        x1 = 30;
        
    }
    else if(orientation === "Horizontales") {
        y1 = 50;
        x1 = 0;
        x2 = canvas.width;
        y2 = y1;
    }

    ctx.beginPath();
    for (var i=0; i<nombre; i++){
        if(orientation === "Verticales"){
            if (colorname==="yellow") {
                if (i==0){ x1=30; }
                if (i==1){ x1=100; }
                if (i==2){ x1=400; }
                if (i==3){ x1=680; }
                if (i==4){ x1=730; }
                if (i==5){ x1=810; }
                if (i==6){ x1=880; }
                if (i==7){ x1=980; result=1; }
                if (i==8){ x1=260; }
                if (i==9){ x1=80; }
            }
            if (colorname==="red") {
                if (i==0){ x1=350; }
                if (i==1){ x1=950; result2=1; }
                if (i==2){ x1=400; }
                if (i==3){ x1=680; }
                if (i==4){ x1=730; }
                if (i==5){ x1=810; }
                if (i==6){ x1=880; }
                if (i==7){ x1=980; }
                if (i==8){ x1=260; }
                if (i==9){ x1=80; }
            }
            if (colorname==="blue") {
                if (i==0){ x1=50; result3=1; }
                if (i==1){ x1=100; }
                if (i==2){ x1=200; }
                if (i==3){ x1=600; }
                if (i==4){ x1=550; }
                if (i==5){ x1=870; }
                if (i==6){ x1=450; }
                if (i==7){ x1=111; }
                if (i==8){ x1=222; }
                if (i==9){ x1=333; }
            }
            x2 = x1;
            y1 = 0;
            y2 = canvas.height;
        }
        if(orientation === "Horizontales"){
            if (colorname==="yellow") {
                if (i==0){ y1=50; }
                if (i==1){ y1=250; }
                if (i==2){ y1=450; }
                if (i==3){ y1=650; }
                if (i==4){ y1=800; }
                if (i==5){ y1=860; }
                if (i==6){ y1=980; result4=1; }
                if (i==7){ y1=100; }
                if (i==8){ y1=200; }
                if (i==9){ y1=500; }
            }
            if (colorname==="red") {
                if (i==0){ y1=30; }
                if (i==1){ y1=680; result5=1; }
                if (i==2){ y1=400; }
                if (i==3){ y1=780; }
                if (i==4){ y1=830; }
                if (i==5){ y1=210; }
                if (i==6){ y1=350; }
                if (i==7){ y1=100; }
                if (i==8){ y1=950; }
                if (i==9){ y1=0; }
            }
            if (colorname==="blue") {
                if (i==0){ y1=75; }
                if (i==1){ y1=425; }
                if (i==2){ y1=950; result6=1; }
                if (i==3){ y1=600; }
                if (i==4){ y1=250; }
                if (i==5){ y1=170; }
                if (i==6){ y1=315; }
                if (i==7){ y1=555; }
                if (i==8){ y1=666; }
                if (i==9){ y1=999; }
            }
            x1 = 0;
            x2 = canvas.width;
            y2 = y1;

        }
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    }
    ctx.lineWidth = 20;
    ctx.strokeStyle = colorname;
    ctx.stroke();
    if (nombre!=0) {
        $(".code").append("<p>DessinerUneLigne("+color+","+orientation+","+nombre+")</p>");
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