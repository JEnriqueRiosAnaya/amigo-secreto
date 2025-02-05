// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    const inputNombre = document.getElementById("amigo");
    const listaNombres = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    let amigos = [];
  
    window.agregarAmigo = function () {
      const nombre = inputNombre.value.trim();
      if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
      }
      amigos.push(nombre);
      actualizarLista();
      inputNombre.value = "";
    };
  
    window.sortearAmigo = function () {
      if (amigos.length === 0) {
        alert("Debe haber al menos un nombre en la lista para hacer el sorteo.");
        return;
      }
      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      resultado.innerHTML = `<li>El amigo secreto es: ${amigos[indiceAleatorio]}</li>`;
    };
  
    window.eliminarLista = function () {
      amigos = [];
      actualizarLista();
      resultado.innerHTML = "";
    };
  
    function actualizarLista() {
      listaNombres.innerHTML = "";
      for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaNombres.appendChild(li);
      }
    }
  });
  
