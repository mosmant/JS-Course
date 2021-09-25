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
  liste.removeChild(liste.lastChild);
};
