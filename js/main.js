$(document).ready(function() {
    // button launch experience
    $(".launch",".container").click(function() {
        location.href = "name.php";
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