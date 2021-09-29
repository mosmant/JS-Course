//ara butonuna tıklandığında çalan telefon çıksın,zil çalsın
let resim = document.querySelector(".resim"); //resim e ulaştım
let ring = document.querySelector(".ses"); //audio ya ulaştım
//ara butonuna ulaştım
document.querySelector(".on").onclick = function () {
  resim.src = "./img/img.gif"; //resim değiştirdim
  ring.play(); //sesi çalıştırdım play yaptım​
};

// baglat butonuna basinca ses kesilsin gif gelsin
document.querySelector(".off").onclick = function () {
  resim.src = "./img/telbağla.gif";
  ring.pause();
};
// konus butonuna basınca yeni gif gelsin.
document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfırlat.gif";
};

// scope icin burada bir liste olusturduk
const liste = document.querySelector(".liste");
// ekle butonuna basildiginda yeni bir li ekle
document.querySelector(".ekle").onclick = function () {
  // burada dil taglarini sorguladik.

  const satir = document.querySelector(".dil");
  // basit bir toplama concatination islemi ile ekleme yaptik
  liste.innerHTML = liste.innerHTML + `<li>${satir.value}</li>`;
  // yalnız burada bir sorun olmaya basladı yazdiklarimiz orada kaldi. ttemizlemek icin asagidaki islemi yaptik.
  satir.value = "";
};
// sil butonuna tiklandiginde li elemani silinsin.
document.querySelector(".sil").onclick = function () {
  liste.removeChild(liste.lastElementChild);
};
// burada programlama dillerine başlik atayacagiz.
const parag = document.querySelector(".forH1");
parag.innerHTML = parag.innerHTML + `<h1>${"Programlama Dilleri"}</h1>`;
// burada forh1 classina birseyler yazacagiz. innerHTML ile oa ekleme yazdik.
// istersek parag.innerHTML = `<h1>${'Programlama Dilleri'}</h1>`;

// todo ===== SETATTRIBUTE methodu =====
document.querySelector(".checkbox").setAttribute("type", "checkbox");

// Klavyeden bir tusa basldiginda buyusun kuculsun.
// onkeyup :klavyeden bir tusa basildiginda

document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  // eger checkbox in tikli ise
  if (checkbox.checked) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

// mouse resmin ustune geldiginde aslan2 resmi gelsin.
resim.onmouseover = function () {
  resim.src = "./img/aslan2.jpeg";
};

// bunun 2. yolu
/*resim.addEventListener("mouseout", function () {
  resim.src = "./img/aslan2.jpeg";
});*/

// mouse resmin ustunden cekildiginde aslan1 resmi gelsin.
resim.onmouseout = function () {
  resim.src = "./img/aslan1.jpeg";
};
// Enter ve del tuslarina bastigimizda ekle ve sil butonu yerine klavye tuslarini kullandik.
// enter = 13 delete =46 keycodelar
// onkeydown= klavyedeki tuşa basip cektigimizde (tapping) bu notlarda yok
document.querySelector(".dil").onkeydown = function (klavye) {
  if (klavye.keyCode == 13) {
    // enter keycode =13
    document.querySelector(".ekle").onclick();
    // burada oncekilerden farkli olarak onclick methodunu kullandik
  }
  if (klavye.keyCode == 46) {
    // delete nin keyCode = 46
    document.querySelector(".sil").onclick();
    // burada oncekilerden farkli olarak onclick methodunu kullandik
  }
};
/* Oguzhan yontemi calisiyor bunu da kullanbiliriz.
document.querySelector(".dil").onkeydown = function (olay) {
  if (olay.keyCode==13) { //Enter
    ekle();
  } if (olay.keyCode==46) { //Sil
    silme();
  }
}
*/
