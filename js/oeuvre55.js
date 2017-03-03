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

//Disparition de la main
var tuto = 0;

function touche() {
    if (tuto  == 0) {
        $("#handclick").css("animation-play-state","paused");
        $("#handclick").css("display","none");
        tuto = 1;
    }
}

document.body.addEventListener('touchstart', touche, false);

//Variables pour l'affichage du dessin
var dl = 0,dt = 0;
var couleurDeLigne="red";
var couleurDuTriangle="black";
var inverse=false;
var cache;

//Variable canvas et contexts
var canvas,canvas2,ctx,ctx2;
function init() {

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas2 = document.getElementById("myCanvas2");
    ctx2 = canvas2.getContext("2d");

    var rouge = document.getElementById("rouge");
    hobjects(rouge,57,52);

    var cligne = document.getElementById("cligne");
    hobjects(cligne,57,77);

    var ctriangle = document.getElementById("ctriangle");
    hobjects(ctriangle,75,77);

    var dligne = document.getElementById("dligne");
    hobjects(dligne,75,52);

    var dtriangle = document.getElementById("dtriangle");
    hobjects(dtriangle,66,77);

    var noir = document.getElementById("noir");
    hobjects(noir,66,52);
}

function drawTriangle(){
    console.log(inverse+" t "+couleurDeLigne);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (inverse) {
        cache=couleurDuTriangle;
        couleurDuTriangle=couleurDeLigne;
        couleurDeLigne=cache;
    }
    if (couleurDuTriangle&&dt==3) {
        ctx.beginPath();
        ctx.moveTo(canvas.width/2,0);
        ctx.lineTo(0,canvas.height);
        ctx.lineTo(canvas.width,canvas.height);
        ctx.fillStyle=couleurDuTriangle;
        ctx.fill();
        ctx.closePath();
    }
}
function drawLigne(){
    console.log(inverse+" l "+couleurDuTriangle);
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    if (inverse) {
        cache=couleurDeLigne;
        couleurDeLigne=couleurDuTriangle;
        couleurDeLigne=cache;
    }
    if (couleurDeLigne&&dl==3) {
        ctx2.fillStyle=couleurDeLigne;
        ctx2.beginPath();
        ctx2.moveTo(canvas.width/2,0);
        ctx2.lineTo(canvas.width/2+6,6);
        ctx2.lineTo(canvas.width/2+6,canvas.height);
        ctx2.lineTo(canvas.width/2,canvas.height);
        ctx2.closePath();
        ctx2.fill();
    }
}

$(".continuer").on("touchstart",function(){
    if(levelUser < 5){
        nbrLevel++;
        localStorage.setItem("levelUser", nbrLevel);
        localStorage.setItem("seconde", $("#sec").val() );
        localStorage.setItem("minute", $("#min").val() );
        document.location.replace("map.php");
    }
    else {
      nbrLevel++;
      localStorage.setItem("levelUser", nbrLevel);
      localStorage.setItem("seconde", $("#sec").val() );
      localStorage.setItem("minute", $("#min").val() );
      document.location.replace("result.php");
    }
});

$(".rechercher").on("touchstart",function(){
    $('#loose').fadeOut(500);
});

$("#valider").on("touchstart", function(){
    if (dl == 3 && dt == 3 && couleurDeLigne=="red" && couleurDuTriangle=="black") {
        stopchrono(); // Arrête chrono
        // Save time user in DB
        $.ajax({
            type: "POST",
            url: "../login.php",
            data: { 'min': $("#min").val(), 'sec': $("#sec").val() },
            success: function(data) {
                console.log("Temps: "+$("#min").val()+" minutes et "+$("#sec").val()+" secondes"  );
            }
        });
        win();
    } else {
      lose();
    }
});

function hobjects(iden,haut,gauche){
    var hamm = new Hammer(iden);
    hamm.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    hamm.on('pan', function(e) {
          mouseX = e.center.x;
          mouseY = e.center.y ;
          iden.style.zIndex="100";
          iden.style.backgroundColor=pinkToddle;
          iden.style.left = (mouseX - iden.offsetWidth/2)+"px";
          iden.style.top = (mouseY- iden.offsetHeight/2)+"px";
    });

    hamm.on('panend', function(e) {
        test(iden,mouseX,mouseY,haut,gauche);
    });
}

