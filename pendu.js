let toGuess = ["B","O","N","J","O","U","R"]

let guessed = ["","","","","","",""]

let guessLetter = () => {
  let letter = prompt("Entrez la lettre");
  console.log(letter)
  for (let i = 0; i <= toGuess.lenght; i++){
    if (toGuess[i] == letter) {
      guessed[i] = letter
      console.log("bravo", guessed)
    }
  }

  if(guessed.indexOf('') >= 1){
    guessLetter();
  }
}

guessLetter()
