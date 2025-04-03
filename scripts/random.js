function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function gerateRandomNumber() {
  const max = document.getElementById("max").value;
  alert(getRandomInt(max));
}

let button = document.querySelector("button");
button.addEventListener("click", gerateRandomNumber);
button.disabled = false;
