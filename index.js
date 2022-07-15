// const datos = [
//   {
//     id: "queesgit",
//     title: "¿Qué es Git?",
//     subtitle: "",
//     descripcion:
//       "Es un software de control de versiones, su propósito es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos (También puedes trabajar solo no hay problema 😃). Existe la posibilidad de trabajar de forma remota y una opción es GitHub.",
//     titleComando: "Add confirmaciones.",
//     subTitleComando: "Git add especifica",
//     descripcionComando: "Git add .",
//   },
// ];

import datos from "./list.json" assert { type: "json" };

// const datosJson = JSON.parse(datos);
for (let dato of datos) {
  console.log(dato);
  contenido =
    '<div class="card" style="border: none">' +
    '<h5 class="card-header bg-dark text-white">' +
    dato.title +
    "</h5>" +
    '<div class="card-body">' +
    '<h5 class="card-title">' +
    dato.subtitle +
    "</h5>" +
    '<p class="card-text">' +
    dato.descripcion +
    "</p>" +
    '<div class="card text-bg-dark mb-3" >' +
    '<div class="card-header">' +
    dato.titleComando +
    "</div>" +
    '<div class="card-body">' +
    '<h5 class="card-title">' +
    dato.subTitleComando +
    "</h5>" +
    '<p class="card-text">' +
    dato.descripcionComando +
    "</p>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

  var body = document.getElementById("contenidoDinamico");
  body.innerHTML += contenido;
}
