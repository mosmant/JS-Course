// ===== FONKSIYONLAR (function) =====

// ! 1. yol --> FUNCTION DECLARATION:
/* Declaration yontemi ile fonksiyonun tanimlanmasi ve cagrilmasindan once veya sonra olabilir. */

// Fonksiyonun tanimlanmasi
// function yazdirAd() {
//   console.log("Osman");
// }
// // fonksiyonun cagirilmasi
// yazdirAd();

// // Ornek : klavyeden girilen sayinin tek mi cift mi oldugunu gosteren bir fonkisyon yaziniz?
// const sayiniz = prompt("sayi giriniz");
// // burada yukarida sayiniz fonk da sayimiz yazdirdik.

// console.log(tekCift(sayiniz));

// function tekCift(sayimiz) {
//   return sayimiz % 2 == 0 ? `${sayimiz} cifttir` : `${sayimiz} tektir`;
// }

// ! 2. yol --> FUNCTION EXPRESSION: (bu yontem daha yaygin)

const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? "Cift" : "Tek";
};

console.log(tekCift1(5));

//Ornek 2 verilen 3 sayidan en buyuk sayiyi bulma:

let buyukBul = function (a, b, c) {
  let enBuyuk;
  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else {
    enBuyuk = c;
  }
  return enBuyuk;
};

console.log(buyukBul(5, 8, 9));

// ! 3. yol --> FUNCTION ARROW (ok)
const ciftMi = (num) => (num % 2 == 0 ? `${num} = Cift` : `${num} = Tek`);
console.log(ciftMi(7));

// Ornek 2 : fonskiyon ile us alma
const taban = prompt("taban gir:");
const us = prompt("us giriniz:");

const usAl = (taban, us) => taban ** us;

console.log(usAl(taban, us));
