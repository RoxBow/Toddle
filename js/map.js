sec = 0; // Init sec
min = 0; // Init min
        
var valSec, valMin;

// When page is left
$(window).bind('beforeunload',function(){
    valSec = $("#sec").val();
    valMin = $("#min").val();
    // Init global variable time
    localStorage.setItem("seconde", valSec);
    localStorage.setItem("minute", valMin);
});

$(document).ready(function() {
    /* CHRONO */
    if(localSec != 0 || localMin != 0){
        // Update time script
        sec = localSec;
        min = localMin;
        // Update time display
        $("#sec").val(localSec);
        $("#min").val(localMin);
    }
    
    chrono(); // Launch chrono
    
    $(document).click(function (e) {
        /* POPUP HELP */
        if( $(".help_map").is(e.target) || $(".fa-question").is(e.target) ){
            $(".overlay").fadeIn();
            $("#indice").css("animation-play-state","paused");
        }
        else if ( $(".overlay").is(e.target) || $(".close").is(e.target) ) {
            $(".overlay").fadeOut();
        }
    });

    // Blink room on map
    setInterval(function() {
        var room30 = $("#map").contents().find("#room30");
        //$("#map").contents().find("#room30").attr({"fill":"red", "opacity":"1"});
        
        if (room30.attr("opacity") == '0') {
            room30.attr({"fill":"#F38F9A", "opacity":".8"});
        }
        else {
            room30.attr({"opacity":"0"});
        }
    }, 500);
    
    // Our own oeuvre picture
    oeuvre = new Image();
    oeuvre.src = "img/oeuvreTest.png";
    newOeuvre = getBase64Image(oeuvre);

});

// Compare 2 pictures when user add his one
function getFile() {
    var userFile = document.querySelector('#picture').files[0]; // Img
    // When user takes his photo
    if (userFile) {
        console.log(userFile);
        var diff = resemble(userFile).compareTo(newOeuvre).ignoreColors().scaleToSameSize().onComplete(function (data) {
            console.log(data);
            if (data.misMatchPercentage < 50.00) {
                document.location.href = "oeuvretrouve.php";
            }
            else {
                alert(data.misMatchPercentage + " de ressemblance doit être inférieur à 50%.");
                console.log(data.misMatchPercentage);
            }
        });
    }
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