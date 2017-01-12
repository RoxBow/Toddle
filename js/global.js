/* GLOBAL VARIABLE */
var currentArt, currentRoom;

// Variable oeuvre
const roomKlein = "27";
const roomMondrian = "17";
const roomTram4 = "35";
const roomMasMenos = "29";
const roomMasomenos = "31";
const roomMariale = "33";

// Variable cache level
var levelUser = localStorage.getItem("levelUser");
var nbrLevel = levelUser;

levelUser = levelUser.replace(/\s/g, ''); // Remove spaces

switch (levelUser) {
    case "1":
        currentArt = "img/kleinBlue.png";
        currentRoom = roomKlein;
        $("#levelUser").text(levelUser);
        break;
    case "2":
        currentArt = "img/mondrian.png";
        currentRoom = roomMondrian;
        $("#levelUser").text(levelUser);
        break;
    case "3":
        currentArt = "img/tram4.png";
        currentRoom = roomTram4;
        $("#levelUser").text(levelUser);
        break;
    case "4":
        currentArt = "img/masomenos.png";
        currentRoom = roomMasomenos;
        $("#levelUser").text(levelUser);
        break;
    case "5":
        currentArt = "img/mariale.png";
        currentRoom = roomMariale;
        $("#levelUser").text(levelUser);
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