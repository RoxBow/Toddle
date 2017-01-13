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

/* #####    CHRONO END     ##### */

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

		/*canvas.width =2000;
		canvas.height =  2000;

		canvas2.width =2000;
		canvas2.height =  2000;

		canvas3.width =2000;
		canvas3.height =  2000;

		canvas4.width =2000;
		canvas4.height =  2000;*/
		
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
	$(function() {

        $('#output1').text($('.range').val()); // Valeur par défaut
        $('.range').on('input', function() {
            var $set = $(this).val();
            $('#output1').text($set);
            $("#val1").text($set);
            $("#myCanvas").css("transform","rotate("+$set+"deg)");
        });

        $('#output2').text($('.range2').val()); // Valeur par défaut
        $('.range2').on('input', function() {
            var $set = $(this).val();
            $('#output2').text($set);
            $("#val2").text($set);
            $("#myCanvas2").css("transform","rotate("+$set+"deg)");
        });

        $('#output3').text($('.range3').val()); // Valeur par défaut
        $('.range3').on('input', function() {
            var $set = $(this).val();
            $('#output3').text($set);
            $("#val3").text($set);
            $("#myCanvas3").css("transform","rotate("+$set+"deg)");
        });

        $('#output4').text($('.range4').val()); // Valeur par défaut
        $('.range4').on('input', function() {
            var $set = $(this).val();
            $('#output4').text($set);
            $("#val4").text($set);
            $("#myCanvas4").css("transform","rotate("+$set+"deg)");
        });

    });