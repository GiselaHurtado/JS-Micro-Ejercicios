
let texto = document.getElementById('text');
let buttonText = document.getElementById('button');
let imprimirConsola = document.getElementById('app');


let vocales = "aeiou";
let cont = 0;


buttonText.addEventListener ('click', () => {
    comprobarVocal()
        
    })

    function comprobarVocal(){
        const length = texto.value.length;
        if(length === 0){
           alert("El campo esta Vacío")
         } else {
           cuentaVocal()
         }
   }


   function cuentaVocal() {
    let buscaVocal = texto.value;

    for (let i = 0; i < buscaVocal.length; i++) {
        let minuscula = buscaVocal[i].toLowerCase()
        if(vocales.includes(minuscula)){
            cont++
        }
        }
        imprimirConsola.innerHTML = "Esta frase cuenta con " + cont + " vocales . "
        cont = 0;


    }