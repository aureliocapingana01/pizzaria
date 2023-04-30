// Fucão anonimas
const c = (cl) => document.querySelector(cl)
const cs = (cl) => document.querySelectorAll(cl)

pizzaJson.map((item, index)=> {
    let pizzaItem = c('.models .pizza-item').cloneNode(true)

    // Prencher as informações em pizzaItem:
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name  
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()//parar o evento original

        c('.pizzaWindowArea').style.opacity = 0
        c('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => { // para demorar o tempo da animação, opacidade do item 
            c('.pizzaWindowArea').style.opacity = 1
        }, 300)
    })

    c('.pizza-area').append(pizzaItem)
})