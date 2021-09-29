// todo •-•-•-• DIZILERDE ITERASYON •-•-•-•

//! •-•-• FOR DONGUSU •-•-•

const koordinatlar = [120, 100, -100, 220, 330, -50];
let pozitif = 0;
let negatif = 0;
for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}

console.log(`negatifler toplami = ${negatif}\npozitifler toplami = ${pozitif}`);
