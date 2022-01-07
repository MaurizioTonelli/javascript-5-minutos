// OPERADORES ARITMÉTICOS

console.log("-----OPERADORES ARITMÉTICOS-----");

console.log(2 * 3);
console.log(2 + 6 / 2);
console.log((2 + 6) / 2);
console.log(5 / 0);
console.log(6 - 3);
console.log(7 % 4);

// OPERADORES LÓGICOS

console.log("-----OPERADORES LÓGICOS-----");

console.log(3 == 3); // El resultado será true
console.log("3" == 3); // El resultado será true
console.log("3" === 3); // El resultado será false
console.log(4 > 3); // El resultado será true
console.log(3 > 5); // El resultado será false
console.log(3 > 2 && 2 < 3); // El resultado será true
console.log(3 > 2 || 2 > 3); // El resultado será true
console.log(3 != 4); // El resultado será true

// ESTRUCTURAS DE CONTROL

console.log("-----ESTRUCTURAS DE CONTROL-----");

if (3 == 3) {
  console.log("En efecto, 3 es igual a 3");
}

if (5 > 7) {
  console.log("En efecto, 5 es mayor que 7");
} else {
  console.log("5 no es mayor que 7");
}

if (3 < 3) {
  console.log("En efecto, 3 es igual a 3");
} else if (3 > 3) {
  console.log("3 no es mayor que 3");
} else {
  console.log("3 no es mayor que 3 ni es menor que 3");
}

// CICLOS

// Este mensaje se va a imprimir 5 veces

console.log("-----CICLOS-----");

let i = 0;

while (i < 5) {
  console.log("Este mensaje se ha repetido " + (i + 1) + "veces");
  i = i + 1;
}

// VARIABLES

console.log("-----VARIABLES-----");

let numeroDeManzanas = 56;
console.log(numeroDeManzanas);

//Modifica el valor de la variable
numeroDeManzanas = 100;
console.log("Ahora tenemos: " + numeroDeManzanas + " manzanas");

//Esta variable no se puede modificar porque se declaró con const
const numeroDeNaranjas = 56;
console.log(numeroDeNaranjas);

let numeroDeManzanasDiarias = 2;
let manzanasPorSemana = numeroDeManzanasDiarias * 7;

if (manzanasPorSemana > 10) {
  console.log("Has comido suficientes manzanas por la semana");
} else {
  console.log("Esta semana te faltó comer más manzanas");
}

// FUNCIONES

console.log("-----FUNCIONES-----");

function calcularNumeroDeMeses(años) {
  return años * 12;
}

let numeroDeMeses = calcularNumeroDeMeses(5);
console.log(numeroDeMeses);

// OBJETOS

console.log("-----OBJETOS-----");

let miMicroondas = {
  color: "Azul",
  temperaturaMaxima: 150,
  temperaturaActual: 0,
  altura: 30,
  anchura: 55,
  profundidad: 30,
  calentarComida: function () {
    console.log("Estoy calentando comida");
  },
};

console.log(miMicroondas.temperaturaMaxima);

miMicroondas.calentarComida();

// CLASES

console.log("-----CLASES-----");

class Microondas {
  constructor(color, temperaturaMaxima, altura, anchura, profundidad) {
    this.color = color;
    this.temperaturaMaxima = temperaturaMaxima;
    this.altura = altura;
    this.anchura = anchura;
    this.profundidad = profundidad;
  }

  calentarComida() {
    console.log("Calentando la comida");
  }
}

let miMicroondas2 = new Microondas("Azul", 159, 40, 50, 30);

console.log(miMicroondas2.color);
console.log(miMicroondas2.altura);
miMicroondas2.calentarComida();

// ARREGLOS

console.log("-----ARREGLOS-----");

let misFrutasFavoritas = ["Mango", "Uva", "Sandía"];

console.log(misFrutasFavoritas[0]);
console.log(misFrutasFavoritas[1]);
console.log(misFrutasFavoritas[2]);

misFrutasFavoritas.push("Fresa");

// EL DOM

console.log("-----EL DOM-----");

let boton = document.querySelector("#mi-boton");

boton.addEventListener("click", function () {
  boton.style.backgroundColor = "red";
  console.log("El botón se ha cambiado de color");
});
