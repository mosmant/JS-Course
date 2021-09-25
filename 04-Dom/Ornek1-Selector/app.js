// ===== GETELEMENTBYID =====
// javaScript cok kolay... yazisini getirme ve style ini mudahale etme
// asagida style yazmayip paragraf.style.backgroundColor 'da yazabilirdik.
const paragraf = document.getElementById("prg").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "30px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.color = "red";
buton.style.fontSize = "18px";
buton.textContent = "Click"; // taglarin icerigindeki yaziyi degistirmek icin kullandik.

// ===== GETELEMENTBYTAGNAME =====
const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";

// burada [0] ilk resimi secmek ici kullanilir. javadaki index gibi kullaniliyor.

resim[1].style.border = "3px solid red";
resim[1].style.borderRadius = "20px";

// ===== GETELEMENTBYCLASSNAME =====
const baslik = document.getElementsByClassName("h1");
baslik[0].style.textAlign = "center";

// ===== QUERYSELECTOR =====
/* EN COK KULLANILAN YONTEM BUDUR */

document.querySelector(".arama").textContent = "DOM SELECTOR KAVRAMI😉";

document.querySelector("#govde").style.backgroundImage =
  "linear-gradient(green, blue, pink)";

// ===== EVENTS =====
// on mouse click
const h = document.querySelector(".h1");
h.onmouseover = function () {
  h.style.color = "red";
  h.style.backgroundColor = "blue";
};
h.onmouseout = function () {
  h.style.color = "pink";
  h.style.backgroundColor = "yellow";
};

// 1.resme tıkladığımızda imgler yer degistirsin.
document.querySelector(".bir").onclick = function () {
  document.querySelector(".bir").src = "./img/logo2.png";
  document.querySelector(".iki").src = "./img/js_logo.png";
};
