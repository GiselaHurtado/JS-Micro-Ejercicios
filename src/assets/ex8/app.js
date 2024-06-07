
let texto = document.getElementById('text');
let buttonText = document.getElementById('button');
let imprimirConsola = document.getElementById('app');


let vocales = "aeiou";


buttonText.addEventListener ('click', () => {
    comprobarVocal()
        
    })

    function comprobarVocal(){
        const length = texto.value.length;
        if(length === 0){
           alert("El campo esta Vacío")
         } else {
           muestraVocal()
         }
   }


   function muestraVocal() {
    let buscaVocal = texto.value;
    let vocalesFrase = []

    for (let i = 0; i < buscaVocal.length; i++) {
        let minuscula = buscaVocal[i].toLowerCase()
        if(vocales.includes(minuscula)){
        vocalesFrase.push(buscaVocal[i]);
        }
        }
        imprimirConsola.innerHTML = "Las vocales de esta frase son " + vocalesFrase + " . "



    }