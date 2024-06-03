let textoUsuario = document.getElementById('usuario');
let buttonValidar = document.getElementById('button');
let imprimirConsola = document.getElementById('app');



buttonValidar.addEventListener('click', () =>{
comprobarUsuario(); 
    
        
})

function comprobarUsuario(){
     const length = textoUsuario.value.length;
     if(length === 0){
        alert("El campo esta Vacío")
      } else {
        mostrar()
      }
}

function mostrar(){
    let imprimir = textoUsuario.value;
    imprimirConsola.innerHTML = "Hola " + imprimir;
}