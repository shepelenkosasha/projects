function clearDrawCart(cssClass, arrCart, lsItemName){
    document.querySelector(cssClass).innerHTML = '';
    document.querySelector(cssClass).append(arrCart.render());
    localStorage.setItem(lsItemName, JSON.stringify(arrCart.items));
}
if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart); // cart - массив товаров в корзине
    console.log(shopCart);
    document.querySelector('.cart-out').innerHTML = ''; // очищаю вывод
    document.querySelector('.cart-out').append(shopCart.render()); // рисую корзину

    document.querySelector('.cart-out').addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('delete')) {
            shopCart.goodsDelete(target.dataset['articul']);
            clearDrawCart('.cart-out', shopCart, 'cart');
            return true;
        }
        else if (target.classList.contains('plus')) {
            shopCart.goodsPlus(target.dataset['articul']);
            console.log(shopCart);
            clearDrawCart('.cart-out', shopCart, 'cart');
            return true;
        }
        else if (target.classList.contains('minus')) {
            shopCart.goodsMinus(target.dataset['articul']);
            clearDrawCart('.cart-out', shopCart, 'cart');
            return true;
        }
    });
}
