let num1 = 3;
let num2 = 5;

const imprimirConsola = document.getElementById('app');

function sumar(num1, num2) {
    let suma = num1 + num2;
 //   console.log("El resultado de " + num1 + " + " + num2 + " es: " + suma);
    //imprimirConsola.innerHTML = "El resultado de " + num1 + " + " + num2 + " es: " + suma;
    imprimirConsola.innerHTML = `Resultado de la suma de ${num1} y ${num2} es ${suma}`;
  }

sumar(5, 3);
