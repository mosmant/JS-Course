var showListe = [];
/* json dosyasindan veri cekme asamalari */
fetch("./tv-shows.json")
  .then((cevap) => cevap.json())
  .then((veri) => {
    showListe = veri;
    showIzle(showListe);
  });
function showIzle(showListe) {
  //!https://getbootstrap.com/docs/4.0/components/card/
  var liste = document.querySelector(".liste");
  showListe.forEach((t) => {
    liste.innerHTML =
      liste.innerHTML +
      `<div class="card col-md-3"> 
<img class="card-img-top" src=${
        t.show.image ? t.show.image.medium : ""
      } alt="Card image cap">
<div class="card-body">
  <h5 >${t.show.name}</h5>  
  <a href="${t.show.url}" target="_blank" class="btn btn-success">Details</a>
</div>
</div>`;
  });

  // col-md-3 12 parsel alandan 4 e bol ve goster dedik
  // image ler jsonda .image den cagiramadik.
  // show list inin icindeki image den aldik direk alamadik medium ve small olandan birini sectik
  // isimleri show dizisinin icinden
}
