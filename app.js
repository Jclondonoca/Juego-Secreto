let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado=[];
let numeroMaximo =10;
console.log(numeroSecreto)

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos===1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        // El usuario no acertó 
                if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja()
    }   
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if (listaNumeroSorteado.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numero posibles')
    }
    else{
        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado
    }
}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Dame un nimero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();

