// ===============
// todo KARAR YAPILARI

// ===============
// todo IF ELSE

// + isleminde kelimeler concat ta yapabilecegi icin basina number ya da + ekledik.

const s1 = +prompt("Birinci sayiyi giriniz");
const islem = prompt("Islemi giriniz");
const s2 = Number(prompt("Ikinci sayiyi giriniz"));
let sonuc = 0;
if (islem == "+") {
  sonuc = s1 + s2;
} else if ((islem = "-")) {
  sonuc = s1 + s2;
} else if ((islem = "/")) {
  sonuc = s1 / s2;
} else if ((islem = "*")) {
  sonuc = s1 * s2;
}
console.log(sonuc);
