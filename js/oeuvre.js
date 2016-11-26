/*var body = document.getElementsByTagName("body");
body.width = window.innerWidth;
body.height = window.innerHeight;*/
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight;
ctx.fillStyle="#002FA7";
ctx.fillRect(0,0,canvas.width,canvas.height);

/* #####    CHRONO      ##### */

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