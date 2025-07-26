
let nombresDeAmigos=[];


function agregarAmigo(){
    if(document.getElementById("amigo").value == ""){
        alert("Por favor, inserte un nombre.");

    }else{
        nombresDeAmigos.push(document.getElementById("amigo").value);

        cleanCaja()

        console.log(nombresDeAmigos); 

        agregarLista(nombresDeAmigos);    
        
    }
    
    
    //document.getElementById("listaAmigos").innerHTML = "";
    console.log(nombresDeAmigos);
    
       
}

//funcion para agregar los amigos al <ul>
function agregarLista(elementos){
    let li=0;    
    const ul=document.getElementById("listaAmigos"); //capturamos
    li=document.createElement("li"); //creamos el elemento 
    li.textContent=elementos[elementos.length -1];
    ul.appendChild(li); //lo agregamos a <ul>
    console.log(li);       

}

//funcion para limpiar caja
function cleanCaja(){
    document.querySelector("#amigo").value="";
}


//funcion para sortear cuando demos click en el boton sortear amigo
function sortearAmigo(){
    document.getElementById("listaAmigos").innerHTML = "";
    let amigoSecreto=0;
    //const indices=[];
    if(nombresDeAmigos.length == 0 ){
        alert("No es posible sortear, usted debe ingresar los nombres de sus amigos");

    } else{
       // listaRevision.forEach(function(elemento, indice){
        //indices.push(indice)}); //pasamos 
        amigoSecreto=Math.floor(Math.random()*nombresDeAmigos.length-1)+1
        const ul=document.getElementById("listaAmigos"); //capturamos
        li=document.createElement("li"); //creamos el elemento 
        li.textContent=`El amigo secreto sorteado es ${nombresDeAmigos[amigoSecreto]}`;
        ul.appendChild(li); //lo agregamos a <ul>
        console.log(li);
    }   
}