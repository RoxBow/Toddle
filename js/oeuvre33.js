var range1 = 0,
    range2 = 0,
    range3 = 0,
    range4 = 0,
    tuto = 0;

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
  if (tuto == 0) {
    $("#handclick").css("animation-play-state","paused");
    $("#handclick").css("display","none");
    tuto = 1;
  }
}

  document.body.addEventListener('touchstart', touche, false);
});

$("#valider").on("touchstart",function(){
	console.log(range1+","+range2+","+range3);
    if (test(range1,range2,range3)){
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
		canvas = document.getElementById("myCanvas1");
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

    drawRect(125, 265, 200, 100, "#eee", ctx3);
    drawRect(125, 275, 200, 100, "grey", ctx3);

		drawRect(125, 325, 175, 100, "black", ctx2);
	}

	function test(a,b,c){
		if (a==-45&&b==-45&&c==45) {
            return true;
        } else return false;
	}

$(function() {
  init();
  /* #### SLIDER #### */
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
      var valueOfRange = ui.value;
      $('#output1').text(valueOfRange);
      $("#val1").text(valueOfRange).css({"font-size":"1.5em", "color": pinkToddle});
      $("#myCanvas1").css("transform","rotate("+valueOfRange+"deg)");
      range1 = valueOfRange;
    }
  });

    $("#range2").slider({
    slide: function(event, ui) {
      var valueOfRange = ui.value;
      $('#output2').text(valueOfRange);
      $("#val2").text(valueOfRange).css({"font-size":"1.5em", color: pinkToddle});
      $("#myCanvas2").css("transform","rotate("+valueOfRange+"deg)");
      range2 = valueOfRange;
    }
  });

    $("#range3").slider({
    slide: function(event, ui) {
      var valueOfRange = ui.value;
      $('#output3').text(valueOfRange);
      $("#val3").text(valueOfRange).css({"font-size":"1.5em", color: pinkToddle});
      $("#myCanvas3").css("transform","rotate("+valueOfRange+"deg)");
      range3 = valueOfRange;
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
