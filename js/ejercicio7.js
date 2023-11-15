function mostrarTablaMultiplicar() {
  let numero = parseInt(
    prompt("Ingresa un número para mostrar su tabla de multiplicar:")
  );

  if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido!!");
    return;
  }
  document.write("<ul>");
  document.write("<h2> Tabla de Multiplicar </h2>");
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write("<li>" + numero + " x " + i + " = " + resultado + "</li>");
  }
  document.write("<ul>");
}

mostrarTablaMultiplicar();
