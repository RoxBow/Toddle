/* #####    CHRONO      ##### */

// Update time script
sec = localSec;
min = localMin;

// When page is left
$(window).bind('beforeunload',function(){
    localStorage.setItem("seconde", $("#sec").val() );
    localStorage.setItem("minute", $("#min").val() );
});

var gauche = "froid";
var droite = "chaud";

var canvas;
var ctx;

var square;

var squares, taille;

var currentColor = "000";
var nbGauche = 0;
$("#nbgauche").text(nbGauche);
var nbDroite = 0;
$("#nbdroit").text(nbDroite);




var teinteFroide = ["4C4C6E", "375D8F", "0071B5", "728B74", "BEB140", "E5C200", "FFD700", "FFFF00"];
var teinteChaude = ["644762", "96354C", "BA0000", "D44D00", "FBA800", "FEC100", "FFD700", "FFFF00"];

$(document).ready(function() {
    /* ### CHRONO ### */
    $("#sec").val(localSec);
    $("#min").val(localMin);
    chrono();

    /*for(var i = 0; i < teinteChaude.length; i++){
        $(".contentChaud").append("<span class='colors' style='background:#"+teinteChaude[i]+"'></span>");
        $(".contentFroid").append("<span class='colors' style='background:#"+teinteFroide[i]+"'></span>");
    }*/


    //Selection left
    $("#chaudG").on("click", function(){
        $("#chaudG").addClass("rose");
        $("#chaudG").removeClass("bleu");
        $("#froidG").addClass("bleu");
        $("#froidG").removeClass("rose");
        gauche="chaud";
        ctx.clearRect(0,0,293,canvas.height);
        dessiner();

    });
    $("#froidG").on("click", function(){
        $("#chaudG").addClass("bleu");
        $("#chaudG").removeClass("rose");
        $("#froidG").addClass("rose");
        $("#froidG").removeClass("bleu");
        gauche="froid";
        ctx.clearRect(0,0,293,canvas.height);
        dessiner();
    });
    //Selection right
    $("#chaudD").on("click", function(){
        $("#chaudD").addClass("rose");
        $("#chaudD").removeClass("bleu");
        $("#froidD").addClass("bleu");
        $("#froidD").removeClass("rose");
        droite="chaud";
        ctx.clearRect(298,0,canvas.width,canvas.height);
        dessiner2();
    });
    $("#froidD").on("click", function(){
        $("#chaudD").addClass("bleu");
        $("#chaudD").removeClass("rose");
        $("#froidD").addClass("rose");
        $("#froidD").removeClass("bleu");
        droite="froid";
        ctx.clearRect(298,0,canvas.width,canvas.height);
        dessiner2();
    });
});

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 250;
    
    /*initSquares();
    render();*/
}

function dessiner(){
    var a=93;
    var b=23;
    var c=200;
    var d=200;
    for( var i = 0; i<nbGauche; i++){
        if (gauche==="chaud") {
            ctx.strokeStyle = "#"+teinteChaude[i];
        } else ctx.strokeStyle = "#"+teinteFroide[i];
        ctx.lineWidth = 8;
        ctx.strokeRect(a,b,c,d);
        a+=15;
        b+=15;
        c-=30;
        d-=30;
    }
}
function dessiner2(){
    var e=303;
    var f=23;
    var g=200;
    var h=200;

    for( var i = 0; i<nbDroite; i++){
        if (droite==="chaud") {
            ctx.strokeStyle = "#"+teinteChaude[i];
        } else ctx.strokeStyle = "#"+teinteFroide[i];
        ctx.lineWidth = 8;
        ctx.strokeRect(e,f,g,h);
        e+=15;
        f+=15;
        g-=30;
        h-=30;
    }
}

function win(){
    $('#win').fadeIn(500);
}
function lose(){
    $('#loose').fadeIn(500);
}

$(".rechercher").on("click",function(){
    $('#loose').fadeOut(500);
});

$("#valider").on("click", function(){
    if (nbGauche==7 && nbDroite==7) {
        stopchrono(); // Arrête chrono
        // Save time user in DB
        $.ajax({
            type: "POST",
            url: "login.php",
            data: { 'min': localStorage.getItem("minute"), 'sec': localStorage.getItem("seconde") },
            success: function(data) {
                console.log("Temps: "+localStorage.getItem("minute")+" minutes et "+localStorage.getItem("seconde")+" secondes"  );
            }
        });
        win();
    } else lose();
});

var cg =document.getElementById("codegauche");
var hmcg = new Hammer(cg);
hmcg.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
var cd =document.getElementById("codedroit");
var hmcd = new Hammer(cd);
hmcd.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });

var mouseY;
var mouseYS;

//Pan bloc code de gauche

hmcg.on('panstart', function(e) {
    mouseYS = e.center.y;
    console.log(mouseYS);
});

hmcg.on('pan', function(e) {
    mouseY = e.center.y ;

    if (mouseY==(mouseYS+10)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+20)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+30)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+40)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }

    if (mouseY==(mouseYS-10)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-20)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-30)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-40)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
});

hmcg.on('panend', function(e) {
    ctx.clearRect(0,0,293,canvas.height);
    dessiner();
});

//Pan bloc code de droite
hmcd.on('panstart', function(e) {
    mouseYS = e.center.y;
    console.log(mouseYS);
});

hmcd.on('pan', function(e) {
    mouseY = e.center.y ;

    if (mouseY==(mouseYS+10)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+20)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+30)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+40)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }

    if (mouseY==(mouseYS-10)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-20)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-30)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-40)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
});

hmcd.on('panend', function(e) {
    ctx.clearRect(298,0,canvas.width,canvas.height);
    dessiner2();
});

// When document is loaded
(function () {
    init();
})();