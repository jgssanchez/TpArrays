function parOImpar(numero) {
  if (numero % 2 === 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
}

let numero = prompt("Introduce un número entero:");
let resultado = parOImpar(parseInt(numero));
document.write(resultado);
