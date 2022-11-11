let iniciar = document.querySelector("#botonInicio");

//funciones para generar los números de los dados
const tirarDado1=() => {
    let dado1 = () => {
        return Math.ceil(Math.random() * 6);
    }
    document.querySelector("#imgDado1").src="/media/dados/"+dado1()+".svg";  
}
 
const tirarDado2 = () => {
        let dado2 = () => {
            return Math.ceil(Math.random() * 6);
        }
        document.querySelector("#imgDado2").src="/media/dados/"+dado2()+".svg";
}

//funcion para apretar los botones de los dados
const botonesDados = () => {
    let boton1 = document.querySelector("#botonDado1");
    boton1.onclick = tirarDado1;

    
     let boton2 = document.querySelector("#botonDado2");
     boton2.onclick = tirarDado2;
}


let cuadroJugador1 = document.querySelector("#p1");
let cuadroJugador2 = document.querySelector("#p2");
let cuadroJugador3 = document.querySelector("#p3");
let cuadroJugador4 = document.querySelector("#p4");

let dosJugadores = document.querySelector("#botonDosJugadores");

//acciones para hacer aparecer 2 jugadores
const accionDosJugadores = () => {
    cuadroJugador1.style.background= "blue";
    cuadroJugador1.style.borderColor= "purple";
    cuadroJugador2.style.background= "red";
    cuadroJugador2.style.borderColor= "purple";
    botonesDados();
}

let tresJugadores = document.querySelector("#botonTresJugadores");
//acciones para hacer aparecer 3 jugadores
const accionTresJugadores = () =>{
    cuadroJugador3.style.background= "orange";
    cuadroJugador3.style.borderColor= "purple";
    accionDosJugadores()
    botonesDados();
}

let cuatroJugadores = document.querySelector("#botonCuatroJugadores");
 //acciones para hacer aparecer 4 jugadores
const accionCuatroJugadores = () => {
     cuadroJugador4.style.background= "pink";
     cuadroJugador4.style.borderColor= "purple";
     accionTresJugadores();
     botonesDados();
}

//movimiento de los jugadores
const teclasMovimiento = {
    izquierda: 65,
    derecha: 68,
    arriba: 87,
    abajo: 83
}


const parametrosJugador1 = {
    constMov: 150,
    top: 720,
    left: 800,
}
const parametrosJugador2 = {
    constMov: 150,
    top: 750,
    left: 800
}
const parametrosJugador3 = {
    constMov: 150,
    top: 780,
    left: 800 
}
const parametrosJugador4 = {
    constMov: 150,
    top: 810,
    left: 800 
}

 const desplazamiento1 = (e) =>{
    switch(e.keyCode){
        case teclasMovimiento.izquierda:
            parametrosJugador1.left -= parametrosJugador1.constMov
            cuadroJugador1.style.left = parametrosJugador1.left + "px";
            break;
        case teclasMovimiento.derecha:
            parametrosJugador1.left += parametrosJugador1.constMov
            cuadroJugador1.style.left = parametrosJugador1.left + "px";
            break;
        case teclasMovimiento.arriba:
            parametrosJugador1.top -= parametrosJugador1.constMov
            cuadroJugador1.style.top = parametrosJugador1.top + "px";
            break;
        case teclasMovimiento.abajo:
            parametrosJugador1.top += parametrosJugador1.constMov
            cuadroJugador1.style.top = parametrosJugador1.top + "px";
            break;
        
        default:
            break;
    } 

}

const desplazamiento2 = (e) =>{
    switch(e.keyCode){
        case teclasMovimiento.izquierda:
            parametrosJugador2.left -= parametrosJugador2.constMov
            cuadroJugador2.style.left = parametrosJugador2.left + "px";
            break;
        case teclasMovimiento.derecha:
            parametrosJugador2.left += parametrosJugador2.constMov
            cuadroJugador2.style.left = parametrosJugador2.left + "px";
            break;
        case teclasMovimiento.arriba:
            parametrosJugador2.top -= parametrosJugador2.constMov
            cuadroJugador2.style.top = parametrosJugador2.top + "px";
            break;
        case teclasMovimiento.abajo:
            parametrosJugador2.top += parametrosJugador2.constMov
            cuadroJugador2.style.top = parametrosJugador2.top + "px";
            break;
        
        default:
            break;
    } 

}

