
var ele = document.getElementById("ele1")
ele.addEventListener("onclick", pintar);

function pintar(){
  if (ele.style.backgroundColor === 'white')
    ele.style.backgroundColor = 'yellow';
  else
    ele.style.backgroundColor = 'white';
}