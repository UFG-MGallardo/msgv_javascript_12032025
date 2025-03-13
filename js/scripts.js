let mensaje = document.getElementById("mensanjito")
console.log(mensaje);
            
alert(mensaje.innerText)

let variable; //declaracion

variable = 1.666; //asignacion

console.log("Tipo de dato: " + typeof variable); //Tipo de dato
console.log("valor" + variable) //valor 

variable = false; //re-asignando 

console.log("Tipo de dato: " + typeof variable); //Tipo de dato
console.log("valor" + variable) //valor 

variable = "hola mundo"; //re-asignando 

console.log("Tipo de dato: " + typeof variable); //Tipo de dato
console.log("valor" +  variable) //valor 

function calcular(sumando1, sumando2, salida){
    let sumando1_obj = document.getElementById(sumando1);
    let sumando2_obj = document.getElementById(sumando2);

    let calculo = parseFloat(sumando1_obj.innerText) + parseFloat(sumando2_obj.innerText);

    document.getElementById(salida).innerHTML = calculo;
}

function crearElemento(url = null){
    if(url !== null){
        url = url
    }else{
        url = "https://as2.ftcdn.net/jpg/01/09/00/83/220_F_109008395_OQupHMza1V6CNOzrJwWAKlaktT4IsRW.jpg"
    }

    let objetoImagen = document.createElement("img");
    objetoImagen.id = "imagencreada";
    objetoImagen.src = url;
    objetoImagen.alt = "Icono_control_videojuego";
    objetoImagen.title = "Control Videojuegos";
    objetoImagen.width = 220;
    objetoImagen.height = 165;
    objetoImagen.addEventListener('click', function(){
        objetoImagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkU5595AC-bbsoPF-Ik0WzUbVj9rnAbs91kw&s"
        objetoImagen.width = 225;
        objetoImagen.height = 225;
    });
    document.getElementById('lienzo').appendChild(objetoImagen);
}