//ЗАДАНИЕ 1 
/*var number = 1;
while (number <= 100) {
    var test = true;
    for (var i = 2; i < number; i++){
        if (number%i === 0) { //number=number % 0
            test = false;
            break;
        }
    }
    if (test) console.log(number);
    number++;
}
*/
//ЗАДАНИЕ 2 И 3
function getNumber(min, max){
    var number = parseInt(Math.random()*(max - min) + min);
    if (number === 0);
    return number;
}
// а) Организовать такой массив для хранения товаров в корзине.
var basket = [
    {
        things: "платье",
        price: getNumber(50, 1000)
    },
    {
        things: "шляпа",
        price: getNumber(50, 1000)
    },
    {
        things: "рубашка",
        price: getNumber(50, 1000)
    },
    {
        things: "носки",
        price: getNumber(50, 100)
    }
];
var basketPrice = 0;
for (var product of basket){
    basketPrice += product.price;
    console.log("Ваш товар " + product.things + " его стоимость: " + product.price + " руб ");
}
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(basket) {
    var totalPrice = 0;
    for (var product of basket){
        totalPrice += product.price;
    }
    return totalPrice;
}
console.log("Стоимость корзины: " + countBasketPrice(basket) + " руб ");
/*
//ЗАДАНИЕ 4
for (var i = 0; i < 10; console.log(i++)) {}//здесь пусто

//ЗАДАНИЕ 5
var x = 'x';
for (var i = 0; i < 20; i++){
   console.log(x);
   x += 'x';
}*/
