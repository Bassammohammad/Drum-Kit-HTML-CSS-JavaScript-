for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var lettre = this.innerHTML
    eventListener(lettre)
    buttonAnimation(lettre)
  })
}

document.addEventListener("keydown", function (event) {
  eventListener(event.key)
  buttonAnimation(event.key)
})

function eventListener(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3")
      tom1.play()

      break
    case "a":
      var tom2 = new Audio("tom-2.mp3")
      tom2.play()

      break
    case "s":
      var tom3 = new Audio("tom-3.mp3")
      tom3.play()

      break
    case "d":
      var tom4 = new Audio("tom-4.mp3")
      tom4.play()

      break
    case "j":
      var crash = new Audio("crash.mp3")
      crash.play()

      break
    case "k":
      var kick_bass = new Audio("kick-bass.mp3")
      kick_bass.play()

      break
    case "l":
      var snare = new Audio("snare.mp3")
      snare.play()

      break

    default:
      break
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed")
  setTimeout(() => {
    activeButton.classList.remove("pressed")
  }, 100)
}