const desplazamiento3 = (e) =>{
    switch(e.keyCode){
        case teclasMovimiento.izquierda:
            parametrosJugador3.left -= parametrosJugador3.constMov
            cuadroJugador3.style.left = parametrosJugador3.left + "px";
            break;
        case teclasMovimiento.derecha:
            parametrosJugador3.left += parametrosJugador3.constMov
            cuadroJugador3.style.left = parametrosJugador3.left + "px";
            break;
        case teclasMovimiento.arriba:
            parametrosJugador3.top -= parametrosJugador3.constMov
            cuadroJugador3.style.top = parametrosJugador3.top + "px";
            break;
        case teclasMovimiento.abajo:
            parametrosJugador3.top += parametrosJugador3.constMov
            cuadroJugador3.style.top = parametrosJugador3.top + "px";
            break;
        
        default:
            break;
    } 

}

const desplazamiento4 = (e) =>{
    switch(e.keyCode){
        case teclasMovimiento.izquierda:
            parametrosJugador4.left -= parametrosJugador4.constMov
            cuadroJugador4.style.left = parametrosJugador4.left + "px";
            break;
        case teclasMovimiento.derecha:
            parametrosJugador4.left += parametrosJugador4.constMov
            cuadroJugador4.style.left = parametrosJugador4.left + "px";
            break;
        case teclasMovimiento.arriba:
            parametrosJugador4.top -= parametrosJugador4.constMov
            cuadroJugador4.style.top = parametrosJugador4.top + "px";
            break;
        case teclasMovimiento.abajo:
            parametrosJugador4.top += parametrosJugador4.constMov
            cuadroJugador4.style.top = parametrosJugador4.top + "px";
            break;
        
        default:
            break;
    } 

}


const turnoJugador1 = document.querySelector("#turno1");
const turnoJugador2 = document.querySelector("#turno2");
const turnoJugador3 = document.querySelector("#turno3");
const turnoJugador4 = document.querySelector("#turno4");

const activarTurno1 = ()=>{
    window.onkeydown = desplazamiento1;
    Swal.fire({
        title: 'Comienza tu turno jugador 1',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

const activarTurno2 = ()=>{
    window.onkeydown = desplazamiento2;
    Swal.fire({
        title: 'Comienza tu turno jugador 2',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

const activarTurno3 = ()=>{
    window.onkeydown = desplazamiento3;
    Swal.fire({
        title: 'Comienza tu turno jugador 3',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

const activarTurno4 = ()=>{
    window.onkeydown = desplazamiento4;
    Swal.fire({
        title: 'Comienza tu turno jugador 4',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}



//botón para iniciar el juego
const iniciarJuego = () => {
     iniciar.innerText = "Selecciona el número de jugadores";
     iniciar.style.height = "120px";
     dosJugadores.onclick = accionDosJugadores;
     tresJugadores.onclick = accionTresJugadores; 
     cuatroJugadores.onclick = accionCuatroJugadores;
     turnoJugador1.onclick = activarTurno1;
     turnoJugador2.onclick = activarTurno2;
     turnoJugador3.onclick = activarTurno3;
     turnoJugador4.onclick = activarTurno4;
}

iniciar.onclick = iniciarJuego;




//Guardar datos de los jugadores
let botonCasilla = document.querySelector("#botonGuardar");

class Jugador{
    constructor(jugador, casilla, puntos) {
        this.jugador = jugador; 
        this.casilla = casilla 
        this.puntos= puntos;
    }
}
const listaJugadores = JSON.parse(localStorage.getItem("jugadores")) || [];

const jugadorNuevo = () =>{
    let jugador = document.querySelector("#jugador").value;
    let casilla = document.querySelector("#casilla").value;
    let puntos = document.querySelector("#puntos").value;
    
    let nuevoJugador = new Jugador(jugador, casilla, puntos);
    listaJugadores.push(nuevoJugador);
    localStorage.setItem("jugadores", JSON.stringify(listaJugadores));
    
    let listaJugadores2 = JSON.parse(localStorage.getItem("jugadores"))

    listaJugadores2.forEach( jug => {
        let puntajesTotales = document.querySelector("#puntajeTotal")

        puntajesTotales.innerText = `El Jugador ${jug.jugador} está en la casilla ${jug.casilla} y su puntaje es ${jug.puntos}`
    }
    )
}

botonCasilla.onclick = jugadorNuevo;

const botonDatos = document.querySelector("#btnDatos");
const baseDatos = document.querySelector("#datosAnteriores");

const obtenerDatos = ()=> {
        fetch("./juegosPasado.json")
            .then(response => response.json())
            .then(resultado => {
                const datos = resultado;
                datos.forEach(dato =>{
                    baseDatos.innerHTML = `El jugador ${dato.jugador} avanzo ${dato.casilla} casillas y su puntaje fue ${dato.puntos} `
                })
            })
}

botonDatos.onclick = ()=> {
    obtenerDatos();
}
   