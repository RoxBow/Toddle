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

levelUser = levelUser.replace(/\s/g, ''); // Remove spaces

switch (levelUser) {
    case "1":
        currentArt = "img/kleinBlue.png";
        currentRoom = roomKlein;
        $("#levelUser").text(levelUser);
        $("#indiceMap",".popup2").text("La première oeuvre devant laquelle tu dois te rendre, est une oeuvre monochrome d'un artiste français du XXe siècle. Il est connu pour son travail autour d'une couleur particulière.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "2":
        currentArt = "img/masomenos.png";
        currentRoom = roomMasomenos;
        $("#levelUser").text(levelUser);
        $("#nbrDefi",".defi").text(levelUser);
        $("#indiceMap",".popup2").text("La deuxième oeuvre devant laquelle tu dois te rendre, est un tableau de grande taille, constitué de lignes horizontales brisées, d’un peintre américain minimaliste du XXe siècle.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "3":
        currentArt = "img/trames4.png";
        currentRoom = roomTram4;
        $("#levelUser").text(levelUser);
        $("#indiceMap",".popup2").text("La troisième oeuvre devant laquelle tu dois te rendre, est un tableau en noir et blanc d’un artiste français du XXe siècle, précurseur de l’abstraction géométrique. La structure de ce tableau est très précise puisque les minces lignes qui le composent sont disposées mathématiquement sur la toile.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "4":
        currentArt = "img/mondrian.png";
        currentRoom = roomMondrian;
        $("#levelUser").text(levelUser);
        $("#indiceMap",".popup2").text("La quatrième oeuvre devant laquelle tu dois te rendre, est un tableau d’un peintre néerlandais du XXe siècle. Le tableau est composés de lignes aux couleur primaires, pouvant rappeler le plan d’une célèbre ville américaine.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    case "5":
        currentArt = "img/jauneauviolet.png";
        currentRoom = roomJauneViolet;
        $("#levelUser").text(levelUser);
        $("#indiceMap",".popup2").text("La dernière oeuvre devant laquelle tu dois te rendre, est un double tableau d’un artiste français du XXe siècle, précurseur de l’abstraction géométrique. Ce tableau aborde le dégradé grâce à des formes géométriques simples.");
        $("#nbrDefi",".defi").text(levelUser);
        break;
    default:
        document.location.href = "index.html";
}

//Couleurs de l'appli
var pinkToddle = "#F38F9A";
var bleuToddle = "#355E7E";
var beigeToddle = "#F8B195";

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