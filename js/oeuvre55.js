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
var dl = 0,
    dt = 0;

//Variable canvas et contexts
var canvas,canvas2,ctx,ctx2;
function init() {

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas2 = document.getElementById("myCanvas2");
    ctx2 = canvas2.getContext("2d");

    var rouge = document.getElementById("rouge");
    var rougeh;
    hobjects(rouge,rougeh,56,52);

    var cligne = document.getElementById("cligne");
    var cligneh;
    hobjects(cligne,cligneh,56,77);

    var ctriangle = document.getElementById("ctriangle");
    var ctriangleh;
    hobjects(ctriangle,ctriangleh,77,77);

    var dligne = document.getElementById("dligne");
    var dligneh;
    hobjects(dligne,dligneh,77,52);

    var dtriangle = document.getElementById("dtriangle");
    var dtriangleh;
    hobjects(dtriangle,dtriangleh,63,77);

    var beige = document.getElementById("beige");
    var beigeh;
    hobjects(beige,beigeh,63,52);

    var drond = document.getElementById("drond");
    var drondh;
    hobjects(drond,drondh,70,77);

    var noir = document.getElementById("noir");
    var noirh;
    hobjects(noir,noirh,70,52);
}

function drawTriangle(){
    if (dt==3) {
        ctx.beginPath();
        ctx.moveTo(canvas.width/2,0);
        ctx.lineTo(0,canvas.height);
        ctx.lineTo(canvas.width,canvas.height);
        ctx.fill();
        ctx.closePath();
    }
}
function drawLigne(){
    if (dl==3) {
        ctx2.fillStyle = '#f00';
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
    if (dl == 3 && dt == 3) {
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

function hobjects(iden,hamm,haut,gauche){
    hamm = new Hammer(iden);
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
                $("#rougecache").css('visibility','visible');
                $("#rougecache").parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dl++;
                drawLigne();
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case cligne:
            if ((x>=521 && x<751)&&(y>=271 && y<312)) {
                $("#varcache").css('visibility','visible');
                $("#varcache").parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dl++;
                drawLigne();
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case ctriangle:
            if ((x>=759 && x<971)&&(y>=324 && y<364)) {
                $("#ctcache").css('visibility','visible');
                $("#ctcache").parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dt++;
                drawTriangle();
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case dligne:
            if ((x>=521 && x<710)&&(y>=377 && y<414)) {
                $("#dlcache").css('visibility','visible');
                $("#dlcache").parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dl++;
                drawLigne();
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case dtriangle:
            if ((x>=521 && x<743)&&(y>=324 && y<364)) {
                $("#dtcache").css('visibility','visible');
                $("#dtcache").parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dt++;
                drawTriangle();
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        case beige:
            identifiant.style.backgroundColor=bleuToddle;
            identifiant.style.zIndex="10"
            identifiant.style.left = posLeft+"%";
            identifiant.style.top = posTop+"%";
            break;
        case drond:
            identifiant.style.backgroundColor=bleuToddle;
            identifiant.style.zIndex="10"
            identifiant.style.left = posLeft+"%";
            identifiant.style.top = posTop+"%";
            break;
        case noir:
            if ((x>=806 && x<867)&&(y>=220 && y<259)) {
                $("#noircache").css('visibility','visible');
                $("#noircache").parent().css('backgroundColor',pinkToddle);
                identifiant.style.display="none";
                dt++;
                drawTriangle();
            } else {
                identifiant.style.backgroundColor=bleuToddle;
                identifiant.style.zIndex="10"
                identifiant.style.left = posLeft+"%";
                identifiant.style.top = posTop+"%";
            }
            break;
        default:
            alert("Un bug vient d'être constaté, retournez au stand pour y remédier");
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