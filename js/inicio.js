var msgPiezas = document.getElementById("mensajepiezas");

var msgTiempo = document.getElementById("mensajetiempo");

var imagen;
var piezas;
var minutos;
var segundos;
var tiempo;
var canvas = document.getElementById("imagenBase");
var ctx = canvas.getContext("2d");

function habilitar(){
    var urlTemp = location.search;
    var url = urlTemp.substring(1,urlTemp.length);
    var parametros = url.split("&");  

    for(i=0; i<parametros.length; i++){
        var temp = parametros[i].length;

        if(i==0){
            imagen = parametros[i].substring(7,temp);
        }

        if(i==1){
            msgPiezas.innerHTML = "Cantidad de piezas: " + parametros[i].substring(7,temp);
            piezas=parametros[i].substring(7,temp);
        }

        if(i==2){
            minutos = parametros[i].substring(8,temp);
        }

        if(i==3){
            segundos = parametros[i].substring(9,temp)
        }         
    }
        
        msgTiempo.innerHTML = "Tiempo restante: " + minutos + ":" + segundos;

    if(minutos==undefined){
        msgTiempo.innerHTML = "Tiempo restante: ";
    }


    rompecabezas();
  
}

function rompecabezas(){
    
    var real = [];
    var actual = [];
    var temp = []
    var a=0;
    var b=0;
    var c=0;
    var d=0;

    if(piezas=="9"){

        for(var x=0; x<=525; x=x+175){
            ctx.moveTo(x,0);
            ctx.lineTo(x,600);

            for(var y=0; y<=600; y=y+200){
                ctx.moveTo(0,y);
                ctx.lineTo(525,y);
            }
        }

        ctx.strokeStyle = "000000";
        ctx.stroke();

        if(imagen=="chikorita"){
            for(var a=0; a<=8; a++){
                real[a] = "./imagenes/chikorita9pz/" + a.toString() + ".png";
                temp[a] = real[a];

                if(a==8){
                     real[8] = " ";
                     temp[8] = real[8];
                }
            }
            
           while(c==0){
                var random = Math.floor(Math.random()*real.length);

                if(temp[random]!=="0"){
                    actual[b] = temp[random];
                    temp[random] = "0";
                    b++;
                }

                if(actual[8]!==undefined){
                    break;
                }
           }

            for(var pos_y=2; pos_y<=402; pos_y=pos_y+200){
                for(var pos_x=2; pos_x<=352; pos_x=pos_x+175){
                    
                    var img = new Image();
                    img.src = actual[d];
                    ctx.drawImage(img,pos_x,pos_y,171,196); 
                    d++;
                }
            }    
        }

        if(imagen=="totodile"){
            for(var a=0; a<=8; a++){
                real[a] = "./imagenes/totodile9pz/" + a.toString() + ".png";
                temp[a] = real[a];
    
                if(a==8){
                    real[8] = " ";
                    temp[8] = real[8];
                }
            }
                
            while(c==0){
                var random = Math.floor(Math.random()*real.length);
    
                if(temp[random]!=="0"){
                    actual[b] = temp[random];
                    temp[random] = "0";
                    b++;
                }
    
                if(actual[8]!==undefined){
                    break;
                }
            }
    
            for(var pos_y=2; pos_y<=402; pos_y=pos_y+200){
                for(var pos_x=2; pos_x<=352; pos_x=pos_x+175){
                        
                    var img = new Image();
                    img.src = actual[d];
                    ctx.drawImage(img,pos_x,pos_y,171,196); 
                    d++;
                }
            }    
        }

        if(imagen=="cyndaquil"){
            for(var a=0; a<=8; a++){
                real[a] = "./imagenes/cyndaquil9pz/" + a.toString() + ".png";
                temp[a] = real[a];

                if(a==8){
                     real[8] = " ";
                     temp[8] = real[8];
                }
            }
            
           while(c==0){
                var random = Math.floor(Math.random()*real.length);

                if(temp[random]!=="0"){
                    actual[b] = temp[random];
                    temp[random] = "0";
                    b++;
                }

                if(actual[8]!==undefined){
                    break;
                }
           }

            for(var pos_y=2; pos_y<=402; pos_y=pos_y+200){
                for(var pos_x=2; pos_x<=352; pos_x=pos_x+175){
                    
                    var img = new Image();
                    img.src = actual[d];
                    ctx.drawImage(img,pos_x,pos_y,171,196); 
                    d++;
                }
            }
        }    
    }

    if(piezas=="16"){

        for(var x=0; x<=525; x=x+131.25){
            ctx.moveTo(x,0);
            ctx.lineTo(x,600);

            for(var y=0; y<=600; y=y+150){
                ctx.moveTo(0,y);
                ctx.lineTo(525,y);
            }
        }

        ctx.strokeStyle = "000000";
        ctx.stroke();

        if(imagen=="chikorita"){
            for(var a=0; a<=15; a++){
                real[a] = "./imagenes/chikorita16pz/" + a.toString() + ".png";
                temp[a] = real[a];

                if(a==15){
                     real[15] = " ";
                     temp[15] = real[15];
                }
            }
            
           while(c==0){
                var random = Math.floor(Math.random()*real.length);

                if(temp[random]!=="0"){
                    actual[b] = temp[random];
                    temp[random] = "0";
                    b++;
                }

                if(actual[15]!==undefined){
                    break;
                }
           }

            for(var pos_y=2; pos_y<=452; pos_y=pos_y+150){
                for(var pos_x=2; pos_x<=395.75; pos_x=pos_x+131.25){
                    
                    var img = new Image();
                    img.src = actual[d];
                    ctx.drawImage(img,pos_x,pos_y,127.25,146); 
                    d++;
                }
            }    
        } 

        if(imagen=="totodile"){
            for(var a=0; a<=15; a++){
                real[a] = "./imagenes/totodile16pz/" + a.toString() + ".png";
                temp[a] = real[a];

                if(a==15){
                     real[15] = " ";
                     temp[15] = real[15];
                }
            }
            
           while(c==0){
                var random = Math.floor(Math.random()*real.length);

                if(temp[random]!=="0"){
                    actual[b] = temp[random];
                    temp[random] = "0";
                    b++;
                }

                if(actual[15]!==undefined){
                    break;
                }
           }

            for(var pos_y=2; pos_y<=452; pos_y=pos_y+150){
                for(var pos_x=2; pos_x<=395.75; pos_x=pos_x+131.25){
                    
                    var img = new Image();
                    img.src = actual[d];
                    ctx.drawImage(img,pos_x,pos_y,127.25,146); 
                    d++;
                }
            }    
        } 

        if(imagen=="cyndaquil"){
            for(var a=0; a<=15; a++){
                real[a] = "./imagenes/cyndaquil16pz/" + a.toString() + ".png";
                temp[a] = real[a];

                if(a==15){
                     real[15] = " ";
                     temp[15] = real[15];
                }
            }
            
           while(c==0){
                var random = Math.floor(Math.random()*real.length);

                if(temp[random]!=="0"){
                    actual[b] = temp[random];
                    temp[random] = "0";
                    b++;
                }

                if(actual[15]!==undefined){
                    break;
                }
           }

            for(var pos_y=2; pos_y<=452; pos_y=pos_y+150){
                for(var pos_x=2; pos_x<=395.75; pos_x=pos_x+131.25){
                    
                    var img = new Image();
                    img.src = actual[d];
                    ctx.drawImage(img,pos_x,pos_y,127.25,146); 
                    d++;
                }
            }    
        } 
    }   
}

function play(){
    if(piezas=="9"){
        rects = []
    }
}


function reiniciar(){
    clearInterval(tiempo);
    msgTiempo.innerHTML = "Tiempo restante: " + minutos + ":" + segundos;
}

function cronometro(){
    var min = parseInt(minutos);
    var seg = parseInt(segundos);
  
        tiempo = setInterval(
        function(){
            
            if(min==0 && seg==0){
                msgTiempo.innerHTML = "Tiempo restante: " + min + ":" + "0" + seg; 
                clearInterval(cronometro);
                alert("El tiempo se ha agotado");
            }
                        
            if(seg==0 && min!==0){
                seg=60;
                min--;
                msgTiempo.innerHTML = "Tiempo restante: " + min + ":" + seg;
            }

            if(seg!==0){
                seg--;

                if(seg==9 || seg==8 || seg==7 || seg==6 || seg==5 || seg == 4 || seg==3 || seg==2 || seg==1 || seg==0){
                    msgTiempo.innerHTML = "Tiempo restante: " + min + ":" + "0" + seg;
                }

                else{
                    msgTiempo.innerHTML = "Tiempo restante: " + min + ":" + seg;
                }
            }                   
        }, 1000);
}      
