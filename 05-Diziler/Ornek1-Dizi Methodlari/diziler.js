const yaslar = [5, 10, 28, 42];

const isimler = [
  "Hakan",
  "Alaaddin",
  "Furkan",
  "Dayanch",
  20,
  40,
  true,
  23.5,
  yaslar,
];

console.log(isimler);
console.log(isimler[3]);
console.log((isimler[3] = "Sadi"));
console.log(isimler);
// const degistirilemezdi ama non-pirmitive datalarda degisebiliyor.
// dizi bir adres gosterir isimler gibi o yuzden primitive den farkli...

isimler[isimler.length - 2] = false;

console.log(isimler[8][1]); // output 10
console.log(isimler[isimler.length - 1][1]); // output 10

//todo • Diziyi degistiren (mutator) metotlar
//todo • Dizi erisim metotlari
//todo • Dizi iterasyon metotlari

// ••••• Diziyi Değiştiren (mutator) Methodlar •••••

const meyveler = ["Elma", "Armut", "Muz", "Kivi"];

const baslik = document.querySelector(".baslik"); // h1 tagindeki baslik classini ele gecirdik.

// burada console.log icinde goterilirse silinen elemanlari dondurur.

// pop(); en son elemani siler ve console.log() icinde yazdirirsak console gosterir.

console.log(meyveler.pop()); // Kivi
// burada kivi yi sildi ve console da  gosterdi.

console.log(meyveler);

// shift(); 0. elemani siler ve console.log() icinde yazdirirsak console gosterir.
// meyveler.shift();  ["Armut", "Muz"]
console.log(meyveler.shift()); // Elma

// push(); dizinin sonuna eleman ekler.
meyveler.push("Cilek", "Karpuz");

// unshift(); dizinin basina eleman ekler.
meyveler.unshift("Ayva");

// reverse(); dizinin elemanlarini terse cevirir.
meyveler.reverse();

// sort(); dizinin elemanlarini alfabetik ya da artan siralama (kucukten buyuge) ile siralar.
meyveler.sort();

// splice(); Dizi'nin içeriklerini, diziye ait öğeleri kaldırarak veya yeni öğeler
// ekleyerek ve/veya mevcut öğeleri silerek değiştirir.
meyveler.splice(1, 0, "Erik"); // buradaki 0 false yani silme ==> 1. elemani silme artik 1. elemanim Erik olsun
// output : Armut,Erik,Ayva,Cilek,Karpuz,Muz ==> Ayva silinmedi.
meyveler.splice(4, 1, "Uzum"); // buradaki 1 true  yani sil demektir. ==> 4. elemani sil ve onun yerine Uzum koy demek
// output : Armut,Erik,Ayva,Cilek,Uzum,Muz ==> Karpuz silindi.

// baslik.textContent = meyveler;
// ••••• Dizi Erisim Methodlari •••••

const sayilar = [3, 4, 5, 2, "2", "uc", "bes", 5, 2, 7];

// includes(); kapsiyor mu?
console.log(sayilar.includes("5")); // false
console.log(sayilar.includes(5)); // true

// indexOf();  ilk eslesen indexi dondurur.
console.log(sayilar.indexOf(2)); // 3
console.log(sayilar.lastIndexOf(5)); // 7
// Aralardaki ayni elemanlari bulmak icin
console.log(sayilar.indexOf(2, 4)); // output : 8 ==> 4. indexten sonraki 2yi bul demek. "2"yi aramaz.
console.log(sayilar.indexOf(5, 3)); // output : 7 ==> 3. indexten sonraki 5i bul demek.

// join();  dizinin elemanlarini birlestirip string hale getirir.
// join(); elemanlarini default olarak virgulle ayirir. istersek " ", "-" yaparak ayirabiliriz.
console.log(sayilar.join()); // output : 3,4,5,2,2,uc,bes,5,2,7
console.log(sayilar.join("-")); // output : 3-4-5-2-2-uc-bes-5-2-7

// *** toString() join() gibidir. sadece "," ile ayirma islemi yapar.
console.log(sayilar.toString()); // output : 3,4,5,2,2,uc,bes,5,2,7

const arabalar = ["bmw", "mercedes", "Volvo", "sahin", "anadol"];
// bunların siralamasini yaparsak Volvo buyuk harfle basladigi icin en once o yazilir.
// ascii degeri kucuk olan buyuk harflerdir

// slice();
console.log(arabalar.slice(2)); // output: ['Volvo', 'sahin', 'anadol']
// indexi 2 olan elemandan itibaren al gel diyor.
console.log(arabalar.slice(1, 3)); // output : ['mercedes', 'Volvo']
// 1.index dahil 3. index dahil degil.
//! SUBSTRING ILE AYNISIDIR. ILK INDEX INCLUSIVE SON INDEX EXCLUSIVE

//todo       concat();  ...---EN ONEMLISI BUYMUS---...
const birlesik = sayilar.concat(arabalar, true, false, 3, 4, 5, meyveler);
// burada iki diziyi sira ile birlestirdik.
console.log(birlesik);
// output : [3, 4, 5, 2, '2', 'uc', 'bes', 5, 2, 7, 'bmw', 'mercedes', 'Volvo', 'sahin', 'anadol', true, false, 3, 4, 5, 'Armut', 'Erik', 'Ayva', 'Cilek', 'Uzum', 'Muz']

baslik.textContent = sayilar;
console.log(sayilar);
