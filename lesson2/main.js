//ЗАДАНИЕ №1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 потому что переменная а=1 увеличивается на 1
d = b++; alert(d);           // 1 потому что мы прибавляем 1, но выводим заданное значение  = 1
c = (2+ ++a); alert(c);      // 5 потому что мы уже прибавили единицу к пер.а = 2. Мы добаляем еще единицу и а становится равно 3, ледовательно с = 5
d = (2+ b++); alert(d);      // 4 потому что мы прибавили единицу и b=2.Тут мы прибавляем еще 1 и а теперь =3,но, выводим предыдущее = 2, поэтому d=4 
alert(a);                    // 3 потому что перменная a = 1, но мы прибаили единицу в примере 1 и в примере 3
alert(b);                    // 3 потому что перменная b = 1, но мы прибаили единицу в примере 2 и в примере 4

//ЗАДАНИЕ №2
var a = 2;
var x = 1 + (a *= 2);  //мы просто умножаем (a = a * 2 )+ 1 и получаем 5

//ЗАДАНИЕ №3
var a = parseInt(prompt('Введите число a'));  
var b = parseInt(prompt('Введите число b'));

if (a >= 0 && b >= 0){
c = a - b;
alert(c);
}
if (a < 0 && b < 0){
c = a * b; 
alert(c);
}
if (a < 0 && b >= 0 || a >= 0 && b < 0){
c = a  + b;
alert(c);
}

//ЗАДАНИЕ №4

      var a = parseInt(prompt("Введите число от [0..15]"));
      switch (a) {
        case 0:
          alert("Вы ввели 0!");
          break;
        case 1:
          alert("Вы ввели 1!");
          break;
        case 2:
          alert("Вы ввели 2!");
          break;
        case 3:
          alert("Вы ввели 3!");
          break;
        case 4:
          alert("Вы ввели 4!");
          break;
        case 5:
          alert("Вы ввели 5!");
          break;
        case 6:
          alert("Вы ввели 6!");
          break;
        case 7:
          alert("Вы ввели 7!");
          break;
        case 8:
          alert("Вы ввели 8!");
          break;
        case 9:
          alert("Вы ввели 9!");
          break;
        case 10:
          alert("Вы ввели 10!");
          break;
        case 11:
          alert("Вы ввели 11!");
          break;
        case 12:
          alert("Вы ввели 12!");
          break;
        case 13:
          alert("Вы ввели 13!");
          break;
        case 14:
          alert("Вы ввели 14!");
          break;
        case 15:
          alert("Вы ввели 15!");
          break;
        default:
          alert("Вы вышли за рамки [0..15]!");
          break;
      }

//ЗАДАНИЕ №5
var a = parseInt(prompt('Введите число a'));  
var b = parseInt(prompt('Введите число b'));

   function plus(a, b) {
      return a + b;
      }

   function minus(a, b) {
      return a - b;
      }

   function divide(a, b) { 
      return a / b;
      }

   function multiply(a, b) {
      return a * b;
      }
  c = multiply(a, b);
  alert(c);

//ЗАДАНИЕ №6
function mathOperation(arg1, arg2, operation){
switch(operation){
   case '+':
   return arg1 + arg2;
   case '-':
   return arg1 - arg2;
   case '*':
   return arg1 * arg2;
   case '/':
   return arg1 / arg2;
}
}
c =  mathOperation(7, 4, '-' );
alert(c);

//ЗАДАИЕ №7 
alert (null > 0); //false  
alert(null == 0); //false - значения undefined и null ни к еему не приодятся, они равны меду собой и не равны ничему другому. поэтоу выражениие ложно
alert(null >= 0); //true -  сравнение преобразует null в число 0, поэтому выражение истинно, а null > 0 - ложно. 

   


