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
    
    /* ### MAP ### */
    $(document).click(function (e) {
        if( $(".help_map").is(e.target) ){
            $(".overlay").css("display","block");
        }
        else if ( !$(".popup").is(e.target) ) {
            $(".overlay").css("display","none");
        }
        
    });
    
});


// User picture - Display img after upload and analyze color
function getFile() {
    var preview = document.querySelector('#preview');
    var file    = document.querySelector('input[type=file]').files[0]; // Img
    var reader  = new FileReader();
    
    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        
        /*
        // Analyze color of file upload
        var api = resemble(file).onComplete(function(data){
            console.log(data);
        });
        */
        console.log(file);
        compareImg(file);
    }
}

// Original picture
function getArt() {
    var file    = new File("https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150");
    var reader  = new FileReader();
    
    console.log(file);

    reader.addEventListener("load", function () {
        file.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        console.log(file);
    }
}

function compareImg(picUser){
    /*
    var diff = resemble(picUser).compareTo(art).ignoreColors().onComplete(function(data){
        console.log(data);
    });
    */
    
    var api = resemble(picUser).onComplete(function(data){
        console.log(data);
    });
}



