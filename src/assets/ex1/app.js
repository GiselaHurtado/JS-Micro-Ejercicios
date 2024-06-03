 //console.log('connected');

// Renderiza un h1 en navegador
//
// dado que me encuentro en la página html
//cuando se renderiza
// entonces veo el titulo Hello JavaScript
//document.getElementById('app');

const hello = 'Hello JavaScript';
const divApp = document.querySelector('#app');

function renderTitle(title) {
//    divApp.innerHTML = `<h1>${title}</h1>`; 
divApp.innerHTML = title;
}

renderTitle(hello);
console.log(divApp); 

