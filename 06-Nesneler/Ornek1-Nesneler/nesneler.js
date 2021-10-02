// todo •-•-•-• NESNELER •-•-•-•

// diziler sirali bellek bolgeleridir. dolayisiyla dizilere erisim index le olur.
// eger diziler karisiksa (nesne ) indexle ersisim guclugu cikar.
// BU YUZDEN =>

//! OBJECT (NESNE)

// NESNELERDE PROPERTY (maplardeki key gibi) - VALUE yapisi kullanilir.
// Nesnelerde aradigimiz veriye erismek icin key adini kullanmamiz gereklidir.
const insan = {
  ad: "Kemal",
  soyad: "Kul",
  yas: "30",
  meslek: "developer",
  diller: ["Java", "Js", "SQL", "HTML"],
};
console.log(insan);

// 2 tur nesne cagirma yolu var.

// 1.yol: dot notasyonu
console.log(insan.ad);
console.log(insan.diller);

// 2.yol: koseli parantez icine
console.log(insan["soyad"]);
console.log(insan["diller"]);

console.log(`Adim ${insan.ad} ve yasim ${insan.yas}`);

//! promtera insan nesnesinden kimi gormek istersin diye sorduralim.
//! const bilgi = prompt(
//!   "insan nesnesinden hangisini gormek istersin -ad, soyad, yas..-");
//! console.log(insan[bilgi]); // 2. yol prompt dan gelen veriyi alamiza da yardimci oldu.

// objeye key.value lar ekleme

insan.konum = "Turkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1991;

console.log(insan); // burada nesne kalabaliklasti.

// todo •-•-•-• Nesne Methodlari •-•-•-•

const kisi = {
  ad: "Merve",
  soyad: "Aslan",
  dogumTarihi: 1990,
  meslek: "Tester",
  tool: "selenium",
  ehliyet: true,
  yasHesapla: function () {
    // bugunun yilini alalim=> Date().getFullYear () -dogumTarihi islemi yas bulunur.
    return new Date().getFullYear() - this.dogumTarihi; // burada javadaki gibi "this" kullaniriz.
  },
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir.`;
    // yasHesapla yazarsak bir sonuc vermiyor yasHesapla()dememiz gerekir.
  },
};
console.log(kisi); // burada yashesapla ve ozet methodlarini goremeyiz ayrıca cagirmaliyiz.
console.log(kisi.yasHesapla()); // 31
console.log(kisi.ozet()); // Merve Aslan 31 yasindadir.

// todo •-•-•-• Nesne (Object) Iterasyon Ornekleri •-•-•-•

const people = [
  {
    ad: "hakan",
    soyad: "inal",
    meslek: "developer",
    yas: 41,
  },
  {
    ad: "said",
    soyad: "cin",
    meslek: "qa",
    yas: 37,
  },
  {
    ad: "kubilay",
    soyad: "tuncel",
    meslek: "developer",
    yas: 30,
  },
  {
    ad: "osman",
    soyad: "Turker",
    meslek: "grafiker",
    yas: 29,
  },
  {
    ad: "huseyin",
    soyad: "harran",
    meslek: "doktor",
    yas: 32,
  },
];
console.log(people);

// Ornek 1 people dizisindeki kisilerin mesleklerini console da yazdiralim.
people.forEach((t) => console.log(t.meslek));

// Ornek 2 people dizisindeki kisilerin yaslarini 1 arttiralim.

people.map((t) => t.yas + 1).forEach((t) => console.log(t));

// Ornek 3 yasi 35 e esit olanlarin veya kucuk olanların adlarini yazdir.
people.filter((t) => t.yas <= 35).forEach((t) => console.log(t.ad));

// Ornek 4 people dizisindeki kisilerin isimlerini buyuk harf olarak alan
// ve yaslarini 5artiran ve soyadinin ilk 2 harfini func yaziiniz.

people
  .map((t) => {
    return {
      ad: t.ad.toUpperCase(),
      yas: t.yas + 5,
      soyad: t.soyad.slice(0, 2),
    };
  })
  .forEach((t) => console.log(t));

// burada return cok islemi tek bir islem gibi yapti.

// Ornek5 meslegi developer olanlarin isimleri buyuk harf yapip ve yaslarini yazdiriniz
// istersek diziye atayip diziyi yazdir.

const yeni = people
  .filter((t) => t.meslek == "developer")
  .map((t) => {
    return {
      ad: t.ad.toUpperCase(),
      yas: t.yas,
    };
  });

console.log(yeni);
