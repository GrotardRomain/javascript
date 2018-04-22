console.log(Math.min(7,5,-12,6,32,18,14,-2))
console.log(Math.max(-3,9,21,36,27,54,17,35))

//https://github.com/becodeorg/Turing-promo-4/blob/master/parcours/7-JavaScript/drill/exercices/07-ex-maths.md
//exercice
let min = Math.min(7,5,-12,6,32,18,14,-2)
let max = Math.max(-3,9,21,36,27,54,17,35)
console.log(min + max)
//exercice 1
floatBateau = 10.4
console.log(Math.floor(floatBateau)) //arrondir vers le bas
console.log(Math.round(floatBateau)) //arrondir vers le nombre entier le plus proche
console.log(Math.ceil(floatBateau)) //arrondir vers le haut
//exercice 2
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
console.log(getRandomInt(2)) //la valeur qui sort ne pourra etre que 0 ou 1
console.log(getRandomInt(11)) // "" entre 0 et 10

//ou

Math.floor(Math.random() * 1)
Math.floor(Math.random() * 100) + 50
Math.floor(Math.random() * 10)
//exercice 3
let mots = ["Goro","Johnny Cago","Kano","Liu Kano","Raiden","Reptil","Scorpion","Shang Tsun","Sonya","Sub-Zero"]
console.log(getRandom(mots))
