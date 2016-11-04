$(document).ready(function() {
    
    // button launch experience
    $(".launch",".container").click(function() {
      location.href = "name.php";
    });
    
    $('.lesson','.lessons').each(function() {
        $('.lesson','.lessons').click(function(e) {
            e.preventDefault();
            // add "up" class to lesson selected and hide others
            $(e.target).toggleClass('up').siblings().removeClass('up');
            return false;
        });
    });
});