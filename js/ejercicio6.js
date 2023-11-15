function calcularPerimetroRectangulo() {
  let ladoA = parseFloat(
    prompt("Ingresa la longitud del lado A del rectángulo:")
  );
  let ladoB = parseFloat(
    prompt("Ingresa la longitud del lado B del rectángulo:")
  );

  let perimetro = 2 * (ladoA + ladoB);
  document.write("El perímetro del rectángulo es: " + perimetro);
}

calcularPerimetroRectangulo();
