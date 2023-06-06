const cartToggle = document.getElementById('cart_toggle');
const cart = document.getElementById('cart');
let isOpen = false;


function toggleCart() {
    if (isOpen) {
        cart.classList.remove('translate-x-0');
        cart.classList.add('translate-x-full');
    } else {
        cart.classList.remove('translate-x-full');
        cart.classList.add('translate-x-0');
    }
    isOpen = !isOpen;
}
// var removeCartItemButtons = document.getElementsByClassName('remove')
// console.log(removeCartItemButtons)
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//     var button = removeCartItemButtons[i]
//     button.addEventListener('click', function (event) {
//         var buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
//         upgradeCartTotal()
//     })
// }

// function upgradeCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('product_cart')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('product')
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('price')[0]
//         var quantityElement = cartRow.getElementsByClassName('quantity')[0]
//         console.log(priceElement, quantityElement)

//     }
// }