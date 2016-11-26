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
    if(localSec != 0 || localMin != 0){
        // Update time script
        sec = localSec;
        min = localMin;
        // Update time display
        $("#sec").val(localSec);
        $("#min").val(localMin);
    }
    
    chrono();

    setTimeout(function(){
        $("#map").contents().find("rect").attr({"opacity":"0"});
        $("#map").contents().find("#room30").attr({"fill":"red", "opacity":"1"});
    }, 3000);
    
    setTimeout(function(){
        $("#map").contents().find("rect").attr({"opacity":"0"});
        $("#map").contents().find("#room27").attr({"fill":"blue", "opacity":"1"});
    }, 6000);
    
    setTimeout(function(){
        $("#map").contents().find("rect").attr({"opacity":"0"});
        $("#map").contents().find("#room24").attr({"fill":"pink", "opacity":"1"});
    }, 9000);
    
    setTimeout(function(){
        $("#map").contents().find("rect").attr({"opacity":"0"});
        $("#map").contents().find("#room37").attr({"fill":"orange", "opacity":"1"});
    }, 12000);
    
    setTimeout(function(){
        $("#map").contents().find("rect").attr({"opacity":"0"});
        $("#map").contents().find("#room38").attr({"fill":"orange", "opacity":"1"});
    }, 15000);
    
});