sec = 0; // Init sec
min = 0; // Init min

var oeuvre, newOeuvre;

$(document).ready(function() {
    // Launch loader
    $("label",".cs-loader-inner").addClass("anim");
  
    // Launch chrono
    chrono();

    /* CHRONO */
    if(localSec != 0 || localMin != 0){
        // Update time script
        sec = localSec;
        min = localMin;
        // Update time display
        $("#sec").val(localSec);
        $("#min").val(localMin);
    }
  
    var countTouch = 0;
  
    $("#cheat", ".container").on(""+touchOrClick()+"", function() {
      countTouch++;
      if(countTouch == 5){
        var levelCheat = prompt("Entre directement le niveau", "");
        localStorage.setItem("levelUser", levelCheat);
        location.reload();
      }
    });
    
    $(document).on( ""+touchOrClick()+"", function(e) {
        // POPUP HELP
        if( $(".help_map").is(e.target) || $(".fa-question").is(e.target) ){
            $("#indiceBloc").fadeIn();
            $("#indice").css("animation-play-state","paused");
        } else if($("#indiceBloc").is(e.target) || $("#close", "#indiceBloc").is(e.target)){
          $("#indiceBloc").fadeOut();
        }
    });

    // Blink room on map
    setInterval(function() {
        var numRoom = $("#map").contents().find("#"+currentRoom);
        
        if (numRoom.attr("opacity") == '0') {
            numRoom.attr({"fill":"#F38F9A", "opacity":".8"});
        } else {
            numRoom.attr({"opacity":"0"});
        }
    }, 500);
});

/* ### COMPARE 2 PICTURES ### */

// Compare 2 pictures when user add his one
function getFile() {
    //Lancement loader
    $("#overlayChargement").fadeIn(500);
    setTimeout(function(){
        // Our own oeuvre picture
        oeuvre = new Image();
        oeuvre.src = currentArt;
        // Oeuvre is load
        oeuvre.onload = function(){
            newOeuvre = getBase64Image(oeuvre);
            var userFile = document.querySelector('#picture').files[0]; // Img
            // When user takes his photo
            if (userFile) {
                console.log(userFile);
                var diff = resemble(userFile).compareTo(newOeuvre).scaleToSameSize().onComplete(function (data) {
                    console.log(data);
                    console.log(data.misMatchPercentage);
                    //if (data.misMatchPercentage > 0.00) {
                        console.log(data.misMatchPercentage);
                        
                        localStorage.setItem("seconde", $("#sec").val());
                        localStorage.setItem("minute", $("#min").val());
                        document.location.replace("oeuvretrouve"+levelUser+".php");
                    /*}
                    else {
                        $("#overlayChargement").fadeOut(500);
                        console.log(data.misMatchPercentage + " de différence, il doit être supérieur à 50%.");
                        if(dir == "fr"){
                            $(".container").append("<div class='badPicture'><span class='fa-stack'><i class='fa fa-circle fa-stack-2x rose'></i><i class='fa fa-times fa-stack-1x fa-inverse' aria-hidden='true'></i></span><p>Ce n'est pas la bonne oeuvre.</p><p style='font-size:2em;'>"+data.misMatchPercentage+"</p></div>");
                        }
                        else {
                            $(".container").append("<div class='badPicture'><span class='fa-stack'><i class='fa fa-circle fa-stack-2x rose'></i><i class='fa fa-times fa-stack-1x fa-inverse' aria-hidden='true'></i></span><p>This is not the right one.</p></div>");
                        }
                        
                        $(".badPicture").animate({
                            top: "3%"
                          }, 1500, function() {
                            setTimeout(function(){
                                $(".badPicture").animate({
                                    top: "-30%"
                                }, 1500);
                            }, 1000);
                          });
                    }*/
                });
              
              console.log(diff);
            }
        };
    }, 500);
}

// Transform img in encode base 64 with canvas
function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}