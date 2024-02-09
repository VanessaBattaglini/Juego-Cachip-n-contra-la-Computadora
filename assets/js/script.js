//Crear una función con parametros y argumentos del juego
let jugadas = parseInt(prompt("¿Cuántas veces deseas jugar Cachipún?"));

//Validación del número de jugadas
    while (jugadas <= 0) {
        jugadas = parseInt(prompt("Por favor, ingresa un número válido mayor que cero:"));
    };

    
cachipun(jugadas);

function cachipun(jugadas) {
    
         //Pregunta

console.log(jugadas)
// Opciones del juego Cachipún
    let opciones = ["piedra", "papel", "tijera"];
    
//Llevaremos un marcador para mostrar el resultado final y mostrar el ganador
    let contador = {
    user: 0,
    computer: 0,
    empate: 0,
    };

//Número de jugadas elegidas por el usuario y elecciones de los participantes
    for (let i = 0; i < jugadas; i++) {
        //Primera pregunta al usuario y jugadas del usuario y computadora
        let usuario;
        let inputValido = false;
        let computadora = opciones[Math.floor(Math.random() * opciones.length)].toLowerCase();
        let resultado;

        // Validar elección del usuario
        while (!inputValido) {
            usuario = prompt(`Partida ${i + 1} de ${jugadas}: Elije (piedra, papel o tijera):`).toLowerCase();
            if (opciones.includes(usuario)) {
                inputValido = true;
                console.log(usuario);
                if (usuario === computadora) {
                    contador.empate++;
                    resultado = 'Empate'
                    console.log(contador.empate);
                } else if (
                    (usuario === 'piedra' && computadora === 'tijera') ||
                    (usuario === 'papel' && computadora === 'piedra') ||
                    (usuario === 'tijera' && computadora === 'papel')
                ) {
                    contador.user++;
                    resultado = '¡Felicitaciones ganó el Usuario'
                    console.log(contador.user);
                } else {
                    contador.computer++;
                    resultado = 'Lo siento, gano la Computador'
                    console.log(contador.computer);
                }
            } else {
                alert("La opción no es válida, debes escoger entre (Piedra, Papel o Tijera):");
            }
        }

    document.write(`Juego ${i + 1}:` +'<br>');
    document.write(`Tu elección fue: ${usuario}` +'<br>');
    document.write(`Jugada de la computadora: ${computadora}` +'<br>');
    document.write(`El resultado es: ${resultado}` + '<br>');
    document.write('*********************************' + '<br>');
    
    };
    
    //Mostrar los resultados de juego
    document.write("Marcador final:" + '<br>') ;
    document.write(`Usuario: ${contador.user}` + '<br>')  ;
    document.write(`Computadora: ${contador.computer}` + '<br>');
    document.write(`Empates: ${contador.empate}`);

}