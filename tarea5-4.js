let lista = [Number(document.querySelector('#li-1').innerText),
             Number(document.querySelector('#li-2').innerText),
             Number(document.querySelector('#li-3').innerText),
             Number(document.querySelector('#li-4').innerText),
             Number(document.querySelector('#li-5').innerText),
             Number(document.querySelector('#li-6').innerText)];

let contador = 0;

for(let i = 0; i < lista.length; i++){
    contador += lista[i];    
}

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(){
    
    let frecuencia = [];
    const numeroDuplicado = [...lista].sort();
 
    for (let i = 0; i < numeroDuplicado.length; i++) {
        if (numeroDuplicado[i + 1] === numeroDuplicado[i]) {
        frecuencia.push(numeroDuplicado[i]);
        }
    }

    let promedio = contador / lista.length;
    let numeroMasPequeño = Math.min.apply(null, lista);
    let numeroMasGrande = Math.max.apply(null, lista);
    
    document.querySelector('#promedio').innerText = `El promedio es: ${promedio}`;
    document.querySelector('#numero-pequeño').innerText = `El número mas pequeño es: ${numeroMasPequeño}`;
    document.querySelector('#numero-grande').innerText = `El número mas grande es: ${numeroMasGrande}`;
    document.querySelector('#numero-frecuente').innerText = `El número mas frecuente es: ${frecuencia}`;

    return false;
}
