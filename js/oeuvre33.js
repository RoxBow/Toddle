var range1 = 0;
var range2 = 0;
var range3 = 0;
var range4 = 0;

var tuto = 0;

// When page is left
$(window).bind('beforeunload',function(){
    localStorage.setItem("seconde", $("#sec").val() );
    localStorage.setItem("minute", $("#min").val() );
});

// Update time script
sec = localSec;
min = localMin;

$(document).ready(function() {
    /* ### CHRONO ### */
    $("#sec").val(localSec);
    $("#min").val(localMin);
    chrono();

    function touche() {
          if (tuto==0) {
            $("#handclick").css("animation-play-state","paused");
            $("#handclick").css("display","none");
            tuto=1;
          }
        }

    document.body.addEventListener('touchstart', touche, false);
});

/* #####    CHRONO END     ##### */

$("#valider").on("click",function(){
	console.log(range1+","+range2+","+range3);
    if (test(range1,range2,range3)){
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
$(".continuer").on("click",function(){
    if(levelUser < 5){
        nbrLevel++;
        localStorage.setItem("levelUser", nbrLevel);
        localStorage.setItem("seconde", $("#sec").val() );
        localStorage.setItem("minute", $("#min").val() );
        document.location.replace("map.php");
    }
    else {
        document.location.replace("result.php");
    }
});
$(".rechercher").on("click",function(){
    $('#loose').fadeOut(500);
});

	var canvas;
	var ctx;

	function init() {
		canvas = document.getElementById("myCanvas");
		ctx = canvas.getContext("2d");
		canvas2 = document.getElementById("myCanvas2");
		ctx2 = canvas2.getContext("2d");
		canvas3 = document.getElementById("myCanvas3");
		ctx3 = canvas3.getContext("2d");
		canvas4 = document.getElementById("myCanvas4");
		ctx4 = canvas4.getContext("2d");

		canvas.width = 500;
		canvas.height = 500;

		canvas2.width = 500;
		canvas2.height = 500;

		canvas3.width = 500;
		canvas3.height = 500;

		canvas4.width = 500;
		canvas4.height = 500;
		//Lancement des dessins
		draw();
	}

	//Lignes verticales
	function drawGrid (nbr, color, context){
		var ecart = -60;
		context.beginPath();
		for(var i=0; i < nbr; i++){
			context.moveTo(ecart, 0);
			context.lineTo(ecart, canvas.height);
			ecart += 12; // Space between line of ONE grid

		}
		context.strokeStyle = color;
		context.stroke();
		context.closePath();

	} // End drawGrid

    function drawRect(posX,posY,wid,hei,color,context){
        context.fillStyle=color;
        context.fillRect(posX,posY,wid,hei);
    }

    function drawPoint(posX, posY, radius, color, context){
        context.beginPath();
        context.arc(posX, posY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = '#333';
        context.stroke();
    }

	function draw (){
		drawPoint(185, 70, 12, "white", ctx4);

        drawRect(110, 121, 300, 4, "black", ctx);

        drawRect(125, 275, 200, 100, "grey", ctx3);

		drawRect(125, 325, 175, 100, "black", ctx2);
	}

	(function () {
	    init();
	})();

	function test(a,b,c){
		if (a==-45&&b==-45&&c==45) {
            return true;
        } else return false;
	}

	$(function() {

        $("#myCanvas").css("transform","rotate(-90deg)");
        $("#myCanvas2").css("transform","rotate(-90deg)");
        $("#myCanvas3").css("transform","rotate(-90deg)");
      
      /* ######### */
    $(".range").slider();

      $('.range').slider({
        value:0,
        min: -90,
        max: 90,
        step: 5,
        //animate: "fast",
      });
      
      $("#range1").slider({
        slide: function(event, ui) {
          var $set = ui.value;
          $('#output1').text($set);
          
          $("#val1").text($set).css({"font-size":"1.5em", "color": pinkToddle});
          $("#myCanvas").css("transform","rotate("+$set+"deg)");
          range1 = $set;
        }
      });
        
        $("#range2").slider({
        slide: function(event, ui) {
          var $set = ui.value;
          $('#output2').text($set);
          
          $("#val2").text($set).css({"font-size":"1.5em", color: pinkToddle});
          $("#myCanvas2").css("transform","rotate("+$set+"deg)");
          range2 = $set;
        }
      });
                          
        $("#range3").slider({
        slide: function(event, ui) {
          var $set = ui.value;
          $('#output3').text($set);
          $(".valDeg").css("font-size","1em");
          $("#val3").text($set).css("font-size","1.5em");
          $("#myCanvas3").css("transform","rotate("+$set+"deg)");
          range3 = $set;
        }
      });
      
      $( ".range" ).on( "touchend", function() {
        $(".valDeg").css({"font-size":"1em", "color": "#000"});
      });
      
      
    });

function win(){
    $('#win').fadeIn(500);
}
function lose(){
    $('#loose').fadeIn(500);
}
