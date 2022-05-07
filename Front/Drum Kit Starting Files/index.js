var btns = document.querySelectorAll(".drum");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    makeSound(this.textContent);
    animation(this.textContent);
  });
}

document.addEventListener("keydown", function(keyPressed) {
  makeSound(keyPressed.key);
  animation(keyPressed.key);
});


function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      alert("Something not happen correctly");
  }

}

function animation(char){
  var currentLetter = document.querySelector("."+char);
  currentLetter.classList.add("pressed");

  setTimeout(function() {
    currentLetter.classList.remove("pressed");
  }, 100);

}
