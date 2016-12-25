var oeuvre, newOeuvre;

$(document).ready(function () {
    // button launch experience
    $(".launch", ".container").click(function () {
        location.href = "name.php";
    });

    // button re-launch experience
    $(".retry", ".content").click(function () {
        location.href = "index.html";
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