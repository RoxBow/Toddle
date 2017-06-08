/* GLOBAL VARIABLE */
var currentArt, currentRoom;

// Get name directory file
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
dir = dir.slice(-2);

// CONST our arts
const roomKlein = "allee-nord";
const roomMasomenos = "allee-nord";
const roomCompo = "room17_1_";
const roomJericho = "room40";
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
        currentArt = "../img/compo.png";
        currentRoom = roomCompo;
        $("#levelUser").text(levelUser);
        if(dir == "fr"){
            $("#indiceMap",".popup2").html("La troisième &#156;uvre devant laquelle tu dois te rendre est un tableau en noir et blanc d’un artiste allemand du XXe siècle, composé de formes géométriques simples. Il a la particularité d’avoir une forme en relief.");
        } else {
            $("#indiceMap",".popup2").html("The third piece of work where you must be going is a black and white painting of a German artist of the 20th century. The painting is composed of simple eometric shapes but it has the peculiarity of having one in high-relief, you can not miss it.");
        }
        
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "4":
        currentArt = "../img/mondrian.png";
        currentRoom = roomMondrian;
        $("#levelUser").text(levelUser);
        if(dir == "fr"){
            $("#indiceMap",".popup2").html("La quatrième &#156;uvre devant laquelle tu dois te rendre, est un tableau d’un peintre néerlandais du XXe siècle. Le tableau est composé de lignes aux couleurs primaires, pouvant rappeler le plan d’une célèbre ville américaine.");
        } else {
            $("#indiceMap",".popup2").html("The fourth artwork which you should be looking for is a painting from a Dutch painter of the 20th century. The painting is composed of lines with primary colors, which can recall the plan of a famous American city.");
        }
        
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "5":
        currentArt = "../img/jericho.png";
        currentRoom = roomJericho;
        $("#levelUser").text(levelUser);
        if(dir == "fr"){
            $("#indiceMap",".popup2").html("La dernière &#156;uvre devant laquelle tu dois te rendre est un tableau d’un peintre américain du XXe siècle. Le cadre de ce tableau a la particularité de ne pas avoir une forme rectangulaire classique, et n’est composé que de 2 couleurs.");
        } else {
            $("#indiceMap",".popup2").html("Finally we are here: the last artwork you must find is a painting by an American artist of the 20th century. This painting’s frame has the peculiarity of not having a rectangular shape, contrary to what’s commonly seen and used for paintings and it is only composed of two colours.");
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
    $("#skip","header").on(""+touchOrClick()+"", function () {
        countClick += 1;
        if (countClick == 3) {
            nbrLevel++;
            localStorage.setItem("levelUser", nbrLevel);
            document.location.replace("map.php");
        }
    });
    
    //Positions crédits
    $("footer>img").on(""+touchOrClick()+"", function () {
        $(".credits").css("display", "block");
        $(".credits").animate({
            marginTop: "0%"
        }, 1000);
    });

    $("#croix").on(""+touchOrClick()+"", function () {
        $(".credits").animate({ marginTop: "100%" }, 750);
        setTimeout(function () {
            $(".credits").css("display", "none");
        }, 750);
    });

    //Slider crédits
    $("#chevronGauche").on(""+touchOrClick()+"",function(){
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
    
    $("#chevronDroite").on(""+touchOrClick()+"",function(){
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

// ### Autorisation scroll ###
$(document).on('touchmove', function(e){ e.preventDefault(); }); // Disable scroll
$('.texte').on('touchmove', function (e) { e.stopPropagation(); }); // Allow scroll
$('.codeBleu').on('touchmove', function (e) { e.stopPropagation(); }); // Allow scroll

// Detect orientation tablet
function doOnOrientationChange() {
    switch(window.orientation) {
      case -90:
      case 90:
        $(".orientation").remove();
        break;
      case 0:
      case 180:
        $(".container").append("<div class='overlay orientation'><div class='content-orientation'><img src='../img/orientation.png' alt='tablet' class='imgOrientation'><p>Tourne la tablette</p></div></div>");
        $(".imgOrientation").on('error', function() { $(this).attr("src","img/orientation.png"); });
        break;
    }
}

// ### Disparition vues 2 et 3 crédits lorsque l'on est en anglais ###

if (dir=="en") {
    $(".title",".credits").text("CREDIT");
    $("#second-view , #third-view , #chevronDroite , .ariane").css("display","none");
    $("#sous-texte").css("width","100%");
    $(".justify").text("Toddle has been created and developped by AVEC agency, as part of a student project during the Bachelor's Degree CRWW (2016-2017) at IUT of Champs-sur Marne, in partnership with the Centre Georges Pompidou in Paris.");
    $("#oeuvres").text("The following works have been used in Toddle:");
    $(".develop").text("Developer");
    $("#caro").text("Project Manager");
    $("#antoine").html("Graphic<br>Designer");
}

/* Fonction pour detecter si l'appli est joué sur un iphone ou ipad pour gérer les événeents touch et click à la fois
    On initialise une variable avec la valeur click et si on est sur iphone ou ipad, cette variable prend la valeur
*/
var touchOrClique = "click";
var agentUtilisateur = navigator.userAgent.match(/i(Pad|Phone)/i);

function touchOrClick(){
    if (agentUtilisateur != null) {
        if (navigator.userAgent.match(/i(Pad|Phone)/i)[0]=="iPhone"||ipadOrIphone[0]=='iPad') {
            touchOrClique=""+touchOrClick()+"";
        }
    }
    return touchOrClique;
}