function informacionCadena() {
  let frase = prompt("Por favor, ingresa una frase:");
  let Mayusculas = frase === frase.toUpperCase();
  let Minusculas = frase === frase.toLowerCase();

  switch (true) {
    case Mayusculas:
      document.write("La frase está formada sólo por mayúsculas.");
      break;
    case Minusculas:
      document.write("La frase está formada sólo por minúsculas.");
      break;
    default:
      document.write(
        "La frase está formada por mayúsculas y minúsculas."
      );
  }
}

informacionCadena();
