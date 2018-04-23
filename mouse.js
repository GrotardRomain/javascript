//ne supprimer qu'une seule div

// let mouseover = document.querySelector(".hoverMe")
//
// let event = function(){
//
//     mouseover.style.visibility = "hidden"
//
// }

// mouseover.addEventListener("mouseover", event)

//création de fonction pour faire disparaitre les 3 div avec une boucle

let mouseover = document.querySelectorAll(".hoverMe")

for (let i = mouseover.length-1; i >= 0; i--){

  mouseover[i].addEventListener("mouseover", function(){

    mouseover[i].style.visibility = "hidden"

  })

}

//fonction pour réapparaitre les div en passant la souris au dessus du reset

let reset = document.querySelector("#reset")

reset.onmouseover = function(){

  for (let i = mouseover.length-1; i >= 0; i--){

    mouseover[i].style.visibility = "visible"

  }

}
