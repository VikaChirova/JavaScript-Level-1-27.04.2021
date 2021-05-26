var cardContent = [];
function getButtons() {
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = act;
  }
}

function getCard() {                                                 
  var card = document.getElementById("card");
  var list = document.createElement("div");
  var Image = document.createElement("img");
  var nameThings = document.createElement("p");
  var amountThings = document.createElement("p");
  var minusThings = document.createElement("button");
  var castThings = document.createElement("p");
  var plusThings = document.createElement("button");
  var sumThings = document.createElement("p");
  var totalItem = document.createElement("p");
  var totalCard = 0;
  var outputResult = document.createElement("p");

  card.innerHTML = "";

  for (var i = 0; i < cardContent.length; i += 4) {
    if (cardContent[i + 2] == 0) {
      cardContent.splice(i, 4);
      i -= 4;
      continue;
    } else {
      list.innerHTML = "";
      Image.src = cardContent[i];
      nameThings.innerHTML = cardContent[i + 1];
      amountThings.innerHTML = " Выберете количество: ";
      minusThings.innerHTML = "-";
      minusThings.className = "minus";
      castThings.innerHTML = cardContent[i + 2];
      plusThings.innerHTML = "+";
      plusThings.className = "plus";
      sumThings.innerHTML = " Стоимость одной шт: " + cardContent[i + 3] + " руб.";
      totalItem.innerHTML =
        " Общая стоимость: " +
        cardContent[i + 2] * cardContent[i + 3] +
        " руб.";
      totalCard += cardContent[i + 2] * cardContent[i + 3];

      list.appendChild(Image);
      list.appendChild(nameThings);
      list.appendChild(amountThings);
      list.appendChild(minusThings);
      list.appendChild(castThings);
      list.appendChild(plusThings);
      list.appendChild(sumThings);
      list.appendChild(totalItem);
    
      card.innerHTML += list.outerHTML;
    }
  }
  if (card.innerHTML == "") {
    outputResult.innerHTML =
      "Ваша корзина пуста! <br> Подберите себе что-то из нашего каталога! Он представлен ниже!";
  } else {
    outputResult.innerHTML =
      "Стоимость Вашего заказа: " + totalCard + " руб.";
  }
  card.appendChild(outputResult);
  getButtons();
}
//фильтрация по стоимости
var sumThings = ['1200', '700', '890', '99', '7890', '650'];
 function filterFunc(sumThing){
  return sumThing.length > 3;
}
 var result = sumThings.filter(filterFunc);
  alert('Самые дорогие товары на странице:' + result + ' руб.');
 
function act(event) {
  switch (event.target.className) {
    case "minus":
      cardContent[
        cardContent.indexOf(
          event.target.parentElement.children[1].innerHTML
        ) + 1
      ] -= 1;
      break;
    case "plus":
      cardContent[
        cardContent.indexOf(
          event.target.parentElement.children[1].innerHTML
        ) + 1
      ] += 1;
      break;
    default:
      if (
        cardContent.indexOf(
          event.target.parentElement.children[1].innerHTML
        ) == -1
      ) {
        cardContent.push(event.target.parentElement.children[0].src);
        cardContent.push(
          event.target.parentElement.children[1].innerHTML
        );
        cardContent.push(1);
        cardContent.push(
          +event.target.parentElement.children[3].innerHTML.substr(
            0,
            event.target.parentElement.children[3].innerHTML.length - 4
          )
        );
      } else {
        cardContent[
          cardContent.indexOf(
            event.target.parentElement.children[1].innerHTML
          ) + 1
        ] += 1;
      }
  }
  getCard();
}

window.onload = getCard;