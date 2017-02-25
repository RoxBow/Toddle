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

$("#valider").on("touchstart",function(){
	console.log(range1+","+range2+","+range3+","+range4);
    if (test(range1,range2,range3,range4)){
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

$(".continuer").on("touchstart",function(){
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
$(".rechercher").on("touchstart",function(){
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

		canvas.width = 700;
		canvas.height = 700;

		canvas2.width = 700;
		canvas2.height = 700;

		canvas3.width = 700;
		canvas3.height = 700;

		canvas4.width = 700;
		canvas4.height = 700;
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

	//Lignes Horizontales
	function drawGrid2 (nbr, color, context){
		var ecart = -60;
		context.beginPath();
		for(var i=0; i < nbr; i++){
			context.moveTo(0, ecart);
			context.lineTo(canvas.width, ecart);
			ecart += 12; // Space between line of ONE grid

		}
		context.strokeStyle = color;
		context.stroke();
		context.closePath();

	} // End drawGrid

	function draw (){
		drawGrid(200, "black", ctx);
		drawGrid2(200, "black", ctx);

		drawGrid(200, "black", ctx2);
		drawGrid2(200, "black", ctx2);

		drawGrid(200, "black", ctx3);
		drawGrid2(200, "black", ctx3);

		drawGrid(200, "black", ctx4);
		drawGrid2(200, "black", ctx4);
	}

	(function () {
	    init();
	})();

	function test(a,b,c,d){
		if ((a==0||b==0||c==0||d==0)) {
			if ((a==22.5||b==22.5||c==22.5||d==22.5)) {
				if ((a==45||b==45||c==45||d==45)) {
					if ((a==67.5||b==67.5||c==67.5||d==67.5)) {
						return true;
					}	else return false;
				}	else return false;
			}	else return false;
		} 	else return false;
	}

	$(function() {

        $('#output1').text($('.range').val()); // Valeur par défaut
        $('.range').on('input', function() {
            var $set = $(this).val();
            $('#output1').text($set);
            $("#val1").text($set);
            $("#myCanvas").css("transform","rotate("+$set+"deg)");
            range1 = $set;
        });


        $('#output2').text($('.range2').val()); // Valeur par défaut
        $('.range2').on('input', function() {
            var $set = $(this).val();
            $('#output2').text($set);
            $("#val2").text($set);
            $("#myCanvas2").css("transform","rotate("+$set+"deg)");
            range2 = $set;
        });


        $('#output3').text($('.range3').val()); // Valeur par défaut
        $('.range3').on('input', function() {
            var $set = $(this).val();
            $('#output3').text($set);
            $("#val3").text($set);
            $("#myCanvas3").css("transform","rotate("+$set+"deg)");
            range3 = $set;
        });


        $('#output4').text($('.range4').val()); // Valeur par défaut
        $('.range4').on('input', function() {
            var $set = $(this).val();
            $('#output4').text($set);
            $("#val4").text($set);
            $("#myCanvas4").css("transform","rotate("+$set+"deg)");
            range4 = $set;
        });

    });

function win(){
    $('#win').fadeIn(500);
}
function lose(){
    $('#loose').fadeIn(500);
}