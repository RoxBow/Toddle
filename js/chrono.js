var sec, min, count;
var centi = 0; // Init dixième

// Global variable GET time
var localSec = localStorage.getItem("seconde");
var localMin = localStorage.getItem("minute");

// Remove spaces when page is refresh
localSec = localSec.replace(/\s/g, '');
localMin = localMin.replace(/\s/g, '');

function chrono(){
    centi++; // dixième
    if (centi > 9){
        centi = 0;
        sec++;
    }
    if (sec > 59){
        sec = 0;
        min++;
    }
    //document.querySelector("#dix").value = " "+centi //on affiche les dixièmes
    document.querySelector("#sec").value = sec //on affiche les secdes
    document.querySelector("#min").value = min //on affiche les mintes
    count = setTimeout('chrono()', 100) //la fonction est relancée 
}

// Reset compteur
function RAZ(){
    clearTimeout(count); // Stop function chrono
    centi = 0;
    sec = 0;
    min = 0;
    //document.querySelector("#dix").value = " "+centi //on affiche les dixièmes
    document.querySelector("#sec").value = sec //on affiche les secdes
    document.querySelector("#min").value = min //on affiche les mintes
}

function stopchrono(){
    clearTimeout(count); // Stop function chrono
}