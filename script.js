
let modalQt = 1

// Fucão anonimas
const c = (cl) => document.querySelector(cl)
const cs = (cl) => document.querySelectorAll(cl)

// Listagem das pizzas, fazendo o map
pizzaJson.map((item, index)=> {
    let pizzaItem = c('.models .pizza-item').cloneNode(true)

    // Prencher as informações em pizzaItem:
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name  
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()// para parar o evento original

        //Prencher o modal com as informacoes
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQt = 1

        c('.pizzaBig img').src = pizzaJson[key].img
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        c('.pizzaInfo--size.selected').classList.remove('selected')
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })

        c('.pizzaInfo--qt').innerHTML = modalQt


        c('.pizzaWindowArea').style.opacity = 0
        c('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => { // para demorar o tempo da animação, opacidade do item 
            c('.pizzaWindowArea').style.opacity = 1
        }, 300)
    })

    c('.pizza-area').append(pizzaItem)
})

// Eventos do Modal
const closeModal = () => {
    c('.pizzaWindowArea').style.opacity = 0
     setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none'
     }, 1000) 
}
cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal)
})