function mostrarDivisores() {
    let number = document.getElementById('number').value;
    let divisores = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisores.push(i);
        }
    }

document.getElementById('app').innerHTML = "Los divisores de " + number + " son:  " + divisores.join(', ') + ".";
}
