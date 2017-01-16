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

    ctx.save(); // Save default state ctx
    $( ".valide" ).click(function() {
        colorLine = $("#color").val();
        x1 = $("#x1").val();
        y1 = $("#y1").val();

        sens = $("#sens").val();
        
        createLine(sens, x1, y1, colorLine);
    });
    
    $("#sens").blur(function() {
        if($(this).val() == "vertical"){
            $("#y1").prop('disabled', true);
            $("#x1").prop('disabled', false);
            $("input").val("");
        }
        else if($(this).val() == "horizontal") {
            $("#x1").prop('disabled', true);
            $("#y1").prop('disabled', false);
            $("input").val("");
        }
    });
});

var canvas;
var ctx;

var nbrLine, colorLine, x1, x2, y1, y2;

// Variables pour les fonctions
var couleurs=["Jaune","Rouge","Bleu"];
var orientation=["Horizontales","Verticales"];
var couselect=0;
var oriselect=0;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    $("#couleur").text(couleurs[couselect]);
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
        oriselect=2;
        $("#orientation").text(orientation[oriselect]);
    } else{
        oriselect--; 
        $("#orientation").text(orientation[oriselect]);
    };
});



function createLine(sens, x1, y1, color){
    if(sens === "vertical"){
        x2 = x1;
        y1 = 0;
        y2 = canvas.height;
    }
    else if(sens === "horizontal") {
        x1 = 0;
        x2 = canvas.width;
        y2 = y1;
    }
    
    ctx.restore();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 35;
    ctx.strokeStyle = color;
    ctx.stroke();
}

// When document is loaded
(function () {
    init();
    
    /*
    createLine(50, 0, 50,canvas.height,"red");
    createLine(100, 0, 100,canvas.height, "yellow");
    createLine(150, 0, 150,canvas.height,"blue");
    createLine(300, 0, 300,canvas.height, "yellow");
    createLine(500, 0, 500,canvas.height, "blue");
    createLine(550, 0, 550,canvas.height, "yellow");
    createLine(750, 0, 750,canvas.height, "yellow");
    createLine(800, 0, 800,canvas.height, "red");
    createLine(900, 0, 900,canvas.height, "yellow");
    createLine(950, 0, 950,canvas.height, "yellow");
    createLine(1050, 0, 1050,canvas.height, "blue");
    createLine(1100, 0, 1100,canvas.height, "yellow");
    createLine(0, 100, canvas.width, 100,"red");
    createLine(0, 400, canvas.width, 400,"blue");
    createLine(0, 700, canvas.width, 700,"yellow");
    */
    
})();