/* GLOBAL VARIABLE */
var currentArt, currentRoom;

// Get name directory file
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
dir = dir.slice(-2);

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
        if(dir == "fr"){
            $("#indiceMap",".popup2").html("La première &#156;uvre devant laquelle tu dois te rendre, est une oeuvre monochrome d'un artiste français du XXe siècle. Il est connu pour son travail autour d'une couleur particulière.");
        } else {
            $("#indiceMap",".popup2").html("The very first artwork you must be going to is a monochrome (on only color) work of a French artist of the 20th century. He is known for his work around a particular color.");
        }
        
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "2":
        currentArt = "../img/masomenos.png";
        currentRoom = roomMasomenos;
        $("#levelUser").text(levelUser);
        $("#nbrDefi",".defi").text(levelUser);
        if(dir == "fr"){
            $("#indiceMap",".popup2").html("La deuxième &#156;uvre devant laquelle tu dois te rendre, est un tableau de grande taille, constitué de lignes horizontales brisées, d’un peintre américain minimaliste du XXe siècle.");
        } else {
            $("#indiceMap",".popup2").html("The second artwork which you should be looking for is a large painting, consisting of broken horizontal lines, whose creator is a minimalist American painter of the 20th century.");
        }
        
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "3":
        currentArt = "../img/trames4.png";
        currentRoom = roomTram4;
        $("#levelUser").text(levelUser);
        if(dir == "fr"){
            $("#indiceMap",".popup2").html("La troisième &#156;uvre devant laquelle tu dois te rendre, est un tableau en noir et blanc d’un artiste français du XXe siècle, précurseur de l’abstraction géométrique. La structure de ce tableau est très précise puisque les minces lignes qui le composent sont disposées mathématiquement sur la toile.");
        } else {
            $("#indiceMap",".popup2").html("The third piece of work where you must be going is a black and white painting of a French artist of the 20th century, precursor of geometrical abstraction. The structure of this painting is very precise since the thin lines composing it are arranged mathematically on the canvas.");
        }
        
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "4":
        currentArt = "../img/mondrian.png";
        currentRoom = roomMondrian;
        $("#levelUser").text(levelUser);
        if(dir == "fr"){
            $("#indiceMap",".popup2").html("La quatrième &#156;uvre devant laquelle tu dois te rendre, est un tableau d’un peintre néerlandais du XXe siècle. Le tableau est composés de lignes aux couleur primaires, pouvant rappeler le plan d’une célèbre ville américaine.");
        } else {
            $("#indiceMap",".popup2").html("The fourth artwork which you should be looking for is a painting from a Dutch painter of the 20th century. The painting is composed of lines with primary colors, which can recall the plan of a famous American city.");
        }
        
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "5":
        currentArt = "../img/jauneauviolet.png";
        currentRoom = roomJauneViolet;
        $("#levelUser").text(levelUser);
        if(dir == "fr"){
            $("#indiceMap",".popup2").html("La dernière &#156;uvre devant laquelle tu dois te rendre, est un double tableau d’un artiste français du XXe siècle, précurseur de l’abstraction géométrique. Ce tableau aborde le dégradé grâce à des formes géométriques simples.");
        } else {
            $("#indiceMap",".popup2").html("Finally we are here: the last artwork you must find is a double painting by a French artist of the 20th century, precursor of geometrical abstraction. This painting approaches color gradiant using simple geometric shapes.");
        }
        
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
    $("#skip","header").on("touchstart", function () {
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
        // (special) For index.php
        $("#a1").on('error', function() { $(this).attr("src","img/pc-plein.png"); });
        $("#a2").on('error', function() { $(this).attr("src","img/pc-vide.png"); });
        $("#a3").on('error', function() { $(this).attr("src","img/pc-vide.png"); });
        
        $("#a1").attr("src","../img/pc-plein.png");
        $("#a2").attr("src","../img/pc-vide.png");
        $("#a3").attr("src","../img/pc-vide.png");
    } else{
        if (countSlider==1) {
            // (special) For index.php
            $("#a1").on('error', function() { $(this).attr("src","img/pc-vide.png"); });
            $("#a2").on('error', function() { $(this).attr("src","img/pc-plein.png"); });
            $("#a3").on('error', function() { $(this).attr("src","img/pc-vide.png"); });
            
            $("#a1").attr("src","../img/pc-vide.png");
            $("#a2").attr("src","../img/pc-plein.png");
            $("#a3").attr("src","../img/pc-vide.png");
        } else {
            // (special) For index.php
            $("#a1").on('error', function() { $(this).attr("src","img/pc-vide.png"); });
            $("#a2").on('error', function() { $(this).attr("src","img/pc-vide.png"); });
            $("#a3").on('error', function() { $(this).attr("src","img/pc-plein.png"); });
          
            $("#a1").attr("src","../img/pc-vide.png");
            $("#a2").attr("src","../img/pc-vide.png");
            $("#a3").attr("src","../img/pc-plein.png");
        }
    }
}

$(document).on('touchmove', function(e){ e.preventDefault(); }); // Disable scroll
$('.credits').on('touchmove', function (e) { e.stopPropagation(); }); // Allow scroll

// Detect orientation tablet
function doOnOrientationChange() {
    switch(window.orientation) {
      case -90:
      case 90:
        $(".orientation").remove();
        break;
      case 0:
        $(".container").append("<div class='overlay orientation'><div class='content-orientation'><img src='../img/orientation.png' alt='tablet' class='imgOrientation'><p>Tourne la tablette</p></div></div>");
        $(".imgOrientation").on('error', function() { $(this).attr("src","img/orientation.png"); });
        break;
    }
}