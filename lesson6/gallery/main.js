function init() {
   var images = document.getElementsByTagName("img");
   for (var i = 0; i < images.length; i++) {
     images[i].onclick = changeBigPicture;
   }
 }
 function changeBigPicture(event) {
   var appDiv = document.getElementById("slider"),
     big = document.getElementById("big_photo"),
     left = document.createElement("img"),
     right = document.createElement("img"),
     eventElement = event.target,
     imageDomElement = document.createElement("img");

   switch (eventElement.id) {
     case "left":
       big.src = "img/" + (parseInt(big.src.substr(-5, 1)) - 1) + ".jpg";
       appDiv.innerHTML = "";
       left.id = "left";
       left.src = "img/arrow.png";
       right.id = "right";
       right.src = "img/arrow.png";
       appDiv.appendChild(left);
       appDiv.appendChild(big);

       big.onerror = function () {
         alert("Больше фотографий");
         big.src = "img/" + (parseInt(big.src.substr(-5, 1)) + 1) + ".jpg";
         appDiv.innerHTML = "";
         appDiv.appendChild(left);
         appDiv.appendChild(big);
         appDiv.appendChild(right);
       };

       appDiv.appendChild(right);

       right.onload = init;
       break;

     case "right":
       big.src = "img/" + (parseInt(big.src.substr(-5, 1)) + 1) + ".jpg";
       appDiv.innerHTML = "";
       right.id = "right";
       right.src = "img/arrow.png";
       left.id = "left";
       left.src = "img/arrow.png";
       appDiv.appendChild(left);
       appDiv.appendChild(big);

       big.onerror = function () {
         alert("Больше фотографий");
         big.src = "img/" + (parseInt(big.src.substr(-5, 1)) - 1) + ".jpg";
         appDiv.innerHTML = "";
         appDiv.appendChild(left);
         appDiv.appendChild(big);
         appDiv.appendChild(right);
       };

       appDiv.appendChild(right);

       right.onload = init;
       break;

     default:
       appDiv.innerHTML = "";
       left.id = "left";
       left.src = "img/arrow.png";
       right.id = "right";
       right.src = "img/arrow.png";

       imageDomElement.src = eventElement.src;
       imageDomElement.id = "big_photo";

       appDiv.appendChild(left);
       appDiv.appendChild(imageDomElement);
       appDiv.appendChild(right);

       right.onload = init;
   }
 }
 window.onload = init;