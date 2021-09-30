const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

const liste = document.querySelector(".liste-ul");

for (let i in maaslar) {
  liste.innerHTML = liste.innerHTML + `<li>${maaslar[i]}</li>`;
}

// 2. yontem yorumlu kalmali
// for (let i of maaslar) {
//     liste.innerHTML = liste.innerHTML + `<li>${i}</li>`;
//   }

// ekle butonuna tikladigimizda diziye ve listeye yeni veri ekle list

const giris = document.querySelector(".liste");

document.querySelector(".ekle").onclick = function () {
  // ekle butonuna tiklandiginda
  liste.innerHTML = liste.innerHTML + `<li>${giris.value}</li>`; // liste inputuna girilen degerleri isleyecegim.
  // innerHTML ile <li> tagi de ekledim.
  maaslar.push(giris.value); // burada kullandigimiz push methodu ise veriyi en sona eklememize yariyor.
  aciklamaGuncelle(maaslar);
  giris.value = ""; // burada inputa giris yaptıktan sonra kutuya yazilan degeri siliyoruz.
};
console.log(maaslar);

//Sil butonuna tiklandiginda listedeki ve dizideki son elamani sil.
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi.");
  } else {
    maaslar.pop(); // pop methodu son elemani siler.
    liste.removeChild(liste.lastElementChild);
    aciklamaGuncelle(maaslar);
  }
};

// yeni ekleyecegimiz maas valuesi ni yeni inputun altina olusturdugumuz h1 basligina
// eski listeye ilave edilerek veya silinerek gostermek istiyoruz.
const aciklamaGuncelle = function (maaslar) {
  document.querySelector(".aciklama").innerHTML = `Maaslar: ${maaslar.join(
    "-"
  )}`;
};
