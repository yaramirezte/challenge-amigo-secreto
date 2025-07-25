// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresDeAmigos=[];


function agregarAmigo(){
    if(document.getElementById("amigo").value == ""){
        alert("Por favor, inserte un nombre.");

    }else{
        nombresDeAmigos.push(document.getElementById("amigo").value);
        cleanCaja()
        console.log(nombresDeAmigos);       
        
    }
    agregarLista(nombresDeAmigos);
    nombresDeAmigos.length=0;  
    //document.getElementById("listaAmigos").innerHTML = "";
    
       
}



function agregarLista(elementos){
    const ul=document.getElementById("listaAmigos");
    let li=0
    for(i=0;i<elementos.length;i++){
        li=document.createElement("li");
        li.textContent=elementos[i];
        ul.appendChild(li); 
        console.log(li);        
    }
    

}

function cleanCaja(){
    document.querySelector("#amigo").value="";
}