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

var tutod=0;
var tuto, tuto2;

var currentColor = "000";
var nbGauche = 0;
$("#nbgauche").text(nbGauche);
var nbDroite = 0;
$("#nbdroit").text(nbDroite);

var teinteFroide = ["4C4C6E", "375D8F", "0071B5", "728B74", "BEB140", "E5C200", "FFD700", "FFFF00"];
var teinteChaude = ["644762", "96354C", "BA0000", "D44D00", "FBA800", "FEC100", "FFD700", "FFFF00"];

//Animation pour tuto
tuto = setInterval(function(){ myTimer() }, 3000);

function myTimer() {
    setTimeout(function(){ $("#nbgauche").text(1); }, 250);
    setTimeout(function(){ $("#nbgauche").text(2); }, 500);
    setTimeout(function(){ $("#nbgauche").text(3); }, 1000);
    setTimeout(function(){ $("#nbgauche").text(2); }, 1750);
    setTimeout(function(){ $("#nbgauche").text(1); }, 2000);
    setTimeout(function(){ $("#nbgauche").text(0); }, 2250);
}

$(document).ready(function() {

    function touche() {
          if (tutod==0) {
            $("#handclick").css("animation-play-state","paused");
            $("#handclick").css("display","none");
            clearInterval(tuto);
            $("#nbgauche").text(nbGauche);
            tutod=1;
          }
        }

    document.body.addEventListener('touchstart', touche, false);

    /* ### CHRONO ### */
    $("#sec").val(localSec);
    $("#min").val(localMin);
    chrono();


    //Selection left
    $("#chaudG").on("click", function(){
        $("#chaudG").addClass("rose");
        $("#chaudG").removeClass("bleu");
        $("#froidG").addClass("bleu");
        $("#froidG").removeClass("rose");
        gauche="chaud";
        ctx.clearRect(0,0,293,canvas.height);
        dessiner();
        colors();

    });
    $("#froidG").on("click", function(){
        $("#chaudG").addClass("bleu");
        $("#chaudG").removeClass("rose");
        $("#froidG").addClass("rose");
        $("#froidG").removeClass("bleu");
        gauche="froid";
        ctx.clearRect(0,0,293,canvas.height);
        dessiner();
        colors();
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
        colors2();
    });
    $("#froidD").on("click", function(){
        $("#chaudD").addClass("bleu");
        $("#chaudD").removeClass("rose");
        $("#froidD").addClass("rose");
        $("#froidD").removeClass("bleu");
        droite="froid";
        ctx.clearRect(298,0,canvas.width,canvas.height);
        dessiner2();
        colors2();
    });

});

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 250;
    colors();
    colors2();
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

function colors(){
    $("#colorsG").html("");
    if (gauche=="froid") {
        for(var i = 0; i < teinteFroide.length; i++){
            $("#colorsG").append("<span class='colors' style='background:#"+teinteFroide[i]+"'></span>");
        }
    } else{
        for(var i = 0; i < teinteFroide.length; i++){
            $("#colorsG").append("<span class='colors' style='background:#"+teinteChaude[i]+"'></span>");
        }
    }
}

function colors2(){
    $("#colorsD").html("");
    if (droite=="froid") {
        for(var i = 0; i < teinteFroide.length; i++){
            $("#colorsD").append("<span class='colors' style='background:#"+teinteFroide[i]+"'></span>");
        }
    } else{
        for(var i = 0; i < teinteFroide.length; i++){
            $("#colorsD").append("<span class='colors' style='background:#"+teinteChaude[i]+"'></span>");
        }
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
    if (nbGauche==7 && nbDroite==7 && gauche=="froid" && droite=="chaud") {
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

    //Faire descendre les valeurs pour la gauche
    if (mouseY==(mouseYS+5)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+10)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+15)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+20)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+25)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+30)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+35)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS+40)) {
        nbGauche--;
        if (nbGauche==-1){
            nbGauche = 0;
        }
        $("#nbgauche").text(nbGauche);
    }


    //Faire monter les valeurs pour la gauche
    if (mouseY==(mouseYS-5)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-10)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-15)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-20)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-25)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-30)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-35)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
    if (mouseY==(mouseYS-40)) {
        nbGauche++;
        if (nbGauche==9){
            nbGauche = 8;
        }
        $("#nbgauche").text(nbGauche);
    }
});

hmcg.on('panend', function(e) {
    ctx.clearRect(0,0,297,canvas.height);
    dessiner();
});

//Pan bloc code de droite
hmcd.on('panstart', function(e) {
    mouseYS = e.center.y;
    console.log(mouseYS);
});

hmcd.on('pan', function(e) {
    mouseY = e.center.y ;

    //Faire descendre les valeurs pour la droite
    if (mouseY==(mouseYS+5)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+10)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+15)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+20)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+25)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+30)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+35)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS+40)) {
        nbDroite--;
        if (nbDroite==-1){
            nbDroite = 0;
        }
        $("#nbdroit").text(nbDroite);
    }

    //Faire monter les valeurs pour la droite
    if (mouseY==(mouseYS-10)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-20)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-30)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-40)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-10)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-20)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-30)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
        }
        $("#nbdroit").text(nbDroite);
    }
    if (mouseY==(mouseYS-40)) {
        nbDroite++;
        if (nbDroite==9){
            nbDroite = 8;
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