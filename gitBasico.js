import datos from "./gitBasico.json" assert { type: "json" };

for (let dato of datos) {
  let contenidoComandoCode = "";
  let contenidoComando = "";

  if (dato.comandos) {
    for (let comando of dato.comandos) {
      let header = "";
      let subTitleComando = "";
      let subParrafoComando = "";

      if (comando.titleComando)
        header = "<div class='card-header'>" + comando.titleComando + "</div>";
      if (comando.subTitleComando)
        subTitleComando =
          "<h5 class='card-title'>" + comando.subTitleComando + "</h5>";
      if (comando.subParrafoComando)
        subParrafoComando = "<p>" + comando.subParrafoComando + "</p>";

      contenidoComandoCode =
        '<div class="card text-bg-dark mb-3" >' +
        header +
        '<div class="card-body">' +
        subTitleComando +
        subParrafoComando +
        '<p class="card-text">' +
        comando.descripcionComando +
        "</p>" +
        "</div>" +
        "</div>";

      contenidoComando +=
        '<div class="card" style="border: none">' +
        '<div class="card-body pt-0 pb-0" style="">' +
        '<h5 class="card-title">' +
        comando.subtitle +
        "</h5>" +
        '<p class="card-text">' +
        comando.descripcion +
        "</p>" +
        contenidoComandoCode +
        "</div>" +
        "</div>";
    }
  }

  let contenido =
    '<div class="card" style="border: none" id="' +
    dato.id +
    '" > <h5 class="card-header bg-info text-white">' +
    dato.title +
    "</h5>" +
    '<div class="card-body">' +
    '<h5 class="card-title">' +
    dato.subtitle +
    "</h5>" +
    '<p class="card-text">' +
    dato.descripcion +
    "</p>" +
    contenidoComando +
    "</div>" +
    "</div>";

  var body = document.getElementById("gitBasico");
  body.innerHTML += contenido;
}
