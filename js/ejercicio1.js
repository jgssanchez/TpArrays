let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write("<ul>");
document.write("<h2> Lista de Meses: </h2>")
for (let i = 0; i < meses.length; i++) {
  document.write("<li>" + meses[i] + "</li>");
}

document.write("</ul>");
