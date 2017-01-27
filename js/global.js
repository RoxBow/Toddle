/* GLOBAL VARIABLE */
var currentArt, currentRoom;

// CONST our arts
const roomKlein = "allee-nord";
const roomMasomenos = "allee-nord";
const roomTram4 = "room28";
const roomJauneViolet = "room39";
const roomMondrian = "allee-sud";

// Variable cache level
var levelUser = localStorage.getItem("levelUser");
var nbrLevel = levelUser;

if(levelUser != null){
    levelUser = levelUser.replace(/\s/g, ''); // Remove spaces
}

// Variable compteur slider crédits
var countSlider = 0;

switch (levelUser) {
    case "1":
        currentArt = "../img/kleinBlue.png";
        currentRoom = roomKlein;
        $("#levelUser").text(levelUser);
        $("#indiceMap",".popup2").html("La première &#156;uvre devant laquelle tu dois te rendre, est une oeuvre monochrome d'un artiste français du XXe siècle. Il est connu pour son travail autour d'une couleur particulière.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "2":
        currentArt = "../img/masomenos.png";
        currentRoom = roomMasomenos;
        $("#levelUser").text(levelUser);
        $("#nbrDefi",".defi").text(levelUser);
        $("#indiceMap",".popup2").html("La deuxième &#156;uvre devant laquelle tu dois te rendre, est un tableau de grande taille, constitué de lignes horizontales brisées, d’un peintre américain minimaliste du XXe siècle.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "3":
        currentArt = "../img/trames4.png";
        currentRoom = roomTram4;
        $("#levelUser").text(levelUser);
        $("#indiceMap",".popup2").html("La troisième &#156;uvre devant laquelle tu dois te rendre, est un tableau en noir et blanc d’un artiste français du XXe siècle, précurseur de l’abstraction géométrique. La structure de ce tableau est très précise puisque les minces lignes qui le composent sont disposées mathématiquement sur la toile.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "4":
        currentArt = "../img/mondrian.png";
        currentRoom = roomMondrian;
        $("#levelUser").text(levelUser);
        $("#indiceMap",".popup2").html("La quatrième &#156;uvre devant laquelle tu dois te rendre, est un tableau d’un peintre néerlandais du XXe siècle. Le tableau est composés de lignes aux couleur primaires, pouvant rappeler le plan d’une célèbre ville américaine.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "5":
        currentArt = "../img/jauneauviolet.png";
        currentRoom = roomJauneViolet;
        $("#levelUser").text(levelUser);
        $("#indiceMap",".popup2").html("La dernière &#156;uvre devant laquelle tu dois te rendre, est un double tableau d’un artiste français du XXe siècle, précurseur de l’abstraction géométrique. Ce tableau aborde le dégradé grâce à des formes géométriques simples.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
}

// Couleurs de l'appli
var pinkToddle = "#F38F9A";
var bleuToddle = "#355E7E";
var beigeToddle = "#F8B195";

// Check orientation tablet
doOnOrientationChange();
window.addEventListener('orientationchange', doOnOrientationChange);

$(document).ready(function () {
    var countClick = 0;

    // 3 tap on toddle img left (header) -> Skip level (oeuvres)
    $("#skip","header").click(function () {
        countClick += 1;
        if (countClick == 3) {
            nbrLevel++;
            localStorage.setItem("levelUser", nbrLevel);
            document.location.replace("map.php");
        }
    });
    
    //Positions crédits
    $("footer>img").click(function () {
        $(".credits").css("display", "block");
        $(".credits").animate({
            marginTop: "0%"
        }, 1000);
    });

    $("#croix").click(function () {
        $(".credits").animate({
            marginTop: "100%"
        }, 750);
        setTimeout(function () {
            $(".credits").css("display", "none");
        }, 750);
    });

    //Slider crédits
    $("#chevronGauche").on("click",function(){
        if (countSlider==1 || countSlider==2) {
            $("#sous-texte").animate({
                marginLeft: "+=100%"
            }, 1000);
            countSlider--;
            changeRond();
            if(countSlider == 0){
                $("#chevronGauche").fadeOut();
            }
            $("#chevronDroite").fadeIn();
        }
    });
    
    $("#chevronDroite").on("click",function(){
        if (countSlider==0 || countSlider==1) {
            $("#sous-texte").animate({
                marginLeft: "-=100%"
            }, 1000);
            countSlider++;
            $("#chevronGauche").fadeIn();
            
            changeRond();
            
            if(countSlider == 2)
                $("#chevronDroite").fadeOut();
        }
    });

});

//Changements points crédits
function changeRond(){
    if (countSlider==0) {
        $("#a1").attr("src","../img/pc-plein.png");
        $("#a2").attr("src","../img/pc-vide.png");
        $("#a3").attr("src","../img/pc-vide.png");
    } else{
        if (countSlider==1) {
            $("#a1").attr("src","../img/pc-vide.png");
            $("#a2").attr("src","../img/pc-plein.png");
            $("#a3").attr("src","../img/pc-vide.png");
        } else{
            $("#a1").attr("src","../img/pc-vide.png");
            $("#a2").attr("src","../img/pc-vide.png");
            $("#a3").attr("src","../img/pc-plein.png");
        }
    }
}

// Disable scroll
document.ontouchmove = function(e){ e.preventDefault(); }

// Detect orientation tablet
function doOnOrientationChange() {
    switch(window.orientation) {
      case -90:
      case 90:
        $(".orientation").remove();
        break;
      case 0:
        $(".container").append("<div class='overlay orientation'><div class='content-orientation'><img src='../img/orientation.png' alt='tablet'><p>Tourne la tablette</p></div></div>");
        break;
    }
}