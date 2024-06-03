let numb1 = document.getElementById('num1');
let numb2 = document.getElementById('num2');
let buttonText = document.getElementById('button');
let imprimirConsola = document.getElementById('app');



buttonText.addEventListener('click', () =>{
    let cajaNumb1 = numb1.value;
    let cajaNumb2 = numb2.value;

    sumarNumeros(parseInt(cajaNumb1),parseInt(cajaNumb2));
        
            
    })

    function sumarNumeros(n1, n2){
        let suma = n1 + n2;
        imprimirConsola.innerHTML = "El resultado de la suma de " + n1 + " y " + n2 + " es igual a " + suma;
    }
    
    