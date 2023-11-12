let ciudades = [];
let ciudad;

do {
  ciudad = prompt("Ingrese el nombre de una ciudad:");
  if (ciudad) {
    ciudades.push(ciudad);
  }
} while (ciudad !== null);

document.write("<h2>Arreglo de Ciudades :</h2>");
document.write("<ul>");
for (let i = 0; i < ciudades.length; i++) {
  document.write("<li>" + ciudades[i] + "</li>");
}
document.write("</ul>");

document.write("Longitud del arreglo: " + ciudades.length);

document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
document.write("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");

ciudades.push("París");
document.write("Elemento en la segunda posición: " + ciudades[1]);
ciudades[1] = "Barcelona";
document.write(ciudades);
