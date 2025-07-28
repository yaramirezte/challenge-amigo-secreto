
let nombresDeAmigos=[];


function agregarAmigo(){
    const input=document.getElementById("amigo");
    const nombre=input.value.trim();

    if(nombre == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        nombresDeAmigos.push(nombre);
        limpiarCaja()
        agregarLista(nombresDeAmigos);   
        
    }  
 
}

//Función para agregar el nuevo nombre a la lista
function agregarLista(lista){   
    const ul=document.getElementById("listaAmigos"); //capturamos
    const nuevoElemento =document.createElement("li"); //creamos el elemento 
    nuevoElemento.textContent=lista[lista.length -1];
    ul.appendChild(nuevoElemento); //lo agregamos a <ul>       

}

//funcion para limpiar caja
function limpiarCaja(){
    document.getElementById("amigo").value = "";
}


//funcion para sortear cuando demos click en el boton sortear amigo
function sortearAmigo(){
    const ul = document.getElementById("listaAmigos") //capturamos
    ul.innerHTML = "";
    //const indices=[];
    if(nombresDeAmigos.length == 0 ){
        alert("No es posible sortear, usted debe ingresar los nombres de sus amigos");

    } else{
        const indice=Math.floor(Math.random()*nombresDeAmigos.length);
        const resultado=document.createElement("li"); //creamos el elemento 
        resultado.textContent=`El amigo secreto sorteado es ${nombresDeAmigos[indice]}`;
        ul.appendChild(resultado); //lo agregamos a <ul>        
    }   
}