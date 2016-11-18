
var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	canvas.width=window.innerWidth/2;
	canvas.height=window.innerHeight;
	ctx.fillStyle="#002FA7";
	ctx.fillRect(0,0,canvas.width,canvas.height);



	 var vert = document.querySelector('#vert');
  	var rouge = document.querySelector('#rouge');
  	var jaune = document.querySelector('#jaune');
  
	vert.addEventListener('dragstart', function(e) {
    	e.dataTransfer.setData('text/plain', "vert");
	});
	rouge.addEventListener('dragstart', function(e) {
    	e.dataTransfer.setData('text/plain', "rouge");
	});
	jaune.addEventListener('dragstart', function(e) {
    	e.dataTransfer.setData('text/plain', "jaune");
	});

	canvas.addEventListener('dragover', function(e) {
    	e.preventDefault(); // Annule l'interdiction de drop
    	//c.style.backgroundColor = '#ff9100';
	});

	canvas.addEventListener('drop', function(e) {
    	e.preventDefault(); // Annule l'interdiction de drop
	    //alert(e.dataTransfer.getData('text/plain')); // Affiche le contenu du type MIME « text/plain »

        //Nous peret de tester quelle truc a été dropé avec le setData text/plain
	  if (e.dataTransfer.getData('text/plain')=="vert") {
	  	ctx.clearRect(0,0,canvas.width,canvas.height);
	    ctx.fillStyle="#CBE6A3";
	    ctx.fillRect(0,0,canvas.width,canvas.height);
	  } else if (e.dataTransfer.getData('text/plain')=="rouge") {
	  		ctx.clearRect(0,0,canvas.width,canvas.height);
	  		ctx.fillStyle="#AA1123";
	    	ctx.fillRect(0,0,canvas.width,canvas.height);
      	} else if (e.dataTransfer.getData('text/plain')=="jaune") {
      			ctx.clearRect(0,0,canvas.width,canvas.height);
      			ctx.fillStyle="#F8CB00";
	    		ctx.fillRect(0,0,canvas.width,canvas.height);
      		}
	});

	/*document.addEventListener('dragend', function() {
	    alert("Un Drag & Drop vient de se terminer mais l'événement dragend ne sait pas si c'est un succès ou non.");
	});*/

canvas.width=window.innerWidth/2;
canvas.height=window.innerHeight;
ctx.fillStyle="#002FA7";
ctx.fillRect(0,0,canvas.width,canvas.height);

