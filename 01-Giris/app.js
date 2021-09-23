// ============
// todo CONSOLE

console.log("Hello JavaScript");
// shortcut kareli log
console.log("Deneme");

// alert browser ekraninda uyari verir.
// alert("Dikkat");
// console.warn("Bu Bir uyaridir.");
// console.error("Bu Bir hatadir..");
// prompt("Adinizi giriniz :");

// bunlar sadece console da gorunur.
// ============
// todo VARIABLE TANIMLAMA
var isim = "osman";
console.log(typeof isim);
isim = 3.14;
console.log(typeof isim);

// ? Ancak, modern JS var keyword’unun kullanımı azaldı.
// ? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir.
// ! VAR yerine artik const ve let kullaniyoruz.

// ============
// todo CONST

// constant ingilizce kelime manası sabit
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword’leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive’ler hariç).mümkünse const, yoksa let,
// ! o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

const piSayisi = 3.14;
// piSayisi = 3;
const isim1 = "Osman";
console.log(typeof isim1);
// const number; // hatali kullanim.
// number=4; default deger atanamaz.

// ============
// todo LET

// ? Eğerki değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
fiyat = 10;
console.log(typeof fiyat);
fiyat = "Erdem";
console.log(typeof fiyat);

// string tanimlamak icin 3 farkli karakter kullanilabilir.
let name1 = "Alattin";
let name2 = "Oguzhan";
let name3 = `Faruk`;
console.log(typeof name3);
// ============
// todo ARITMETIK OPERATORLER
const kola = 5;
const cips = 6;
const ekmek = 2;
// toplama islemi icin numerik ifadeler icin
console.log(kola + cips + ekmek);
console.log("Toplam Fiyat:", kola + cips + ekmek);

// string ifadeler icin toplama islemi (concat)
const ad = "osman";
const soyad = "turker";
console.log(ad + soyad);
console.log("ad: " + ad + " " + "soyad: " + soyad);

// karisik ifadeler icin toplama islemi icin
const s1 = 7;
const s2 = "7";
console.log(s1 + s2); // output : 77

// !  TEMPLATE LITERAL iki adet backtick arasina yazmak daha kolay bir yontemdir.
console.log(`ad: ${ad} soyad: ${s1}`);

// US alma (**)

const taban = 2;
const us = 3;
console.log(taban ** us);

// MOD alma (%)
const sayi = 123;
const birlerBasamagi = sayi % 10;
console.log(birlerBasamagi);

const s3 = 5;
const s4 = "5";
console.log(s3 == s4); // true degerlere bakiyor
console.log(s3 === s4); // false degerlere ve datatype'a bakiyor

// todo TIP DEGISIMLERI

const para = "100";
console.log(para + 15); // 10015
console.log(Number(para) + 15); // 115

const sayi5 = 56;
console.log(String(sayi5) + sayi5); //56

console.log(typeof sayi5);
