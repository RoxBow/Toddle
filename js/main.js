var countClick = 0;

$(document).ready(function () {
    // Check if tablet mode is portrait or landscape
    if(window.innerHeight > window.innerWidth){
        alert("Tourne la tablette en paysage!");
    }
    
    // Check if user change orientation tablet
    window.addEventListener("orientationchange", function() {
        if(screen.orientation.type == "portrait-primary"){
            alert("Tourne la tablette en paysage!");
        }
    });
    
    // button launch experience
    $(".launch", ".container").click(function () {
        location.href = "name.php";
    });

    $("#reset",".content").click(function () {
        countClick += 1;
        console.log(countClick);
        if (countClick == 2) {
            location.href = "index.html";
        }
    });
    
    /* ### TUTO ### */
    $('.lesson', '.lessons').each(function () {
        $('.lesson', '.lessons').click(function (e) {
            e.preventDefault();

            if ($(e.target).hasClass('understood')) {
                // add "up" class to lesson selected and hide others
                $(e.target).parent().parent().toggleClass('up').next(".lesson").addClass("up");
            } else if ($(e.target).hasClass('fa-chevron-left')) {
                // click on arrow left, open previous lesson
                $(e.target).parent().toggleClass('up').prev(".lesson").addClass("up");
            }
            if ($(e.target).hasClass('understood') && $(e.target).parent().parent().is(':last-child')) {
                location.href = "map.php"; // Redirect to map after making tuto
            }

            return false;
        });
    });

    /*Apparition page credits*/
    $("footer>img").click(function () {
        $(".credits").css("display", "block");
        $(".credits").animate({
            marginTop: "0%"
        }, 1000);
    });
    $("#croix").click(function () {
        $(".credits").animate({
            marginTop: "100%"
        }, 750);
        setTimeout(function () {
            $(".credits").css("display", "none");
        }, 750);
    });
});