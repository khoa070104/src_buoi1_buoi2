var button = document.querySelector('.form-style button')

var items = 
{
    "kemdua" : "Coconut cream",
    "kemdau" : "Strawberry ice-cream",
    "kemdu" : "Durian ice-cream"
}

button.addEventListener('click', e => {
    e.preventDefault();
    let item = document.querySelectorAll('input[name="item"]:checked')
    let htmls = "";
    item.forEach(item => {
        htmls += `
        <div class="order-item">
            <div class="product-name">
                ${items[item.id]}
            </div>
        </div>
        `
    })
    let itemsBlock = document.querySelector('.itemss')
    let price = CalTotal(item)
    htmls += 
    `
    <div class="total">
        Total amount: ${price} $
    </div> 
    `
    itemsBlock.innerHTML = htmls;
})

function CalTotal(item)
{
    let total = 0;
    item.forEach(item => {
        total += parseInt(item.value);
    })
    return total
}