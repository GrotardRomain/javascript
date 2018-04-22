//les variables
var hello = "bonjour"; //pas obligé d emettre les ;

let hello = "bonjour"; //bonne methode

const HELLO = "bonjour"

var a = 5
var b = 5

var ab;

if (a === b){
  let ab = a + b;
}else {
  console.log("ce n'est pas egale")
}

console.log(ab)

//pour tester navigateur -> inspect -> console

for (let i = 0; i < 10; i ++) {
  console.log(i);
}

for (let i = 0; i < 10; i ++) {
  for(let i = 0; i < 10; i ++) {
    console.log(i);
  }
}

//ne pas utiliser var

for (var i = 0; i < 10; i ++) {
  for(var i = 0; i < 10; i ++) {
    console.log(i);
  }
}






//tableaux

let array = ["david", "claude"]

let hero = {
  name : "harry",
  xp : 89,
  objet : "lunette",
  crier() {
    console.log(GRAAAA)
  }
}

hero.crier()

console.log(hero.name) //pour afficher le nom du hero

let classe = ["claude", "sarah", "geogeo"]

classe.forEach(function(eleve) {
  console.log(eleve);
})

//retourne un nouvel objet
classe.map(function(eleve) {
  console.log(eleve);
})

//fonction comme php

function hello(){
  return "hello";
}
//plus souvent cette maniere la dans 99% des cas
const hello = function() {
  return "hello";
}
// ===
const hello = () => {
  return "hello";
}
// === pour racourcir au max
const hello = () => "hello";

//boucle comme en php sans $

while (i > 100){
  console.log(i)
}

//concatener

hello + "david"

//POO

class Hero {
  constructor(name = "Harry", xp = 89){
    this.name = name;
    this.xp = xp;
    this.vie = 100;
  }
  //pas de public ni de private car pas réellement POO
  attaque(enemy){
    console.log("Vous avez" + this.xp + "en moins")
  }
}

let Hero2 = new Hero("Jean", 56);
Hero2.attaque("tintin");
