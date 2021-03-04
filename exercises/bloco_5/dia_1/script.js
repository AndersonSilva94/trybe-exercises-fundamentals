document.querySelector("body").style.backgroundColor = "silver";
document.getElementById("header-container").style.backgroundColor = "green";
document.getElementsByTagName("section")[0].style.backgroundColor = "LightSalmon"
document.getElementsByTagName("section")[1].style.backgroundColor = "yellow"
let novoValor = document.querySelectorAll(".emergency-tasks h3")

for(let index = 0; index < novoValor.length; index += 1){
  novoValor[index].style.backgroundColor = "purple"
}

let novoValor1 = document.querySelectorAll(".no-emergency-tasks h3")

for(let index = 0; index < novoValor1.length; index += 1){
  novoValor1[index].style.backgroundColor = "black"
}

document.getElementsByTagName("footer")[0].style.backgroundColor = "darkgreen"
/* document.querySelectorAll(".emergency-tasks div")[0].style.backgroundColor = "LightSalmon"
document.querySelectorAll(".emergency-tasks div")[1].style.backgroundColor = "LightSalmon" */