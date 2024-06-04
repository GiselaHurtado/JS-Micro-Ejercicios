let numb1 = document.getElementById('num1');
let numb2 = document.getElementById('num2');
let numb3 = document.getElementById('num3');
let buttonText = document.getElementById('button');
let imprimirConsola = document.getElementById('app');



buttonText.addEventListener('click', () =>{
    let cajaNumb1 = numb1.value;
    let cajaNumb2 = numb2.value;
    let cajaNumb3 = numb3.value;

    mostrarMayor(parseInt(cajaNumb1),parseInt(cajaNumb2),parseInt(cajaNumb3));
        
            
    })

    function mostrarMayor(n1, n2, n3) {
        if (n1 > n2 && n1 > n3) {
            imprimirConsola.innerHTML = "El número mayor es " + n1;
        } else if (n2 > n1 && n2 > n3) {
            imprimirConsola.innerHTML = "El número mayor es " + n2;
        } else if (n3 > n1 && n3 > n2) {
            imprimirConsola.innerHTML = "El número mayor es " + n3;
        } else {
            imprimirConsola.innerHTML = "Los números son iguales";
        }
    }