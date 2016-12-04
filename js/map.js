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
    
    chrono();
    
    $(document).click(function (e) {
        /* POPUP HELP */
        if( $(".help_map").is(e.target) || $(".fa-question").is(e.target) ){
            $(".overlay").fadeIn();
        }
        else if ( !$(".popup").is(e.target) ) {
            $(".overlay").fadeOut();
        }
    });

    setInterval(function() {
        var room30 = $("#map").contents().find("#room30");
        //$("#map").contents().find("rect").attr({"opacity":"0"});
        //$("#map").contents().find("#room30").attr({"fill":"red", "opacity":"1"});
        
        if (room30.attr("opacity") == '0') {
            room30.attr({"fill":"#F38F9A", "opacity":".8"});
        }
        else {
            room30.attr({"opacity":"0"});
        }
    }, 500);
    
    
});