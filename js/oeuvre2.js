var canvas, context;
var nbLignes = 1;
var resultat = 27;

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

/* #####    CHRONO END     ##### */

function init() {
    canvas = document.getElementById("mycanvas");
    context = canvas.getContext("2d");
    canvas.height=450;
    canvas.width=700;
    $("#nbLignes").text(nbLignes);
    render();
}

//nombre de lignes
$("#valider").on(""+touchOrClick()+"",function(){
    var lines=$("#nbLignes").text();
    if (lines==resultat){
        win();
    } else {
        lose();
    }
});

$("#plus").on(""+touchOrClick()+"",function(){
    if (nbLignes>-1 && nbLignes <31 && nbLignes!=31) {
        nbLignes += 1;
        if (nbLignes==31) {
            nbLignes=30;
        }
        $("#nbLignes").text(nbLignes);
        render();
    }

});
$("#moins").on(""+touchOrClick()+"",function(){
    if (nbLignes>=0 && nbLignes <=30) {
        nbLignes -= 1;
        if (nbLignes==-1) {
            nbLignes=0;
        }
        $("#nbLignes").text(nbLignes);
        render();
    }
});

$(".continuer").on(""+touchOrClick()+"",function(){
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
$(".rechercher").on(""+touchOrClick()+"",function(){
    $('#loose').fadeOut(500);
});

// Draw forms
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var vars = 0;

  for (var i = 0; i < nbLignes; i++) {

    //Angle de la pente
    vars= i*2;

    //Ligne gris clair
    context.beginPath();
    creationLine(10 * i, vars);
    context.closePath();
    
    context.lineWidth = 2;
    context.strokeStyle = '#C5BDB2';
    context.stroke();

    //Deuxieme ligne
    context.beginPath();
    //espacement entre les lignes
    creationLine2(10*i+2,vars);
    context.closePath();
    
    context.lineWidth = 2;
    context.strokeStyle = '#565043';
    context.stroke();

//3ieme ligne
    
    context.beginPath();
    //espacement entre les lignes
    creationLine2(10*i+4,vars);
    context.closePath();
    
    context.lineWidth = 2;
    context.strokeStyle = '#565043';
    context.stroke();

//4ieme ligne
    
    context.beginPath();
    //espacement entre les lignes
    creationLine2(10*i+6,vars);
    context.closePath();
    
    context.lineWidth = 2;
    context.strokeStyle = '#565043';
    context.stroke();

//5ieme ligne
    
    context.beginPath();
    //espacement entre les lignes
    creationLine2(10*i+8,vars);
    context.closePath();  
    
    context.lineWidth = 2;
    context.strokeStyle = '#565043';
    context.stroke();
    
  }
}

function creationLine(y,x) {
    var variations = x;
    var x;
    y = y + 75;

    context.moveTo(20, y-20);
    context.lineTo(130,y - 60);
    context.moveTo(290-variations,y);
    context.lineTo(130, y - 60);
    context.moveTo(290-variations,y);
    context.lineTo(440-variations,y);
    context.moveTo(440-variations,y);
    context.lineTo(540,y + 50); 
    context.moveTo(540,y + 50);
    context.lineTo(670,y);
}

function creationLine2(y,x) {
    var variations = x;
    y = y + 75;

    context.moveTo(20, y-20);
    context.lineTo(130,y - 60);
    context.moveTo(290-variations,y);
    context.lineTo(130, y - 60);
    context.moveTo(290-variations,y);
    context.lineTo(440-variations,y);
    context.moveTo(440-variations,y);
    context.lineTo(540,y + 50); 
    context.moveTo(540,y + 50);
    context.lineTo(670,y);
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

