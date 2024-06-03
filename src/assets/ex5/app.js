let numb1 = document.getElementById('num1');
let numb2 = document.getElementById('num2');
let buttonText = document.getElementById('button');
let imprimirConsola = document.getElementById('app');



buttonText.addEventListener('click', () =>{
    let cajaNumb1 = numb1.value;
    let cajaNumb2 = numb2.value;

    mostrarMayor(parseInt(cajaNumb1),parseInt(cajaNumb2));
        
            
    })

    function mostrarMayor(n1, n2) {
        if(n1 > n2) {
        imprimirConsola.innerHTML = "El número mayor es " + n1;
        }else if(n2 > n1){
            imprimirConsola.innerHTML = "El número mayor es " + n2;
        }else{
            imprimirConsola.innerHTML = "Los números son iguales ";
        }
        
    }