//challenge del amigo secreto, por Lupita Juárez

//Crear un array para guardar los nombres de los amigos
let lista = [];


//Crear la funcion para agregar los amigos y las posibles acciones del usuario
function agregarAmigo() {
    let nombre = document.getElementById("amigo");
    let amigo = nombre.value.trim();

    if (amigo.length) {

        if(!lista.includes(amigo)) {
            const li = document.createElement("li");
            const nombrea = document.createTextNode(amigo);
            li.appendChild(nombrea);
    
            document.getElementById("listaAmigos").appendChild(li);
            
            lista.push(amigo);
    
            nombre.value = '';
        } else {
            alert("Nombre repetido")
        }
    } else {
        alert("No has ingresado el nombre")
    }
}


//funcion para sortear el amigo secreto del array
function sortearAmigo() {
    let random = Math.floor(Math.random() * lista.length); 
    let amigoSecreto = lista[random];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '';

    const li = document.createElement("li");

    const amigoSecretoTexto = document.createTextNode("El amigo secreto es: " + amigoSecreto);
    li.appendChild(amigoSecretoTexto);

    resultado.appendChild(li);

    console.log("amigo secreto " + amigoSecreto);
}

function resetear() {
    document.getElementById("amigo").innerHTML = '';
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
}




