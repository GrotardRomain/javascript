//exo1
let body = document.body

body.classList.remove("bg-aqua")

body.classList.add("bg-olive")

let p = document.getElementById("first-paragraph")

p.classList.remove("bg-lime gray")

p.classList.add("aqua")

let silver = document.querySelector(".bg-silver")

silver.classList.add("bg-teal")

silver.classList.remove("bg-silver")

let block = document.querySelectorAll(".blockquote"), i

for (i = 0; i < block.length; ++i) {

  block[i].classList.add("bg-white")

}

//exo2
let table = document.querySelector("#my-table")

table.classList.add("bg-purple")

let cont = document.querySelectorAll(".container p")

for (let i = 0; i < cont.length; i++) {

  cont[i].classList.add("shadow")

}

//exo3
let pre = document.querySelectorAll("pre")

for (let j = 0; j < pre.length; j++) {

  pre[j].style.color = "blue"

  pre[j].style.backgroundColor = "gray"

  pre[j].style.borderTop = "3px solid red"

  pre[j].style.borderBottom = "3px solid red"

}

let h3 = document.querySelector("h3:first-of-type")

h3.innerHTML = "<em>Italic title ! Yeah !</em>"

let h2 = document.querySelector("h2:first-of-type")

h2.style.color ="white"

h2.innerHTML = "<strong>HTML doens\'t work !</strong>"

//exo4 création d'elements
let ul= document.querySelector("ul:first-of-type")

let li = document.createElement("li")

ul = ul.appendChild(li)

ul = ul.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>"

let link = document.querySelector("li:last-of-type a")

link.style.color = "red"

//exo4 creation et suppression de plusieurs elements
let ol2 = document.querySelector("ol")

let ol1 = ol2.children

while ( ol1.length ) {

  ol2.removeChild( ol2.children[0] )

}

let array1 = ["Silent Teacher", "Code Monkey", "CodeCombat"]

for (let l = 0; l < array1.length; l++) {

  let arrayLi = document.createElement("li")

  arrayLi.innerHTML = array1[l]

  ol2.appendChild(arrayLi)

}
