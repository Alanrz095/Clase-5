let horasTotal = 0;
let minutosTotal = 0;
let segundosTotal = 0;

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(){
    
    let horas = Number(document.querySelector('#horas').value);
    let minutos = Number(document.querySelector('#minutos').value);
    let segundos = Number(document.querySelector('#segundos').value);

    horasTotal += horas;
    minutosTotal += minutos;
    segundosTotal += segundos;        
    
    document.querySelector('#datos').innerText = 
    `Hora total: ${horasTotal} horas
     Minuto total: ${minutosTotal} minutos
     Segundo total: ${segundosTotal} segundos`;

     return false;
}
