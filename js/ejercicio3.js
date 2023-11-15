function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  let sumas= new Array(11).fill(0);
  
  for (let i = 0; i < 50; i++) {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;
    sumas[suma - 2]++;
  }

  document.write('<ul>');
  for (let i = 0; i < sumas.length; i++) {
    document.write('<li>Suma ' + (i + 2) + ': ' + sumas[i] + ' veces</li>');
  }
  document.write('</ul>');
  