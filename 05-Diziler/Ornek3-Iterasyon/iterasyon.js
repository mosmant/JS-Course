// todo •-•-•-• DIZILERDE ITERASYON •-•-•-•

//! •-•-• FOR DONGUSU •-•-•

// const koordinatlar = [120, 100, -100, 220, 330, -50];
// let pozitif = 0;
// let negatif = 0;
// for (let i = 0; i < koordinatlar.length; i++) {
//   koordinatlar[i] < 0
//-     ? (negatif = negatif + koordinatlar[i])
//     : (pozitif = pozitif + koordinatlar[i]);
// }

// console.log(`negatifler toplami = ${negatif}\npozitifler toplami = ${pozitif}`);

//? •-•-• FOR IN DONGUSU •-•-•

const koordinatlar = [120, 100, -100, 220, 330, -50];
let pozitif = 0;
let negatif = 0;
for (let i in koordinatlar) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}

console.log(`negatifler toplami = ${negatif}\npozitifler toplami = ${pozitif}`);

// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.

const hayvanlar = [
  "aslan",
  "fil",
  "kartal",
  "kanarya",
  "aslan",
  "aslan",
  "timsah",
];

// const ara = prompt("sayisini merak ettigin hayvanin adini yaz:");

// const bulDondur = function (ara) {
//   let hayvanSayisi = 0;
//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) {
//       hayvanSayisi++;
//     }
//     hayvanSayisi == 0
//-       ? alert("aradiginiz hayvana ulasilamadi.")
//       : alert(
//           `aradiginiz ${ara} hayvanindan ${hayvanSayisi} tane bulunmaktadir.`
//         );
//   }
// };

// bulDondur(ara);

//! •-•-• FOR OF DONGUSU •-•-•

// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir.
// Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

let arabalar = ["BMW", "Volvo", "Mini"];

for (let i of arabalar) {
  console.log(i);
}

//! •-•-• FOREACH METHODU •-•-•
// foreach methodu orjinal diziyi bozmaz

let ogrenciler = ["Onur", "Hakan", "Furkan"];

ogrenciler.forEach((x) => console.log(x)); // bu steam api ye benziyor.
console.log(ogrenciler);

ogrenciler.forEach((deger, index) =>
  console.log(index + ". kisi " + deger + "'dir")
);

console.log(ogrenciler); //["Onur", "Hakan", "Furkan"];​

//? •-•-• MAP METHODU •-•-•​
//! map metodu orjinal diziyi değiştirmez​

//ornek: bütün elemanların 3 katını alınız​

const rakamlar = [3, 5, 3, 2, 6, 7, 9];

// console.log( rakamlar.map((x)=> x*3));​

console.log(
  rakamlar.map((x, index) => `${index + 1}. elemanın 3 katı ${x * 3}`)
);

// Ornek: isimler dizisinin icersindeki her ismi buyuk harf olarak yeni bir diziye sakla...

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const buyuk = isimler.map((isim) => isim.toUpperCase());
console.log(buyuk);

document.querySelector(".baslik").textContent = buyuk.join("->"); // burasi basligi degistirir.

//? •-•-• FILTER METHODU •-•-•​

// OR: fiyatlar dizisindeki 250 den buyuk fiyatlari yeni bir diziye sakla

const fiyatlar = [120, 260, 300, 322.5, 400, 768];

console.log(fiyatlar.filter((t) => t > 250));

//-------------- ORNEK -------------------
// maasi 4000 $’dan dusuk olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const yeni = maaslar.filter((t) => t < 4000).map((t) => t * 1.5);

console.log(yeni);

//-------------- ORNEK -------------------
const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

// ilk harfi a olanlari yazdir.
adlar.filter((t) => t.startsWith("A")).forEach((t) => console.log(t));

//todo •-•-• REDUCE METHODU •-•-•​
//! reduce cikis methodudur. reduce den sonra foreach calismaz...

const maaslarim = [3000, 5000, 4000, 2000, 1000];

console.log(maaslarim.reduce((x, y) => x + y, 0));
