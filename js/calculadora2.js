const miFormulario = document.getElementById("calculadora");

miFormulario.addEventListener("submit", function(event) {
  
  event.preventDefault();

  const numero1 = document.getElementById("numero1");
  const numero2 = document.getElementById("numero2");
  const operacion = document.getElementById("operacion");

  console.log("los numeros son:", numero1.value, "-", numero2.value);
  const resultodo = document.getElementById("calculo");
  resultodo.hidden = false;

  const n1 = parseFloat(numero1.value);
  const n2 = parseFloat(numero2.value);

  let res;

  if (operacion.value === "sumar") {
    res = n1 + n2;
  } else if (operacion.value === "restar") {
    res = n1 - n2;
  } else if (operacion.value === "multiplicar") {
    res = n1 * n2;
  } else if (operacion.value === "dividir") {
    res = n2 !== 0 ? (n1 / n2).toFixed(2) : "Error: división entre 0";
  } else {
    res = "Operación no reconocida";
  }

  resultodo.textContent = "Resultado: " + res;
});
