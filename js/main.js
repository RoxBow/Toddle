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
});

/* Check length pseudo user */
function validateMyForm(){
    var pseudo = $("#pseudo").val();
    if(pseudo.length < 3){
        $(".error").remove();
        $("#pseudo").after("<p class='error'>Pseudo trop court</p>");
        $("#pseudo").css({
            "border": "2px solid red",
            "margin-bottom": "0"
        });
    }
    else if(pseudo.length > 10){
        $(".error").remove();
        $("#pseudo").after("<p class='error'>Pseudo trop long</p>");
        $("#pseudo").css({
            "border": "2px solid red",
            "margin-bottom": "0"
        });
    }
    else {
        $.ajax({
          type: "POST",
          url: "login.php",
          data: { 'pseudo': pseudo },
          success: function(data) {
                console.log(pseudo+" save");
                document.location.href = "tuto.php"
          }
        });
    }
}