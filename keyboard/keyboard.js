let switchColor = document.querySelector("#character")

let press = (event) => {

  switch(event.key){

    case "0":
      switchColor.style.backgroundColor = "#5614CC";
      break;

    case "1":
      switchColor.style.backgroundColor = "#5E3D99";
      break;

    case "2":
      switchColor.style.backgroundColor = "#002FFF";
      break;

    case "3":
      switchColor.style.backgroundColor = "#FFBC40";
      break;

    case "4":
      switchColor.style.backgroundColor = "#CC7614";
      break;

    case "5":
      switchColor.style.backgroundColor = "#65CC00";
      break;

    case "6":
      switchColor.style.backgroundColor = "#999998";
      break;

    case "7":
      switchColor.style.backgroundColor = "#F0FF55";
      break;

    case "8":
      switchColor.style.backgroundColor = "#FF4D8B";
      break;

    case "9":
      switchColor.style.backgroundColor = "#52CC81";
      break;

    default:
      switchColor.style.backgroundColor = "#FFE4DB";

  }

}

window.addEventListener("keypress", press, true);
