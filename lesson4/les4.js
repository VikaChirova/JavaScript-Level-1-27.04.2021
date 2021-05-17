//Задание 1
var range = 999;
var number = {
  numeral: prompt("Введите число от 0 до 999"),
  hundreds: 0,
  tens: 0,
  units: 0,
};
if (number.numeral <= 9) {
  number.units = number.numeral;
} else if (number.numeral <= 999) {
  number.hundreds = Math.floor((number.numeral / 100) % 10);
  number.tens = Math.floor((number.numeral / 10) % 10);
  number.units = Math.floor(number.numeral % 10);
} else {
  number.numeral = 0;
  console.log("Число превышает 999!");
}
console.log(number);

//Задание 2 и 3 (убрала рандомный выбор чисел)
function addProductBasket(arr, product, price, amount) {
  arr.push({
      things: product,
      price: price,
      amount: amount,
      total: totalSum
  });
}

function totalSum() {
  return this.price*this.amount;
}
//массив для хранения товаров в корзине.
var basket = [
  {
      things: 'платье',
      price: 1000,
      amount: 1,
      total: totalSum
  },
  {
      things: 'носки',
      price: 890,
      amount: 3,
      total: totalSum
      
  },
  {
      things: 'рубашка',
      price: 3700,
      amount: 2,
      total: totalSum
  },
  {
    things: 'щляпа',
    price: 1560,
    amount: 1,
    total: totalSum
},
{
  things: 'плащ',
  price: 10899,
  amount: 1,
  total: totalSum
},
];

function countBasketPrice(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i].total();
  }
  return sum;
}

function BasketPrice(arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
      str += (i + 1) + '. ' + arr[i].things + ' - ' + arr[i].price + ' * ' + arr[i].amount + ' = ' + (arr[i].total()) + '\n';
  }
  return str;
}

console.log('Выбранный Вами товар:\n' + BasketPrice(basket) + '\nОбщая стоимость корзины: ' + countBasketPrice(basket) + " руб ");
