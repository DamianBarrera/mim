const lista = document.querySelector('.lista-chicas');
const nombres = document.querySelectorAll('.galeria .card');
const search = document.querySelector('.search');
 
const allNames = [];
nombres.forEach( N => {
    allNames.push(N.lastElementChild.textContent.toLowerCase())
    allNames.sort();
} )

allNames.forEach( N => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="chicas/${N}.html">${N}</a>`;
    lista.appendChild(li)
})

 

 search.addEventListener('click', ()=> {
    lista.classList.toggle('hide')
})



 