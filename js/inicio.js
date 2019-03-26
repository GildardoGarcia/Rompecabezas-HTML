var msgPiezas = document.getElementById("mensajepiezas");

var msgTiempo = document.getElementById("mensajetiempo");
var posarray16 = [
    "0,0", "1,0", "2,0", "3,0",
    "0,1", "1,1", "2,1", "3,1",
    "0,2", "1,2", "2,2", "3,2",
    "0,3", "1,3", "2,3", "3,3"
];
var posarray9 = [
    "0,0", "1,0", "2,0",
    "0,1", "1,1", "2,1",
    "0,2", "1,2", "2,2",
    "0,3", "1,3", "2,3"
];
var imagen = "chikorita";
var piezas = "9"
var intPiezas = 9;
var minutos;
var segundos;
var tiempo;
var canvas = document.getElementById("imagenBase");
var ctx = canvas.getContext("2d");
var actual = [];
var real = [];
var temp = [];
var matriz = [
    [],
    [],
    [],
    []
];

function habilitar() {

    var urlTemp = location.search;
    var url = urlTemp.substring(1, urlTemp.length);
    var parametros = url.split("&");

    if (parametros[0] == "") {
        imagen = "chikorita";
        piezas = "9"
        intPiezas = 9;
        return;
    }
    for (i = 0; i < parametros.length; i++) {
        var temp = parametros[i].length;

        if (i == 0) {
            imagen = parametros[i].substring(7, temp);
        }

        if (i == 1) {
            msgPiezas.innerHTML = "Cantidad de piezas: " + parametros[i].substring(7, temp);
            piezas = parametros[i].substring(7, temp);
            intPiezas = parseInt(piezas);
        }

        if (i == 2) {
            minutos = parametros[i].substring(8, temp);
        }

        if (i == 3) {
            segundos = parametros[i].substring(9, temp)
        }
    }

    msgTiempo.innerHTML = "Tiempo restante: " + minutos + ":" + segundos;

    if (minutos == undefined) {
        msgTiempo.innerHTML = "Tiempo restante: ";
    }
    rompecabezas();
}

function rompecabezas() {
    var a = 0;
    var b = 0;
    var c = 0;
    dibujarCuadricula();


    for (var a = 0; a < intPiezas; a++) {
        var url = "./imagenes/" + imagen + piezas + "pz/" + a.toString() + ".png";

        real[a] = url;
        temp[a] = real[a];

        if (a == intPiezas - 1) {
            real[intPiezas - 1] = " ";
            temp[intPiezas - 1] = real[intPiezas - 1];
        }
    }
    temp = shuffle(actual);
    updateMatrix();
    console.log(matriz);
    updateCanvas();
}
function updateMatrix(){
    var y = 0;
    var x = 0;
    for (let index = 0; index < temp.length; index++) {

        matriz[y][x] = temp[index];
        x++;
        if (x == 4) {
            x = 0;
            y++;
        }
    }
}
function shuffle(arra1) {
    var ctr = arra1.length,
        temp, index;
    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

function dibujarCuadricula() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (intPiezas == 9) {
        for (var x = 0; x <= 525; x = x + 175) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 600);

            for (var y = 0; y <= 600; y = y + 200) {
                ctx.moveTo(0, y);
                ctx.lineTo(525, y);
            }
        }
    } else {
        for (var x = 0; x <= 525; x = x + 131.25) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 600);

            for (var y = 0; y <= 600; y = y + 150) {
                ctx.moveTo(0, y);
                ctx.lineTo(525, y);
            }
        }
    }
    ctx.strokeStyle = "000000";
    ctx.stroke();
}

