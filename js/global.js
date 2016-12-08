/* GLOBAL VARIABLE */

//Initialisations
var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");


//Affectations
canvas.width=leftBloc.offsetWidth;
canvas.height=leftBloc.offsetHeight;

canvas2.width=indicecontent.offsetWidth-10;
canvas2.height=indicecontent.offsetHeight-10;


//Couleurs de l'appli
var pinkToddle = "#F38F9A";
var bleuToddle = "#355E7E";
var beigeToddle = "#F8B195";

//Positions crédits
$("footer>img").click(function(){
  $(".credits").css("display","block");
  $( ".credits" ).animate({
    marginTop: "0%"
  }, 2000);
});
$("#croix").click(function(){
  $( ".credits" ).animate({
    marginTop: "100%"
  }, 2000);
  setTimeout(function(){
    $(".credits").css("display","none");
  }, 2000);
});
