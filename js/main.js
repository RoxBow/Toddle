var oeuvre, newOeuvre;

$(document).ready(function() {
    // button launch experience
    $(".launch",".container").click(function() {
        location.href = "name.php";
    });
    
    // button re-launch experience
    $(".retry",".content").click(function() {
        location.href = "index.html";
    });
    
    /* ### TUTO ### */
    $('.lesson','.lessons').each(function() {
        $('.lesson','.lessons').click(function(e) {
            e.preventDefault();
            
            if( $(e.target).hasClass('understood') ){
                // add "up" class to lesson selected and hide others
                $(e.target).parent().parent().toggleClass('up').next(".lesson").addClass("up");
            }
            else if( $(e.target).hasClass('fa-chevron-left') ){
                // click on arrow left, open previous lesson
                $(e.target).parent().toggleClass('up').prev(".lesson").addClass("up");
            }
            if( $(e.target).hasClass('understood') && $(e.target).parent().parent().is(':last-child') ){
                location.href="map.php"; // Redirect to map after making tuto
            }
            
            return false;
        });
    });
    
    // Our own oeuvre picture
    oeuvre = new Image();
    oeuvre.src = "img/oeuvreTest.png";
    newOeuvre = getBase64Image(oeuvre);

    /*Apparition page credits*/
    $("footer>img").click(function(){
      $(".credits").css("display","block");
      $( ".credits" ).animate({
        marginTop: "0%"
      }, 2000);
    });
    $("#croix").click(function(){
      $( ".credits" ).animate({
        marginTop: "100%"
      }, 2000);
      setTimeout(function(){
        $(".credits").css("display","none");
      }, 2000);
    });    
});

// Compare 2 pictures when user add his one
function getFile() {
    var userFile = document.querySelector('#picture').files[0]; // Img
    // When user takes his photo
    if (userFile) {
        console.log(userFile);
        var diff = resemble(userFile).compareTo(newOeuvre).ignoreColors().onComplete(function(data){
            console.log(data);
            if (data.misMatchPercentage < 20.00) {
                document.location.href = "oeuvretrouve.php";
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