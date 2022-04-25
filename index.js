// alert("Hello World");
// console.log("Hello World");
// var nome = "igor";
// var nome = "Jessy";

// let nome = "jessy";

// const nome = "jessy" - nao muda
//console.log({ primeiroNumero, segundoNumero})

// var primeiroNumero = window.prompt("Digite o primeiro número");

// var segundoNumero = window.prompt("Digite o segundo número");
function somarDoisNumeros() {
  var primeiroNumero = document.getElementById("primeironumero").value;
  var segundoNumero = document.getElementById("segundonumero").value;
  var resultado = Number(primeiroNumero) + Number(segundoNumero);
  document.getElementById("resultado").innerHTML = resultado;
}

somarDoisNumeros();
