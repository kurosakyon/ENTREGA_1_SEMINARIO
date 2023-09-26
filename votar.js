// Selecciona todos los botones de votación

const botonesVotar = document.querySelectorAll('.votar');


//------------------------------------------------------------------------------------------------------- -->



// Recorre todos los botones y agrega un controlador de eventos a cada uno

botonesVotar.forEach((boton) => {
    boton.addEventListener('click', () => {

//------------------------------------------------------------------------------------------------------- -->


// se obtiene del elemento span los datos

        const contadorVotos = boton.parentElement.querySelector('.votos span');

//------------------------------------------------------------------------------------------------------- -->

        
// se obvinen los valores actuales de cada click es decir: votos (como texto) y convertir a número

        let votos = parseInt(contadorVotos.textContent);
        
// Incrementa el contador de votos  +1, jaja que reuerdos me traen los contadores que tanto me jodieron cuando empece la U xD

        votos++;
        
        // esta funcion actualiza el texto del contador de votos con el nuevo valor

        contadorVotos.textContent = votos.toString();
        
    });
});