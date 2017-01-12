//Initialisations
var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");

//Affectations
canvas.width = leftBloc.offsetWidth;
canvas.height = leftBloc.offsetHeight;

canvas2.width = indicecontent.offsetWidth - 10;
canvas2.height = indicecontent.offsetHeight - 10;