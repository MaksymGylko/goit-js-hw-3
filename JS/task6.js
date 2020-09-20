"use strict"

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    for (const product of allProdcuts) {
        if (product.name === productName) {
            let totalPrice = product.price * product.quantity
            console.log(totalPrice);
        }
    }
};

calculateTotalPrice(products, 'Радар');
calculateTotalPrice(products, 'Дроид');