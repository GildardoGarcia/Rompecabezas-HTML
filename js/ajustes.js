var imagen;
var piezas;
var valores;


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