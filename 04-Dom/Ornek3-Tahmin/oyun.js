// Bilgisayar 1-20 arasinda bir sayi tut.
// sadece random classinda sorun varbu sekilde tam sayi tutuyor.
let rastgeleSayi = Math.floor(Math.random() * 20 + 1);

let puanPc = 10; // burada skor arka planda calisacak ekranda duran sadece gorsel
let rekorPc = 0; // burada skor arka planda calisacak ekranda duran sadece gorsel

// her kontrol et butonuna tiklandiginda calistirdim.
document.querySelector(".kontrol").onclick = function () {
  const tahmin = document.querySelector(".tahmin").value;
  // tahmin dogru ise
  if (tahmin == rastgeleSayi) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").textContent = rastgeleSayi;
    document.querySelector(".mesaj").textContent = "Tebrikler Bildiniz 🤑 !!";

    // rekoru guncelle / egale ettim.
    if (puanPc > rekorPc) {
      rekorPc = puanPc;
      document.querySelector(".rekor-skor").textContent = puanPc;
    }
    // tahmin yanlis ise
  } else {
    if (puanPc > 1) {
      puanPc--;
      // ternary ile arttır azalt islemi
      let mesaj = document.querySelector(".mesaj");
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttır 📈")
        : (mesaj.textContent = "Azalt 📉");
      document.querySelector(".skor").textContent = puanPc;
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz 🙄";
      document.querySelector(".skor").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
};

// Tekrar butonuna basildiginda baslangic degerleri yuklensin.
document.querySelector(".tekrar").onclick = () => {
  rastgeleSayi = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector(".question").textContent = "?";
  document.querySelector(".mesaj").textContent = "Tahmine Baslaniyor!!";
  puanPc = 10;
  document.querySelector(".skor").textContent = puanPc;
  document.querySelector(".tahmin").value = "";
};

// klavyeden bir tusa basldiginda calis
document.querySelector(".tahmin").onkeydown = function (event) {
  if (event.keyCode == 13) {
    document.querySelector(".kontrol").onclick();
  }
  if (event.keyCode == 82) {
    document.querySelector(".tekrar").onclick();
  }
};