function test(identifiant,x,y,posTop,posLeft){
    switch(identifiant) {
        case rouge:
            if ((x>=787 && x<871)&&(y>=270 && y<310)) {
                rougecache.innerHTML=identifiant.innerHTML;
                $("#rougecache").css('visibility','visible').parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                couleurDeLigne="red";
                dl++;
                drawLigne();
                cPush(rouge,rougecache,posTop,posLeft,"ligne",dl);
            }else{
                if ((x>=806 && x<867)&&(y>=220 && y<259)) {
                    noircache.innerHTML=identifiant.innerHTML;
                    $("#noircache").css('visibility','visible').parent().css('backgroundColor',pinkToddle);
                    identifiant.style.display="none";
                    couleurDuTriangle="red";
                    dt++;
                    drawTriangle();
                    cPush(rouge,noircache,posTop,posLeft,"triangle",dt);
                } else {
                    identifiant.style.backgroundColor=bleuToddle;
                    identifiant.style.zIndex="10"
                    identifiant.style.left = posLeft+"%";
                    identifiant.style.top = posTop+"%";
                }
            }
            break;
        case cligne:
            if ((x>=521 && x<751)&&(y>=271 && y<312)) {
                $("#varcache").css('visibility','visible').parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dl++;
                drawLigne();
                cPush(cligne,varcache,posTop,posLeft,"ligne",dl);
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case ctriangle:
            if ((x>=759 && x<971)&&(y>=324 && y<364)) {
                ctcache.innerHTML=identifiant.innerHTML;
                $("#ctcache").css('visibility','visible').parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dt++;
                drawTriangle();
                cPush(ctriangle,ctcache,posTop,posLeft,"triangle",dt);
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case dligne:
            if ((x>=521 && x<710)&&(y>=377 && y<414)) {
                dlcache.innerHTML=identifiant.innerHTML;
                $("#dlcache").css('visibility','visible').parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dl++;
                drawLigne();
                cPush(dligne,dlcache,posTop,posLeft,"ligne",dl);
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case dtriangle:
            if ((x>=521 && x<743)&&(y>=324 && y<364)) {
                dtcache.innerHTML=identifiant.innerHTML;
                $("#dtcache").css('visibility','visible').parent().css('backgroundColor',pinkToddle);;
                identifiant.style.display="none";
                dt++;
                drawTriangle();
                cPush(dtriangle,dtcache,posTop,posLeft,"triangle",dt);
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case noir:
            if ((x>=806 && x<867)&&(y>=220 && y<259)) {
                noircache.innerHTML=identifiant.innerHTML;
                $("#noircache").css('visibility','visible').parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                couleurDuTriangle="black";
                dt++;
                drawTriangle();
                cPush(noir,noircache,posTop,posLeft,"triangle",dt);
            } else{
                if ((x>=787 && x<871)&&(y>=270 && y<310)) {
                    rougecache.innerHTML=identifiant.innerHTML;
                    $("#rougecache").css('visibility','visible').parent().css('backgroundColor',pinkToddle);
                    identifiant.style.display="none";
                    couleurDeLigne="black";
                    dl++;
                    drawLigne();
                    cPush(noir,rougecache,posTop,posLeft,"ligne",dl);
                }else {
                    identifiant.style.backgroundColor=bleuToddle;
                    identifiant.style.zIndex="10"
                    identifiant.style.left = posLeft+"%";
                    identifiant.style.top = posTop+"%";
                }
            }
            break;
        default:
            alert("Un bug vient d'être constaté, retournez au stand pour y remédier");
    }
}

// Fonctions pour le undo //

$("#undo").on('touchstart', function(){
    cUndo();
});

var cPushArray = new Array();
var cStep = -1;

function cPush(etiquette,cache,top,left,type,index) {
    cStep++;
    if (cStep < cPushArray.length) {
        cPushArray.length = cStep;
    }
    cPushArray.push([etiquette,cache,top,left,type,index]);
}
function cUndo() {
    if (cStep >= 0) {
        console.log(cStep);
        $("#"+cPushArray[cStep][1].id).css("visibility","hidden").parent().css("background-color","#f2f2f2");

        $("#"+cPushArray[cStep][0].id).css({
            "display":"block",
            "top":cPushArray[cStep][2]+"%",
            "left":cPushArray[cStep][3]+"%",
            "background-color":bleuToddle
        });
        
        if(cPushArray[cStep][4]=="ligne"){
            dl=cPushArray[cStep][5]-1;
        } else {
            dt=cPushArray[cStep][5]-1;
        }

        cStep--;
    }
    drawLigne();
    drawTriangle();
}

// Fin undo //

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