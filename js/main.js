var vchikorita;
var vtotodile;
var vcyndaquil;
var NumPieza = document.getElementById("NumPiezas").value;
var NumPieza2 = document.getElementById("NumPiezas2").value;
var piezas;

function chikorita(){
    vchikorita = 1;
    vtotodile = 0;
    vcyndaquil = 0;
}

function totodile(){
    vtotodile = 1;
    vchikorita = 0;
    vcyndaquil = 0;
}

function cyndaquil(){
    vcyndaquil = 1;
    vchikorita = 0;
    vtotodile = 0;
}

function enviarInfo(){
    if(vchikorita==1){
        if(document.getElementById("NumPiezas").checked){
            piezas=NumPieza;
            document.getElementById("mensajepiezas").innerHTML = "9";
            alert("chikorita" + piezas);
            return;
        }

        else{
            piezas=NumPieza2;
            document.getElementById("mensajepiezas").innerHTML = "16";
            alert("chikorita" + piezas);
            return;  
        }
    }

    if(vtotodile==1){
        if(document.getElementById("NumPiezas").checked){
            piezas=NumPieza;
            alert("totodile" + piezas);
            return;
        }
    
        else{
            piezas=NumPieza2;
            alert("totodile" + piezas);
            return;  
        } 
    }

    if(vcyndaquil==1){
        if(document.getElementById("NumPiezas").checked){
            piezas=NumPieza;
            alert("cyndaquil" + piezas);
            return;
        }
    
        else{
            piezas=NumPieza2;
            alert("cyndaquil" + piezas);
            return;         
        }
    }
}

