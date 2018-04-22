let message = prompt("Entrez votre prix")

let count = 0;

let min = 20;

let max = 80;

console.log = Math.random() //numéro random


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(Math.min(20));

console.log(Math.max(80));

console.log(Math.random() * (80 - 20)) + 20;