function updateCanvas() {

    dibujarCuadricula()
    var d = 0;
    if (intPiezas == 9) {
        for (var pos_y = 2; pos_y <= 402; pos_y = pos_y + 200) {
            for (var pos_x = 2; pos_x <= 352; pos_x = pos_x + 175) {
                var img = new Image();
                img.src = actual[d];
                ctx.drawImage(img, pos_x, pos_y, 171, 196);
                d++;
            }
        }
    } else {
        for (var pos_y = 2; pos_y <= 452; pos_y = pos_y + 150) {
            for (var pos_x = 2; pos_x <= 395.75; pos_x = pos_x + 131.25) {

                var img = new Image();
                img.src = actual[d];
                ctx.drawImage(img, pos_x, pos_y, 127.25, 146);
                d++;
            }
        }
    }
}

function play() {
    if (piezas == "9") {
        rects = []
    }
}


function reiniciar() {
    clearInterval(tiempo);
    msgTiempo.innerHTML = "Tiempo restante: " + minutos + ":" + segundos;
}

function cronometro() {
    var min = parseInt(minutos);
    var seg = parseInt(segundos);

    tiempo = setInterval(
        function () {

            if (min == 0 && seg == 0) {
                msgTiempo.innerHTML = "Tiempo restante: " + min + ":" + "0" + seg;
                clearInterval(cronometro);
                alert("El tiempo se ha agotado");
            }

            if (seg == 0 && min !== 0) {
                seg = 60;
                min--;
                msgTiempo.innerHTML = "Tiempo restante: " + min + ":" + seg;
            }

            if (seg !== 0) {
                seg--;

                if (seg == 9 || seg == 8 || seg == 7 || seg == 6 || seg == 5 || seg == 4 || seg == 3 || seg == 2 || seg == 1 || seg == 0) {
                    msgTiempo.innerHTML = "Tiempo restante: " + min + ":" + "0" + seg;
                } else {
                    msgTiempo.innerHTML = "Tiempo restante: " + min + ":" + seg;
                }
            }
        }, 1000);
}

canvas.addEventListener('click', function (e) {
    var elemLeft = canvas.offsetLeft,
        elemTop = canvas.offsetTop;
    var recorrer = [];
    var x = e.pageX - elemLeft,
        y = e.pageY - elemTop;
    var coordenadas = {
        "x": x,
        "y": y
    };
    var offsetx, offsety;
    if (intPiezas == 9) {
        offsetx = 175;
        offsety = 200;
        recorrer = posarray9;

    } else {
        offsetx = 131.25;
        offsety = 150;
        recorrer = posarray16;
    }
    var col = Math.floor(coordenadas.x / offsetx);
    var row = Math.floor(coordenadas.y / offsety);
    var pos = 0;
    for (var x = 0; x < recorrer.length; x++) {
        if (recorrer[x] == col + "," + row) {
            pos = x;
        }
    }

    var latIzq = matriz[row][col - 1] === undefined ? 'e' : matriz[row][col - 1];
    var latDer = matriz[row][col + 1] === undefined ? 'e' : matriz[row][col + 1];
    var top = row - 1 == -1 ? 'e' : matriz[row - 1][col];
    var bott = row + 1 == 4 ? 'e' : matriz[row + 1][col];
 
    var existeX = -1;
    var existeY = -1;

    if (latIzq == " ") {
        existeX = row;
        existeY = col -1 ;
    }
    if (latDer == " ") {
        existeX = row;
        existeY = col +1 ;
    }
    if (top == " ") {
        existeX = row -1;
        existeY = col  ;
    }
    if (bott == " ") {
        existeX = row +1;
        existeY = col ;
    }
    if(existeX!=-1){
        var emptyspace;
        for (var x = 0; x < recorrer.length; x++) {
            if (recorrer[x] == existeY + "," + existeX) {
                emptyspace = x;
            }
        }
        temp[emptyspace]=temp[pos];
        temp[pos]=" ";
       validar();
        updateMatrix();
        updateCanvas();
       
    }
    
   

return coordenadas
}, false);
function validar(){
    if(temp==real){
        alert('ganaste');
    }
}
habilitar();
rompecabezas();
updateCanvas();