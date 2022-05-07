randomNumber1 = Math.floor(Math.random()*6)+1;
randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "player 2 Win!🏆";
}else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆player 1 Win!";
}else{
  document.querySelector("h1").textContent = "It is a draw !";
}
