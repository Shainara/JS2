'use strict';

const products = [
    { id: 1, title: 'Бургер', price: 150 },
    { id: 2, title: 'Чизбургер', price: 80 },
    { id: 3, title: 'Чикенбургер', price: 100 },
    { id: 4, title: 'Гамбургер', price: 200 },
    { id: 5, title: 'Фишбургер', price: 150 },
    { id: 6, title: 'Биг Бургер', price: 200 },
    { id: 7, title: 'Биг Чизбургер', price: 100 },
    { id: 8, title: 'Биг Чикенбургер', price: 150 },
    { id: 9, title: 'Биг Гамбургер', price: 250 },
    { id: 10, title: 'Биг Фишбургер', price: 200 },
];

const renderProduct = (item, img ='https://placehold.it/200x150') =>
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);