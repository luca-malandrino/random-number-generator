let randomNum;

let min;
let max;

document.getElementById("apply").onclick = function() {
  min = Number(document.getElementById("min").value);
  max = Number(document.getElementById("max").value);
  document.getElementById("number").textContent = "";
}

document.getElementById("button").onclick = function(){
  randomNum = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById("number").textContent = randomNum;
}