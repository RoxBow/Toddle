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
    
    $("#color").blur(function() {
        if($(this).val() == "teinteFroide"){
            currentColor = teinteFroide.slice();
        }
        else if ($(this).val() == "teinteChaude") {
            currentColor = teinteChaude.slice();
        }
        
        init();
    });
    
    $('#nbrSquare').bind('input', function() { 
        nbrSquare = $(this).val();
        init();
    });
    
    for(var i = 0; i < teinteChaude.length; i++){
        $(".contentChaud").append("<span class='colors' style='background:#"+teinteChaude[i]+"'></span>");
        $(".contentFroid").append("<span class='colors' style='background:#"+teinteFroide[i]+"'></span>");
    }
});

var canvas;
var ctx;

var square;

var squares, taille;

var currentColor = "000";
var nbrSquare = 0;

var teinteFroide = ["4C4C6E", "375D8F", "0071B5", "728B74", "BEB140", "E5C200", "FFD700"];
var teinteChaude = ["644762", "96354C", "BA0000", "D44D00", "FBA800", "FEC100", "FFD700"];

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initSquares();
    render();
}

// Init form
function initSquares() {
    var startWidth = 600;
    squares = [];
    taille = [];

    for (var i = 0; i < nbrSquare; i++) {
        taille.push(startWidth);
        startWidth -= 100;
        squares.push({
            x : canvas.width / 2,
            y : canvas.height / 2,
            width: taille[i],
            height: taille[i],
            color : "#"+currentColor[i]
        });
        
        console.log(squares[i].width);
    }
}

// Draw forms
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < squares.length; i++) {
    square = squares[i];

    ctx.beginPath();
    ctx.strokeStyle = square.color;
    ctx.lineWidth = 24;
    ctx.rect(square.x - square.width / 2, square.y - square.height / 2, square.width, square.height);
    ctx.stroke();
  }
}

// When document is loaded
(function () {
    init();
})();