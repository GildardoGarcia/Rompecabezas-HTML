var imagen="chikorita";
var piezas="9";
var valores = "chikorita,9";
setCSS();


function chikorita(){
    imagen="chikorita";
    
    if(document.getElementById("NumPiezas").checked){
        piezas="9";
        valores = imagen + "," + piezas;
    }

    else{
        piezas="16";
        valores = imagen + "," + piezas;
    } 
    setCSS();
}
function setCSS(){
    document.getElementById("chikorita").classList="";
    document.getElementById("totodile").classList="";
    document.getElementById("cyndaquil").classList="";
    document.getElementById(imagen).classList="selected";

}
function totodile(){
    imagen="totodile";

    if(document.getElementById("NumPiezas").checked){
        piezas="9";
        valores = imagen + "," + piezas;
    }

    else{
        piezas="16";
        valores = imagen + "," + piezas;
    }
    setCSS();
}

function cyndaquil(){
    imagen="cyndaquil";

    if(document.getElementById("NumPiezas").checked){
        piezas="9";
        valores = imagen + "," + piezas;
    }

    else{
        piezas="16";
        valores = imagen + "," + piezas;
    }
    setCSS();
}

function enviarInfo(){
    var pagina = "inicio.html?";
    var minutos = document.getElementById("minutos").value;
    var segundos = document.getElementById("segundos").value;

    valores = valores + "," + minutos + "," + segundos;

    var parametros = ["imagen" , "piezas", "minutos", "segundos"];
    var valVec= valores.split(",");
    var i;
  
    for(i=0; i<valVec.length; i++){
        pagina=pagina+parametros[i]+"="+valVec[i]+"&";
    }
    
    pagina=pagina.substring(0,pagina.length-1);
    location.href=pagina;
    return;
    
}