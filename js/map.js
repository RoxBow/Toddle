$(document).ready(function() {
    
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