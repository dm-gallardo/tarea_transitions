
var divQ = document.createElement("div");
var divW = document.createElement("div");
var divE = document.createElement("div");

document.addEventListener('keydown', function (event) {
    const target = document.querySelector('#key')
    if (event.key === 'a') {
        target.style.backgroundColor = "pink";
    } else if (event.key === 's') {
        target.style.backgroundColor = "orange";
    } else if (event.key === 'd') {
        target.style.backgroundColor = "lightblue";
    } else if (event.key === 'q') {
        divQ.style.width = "200px";
        divQ.style.height = "200px";
        divQ.style.border = "2px solid black";
        divQ.style.backgroundColor = "purple";
        document.body.appendChild(divQ);
    } else if (event.key === 'w') {
        divW.style.width = "200px";
        divW.style.height = "200px";
        divW.style.border = "2px solid black";
        divW.style.backgroundColor = "gray";
        document.body.appendChild(divW);
    } else if (event.key === 'e') {
        divE.style.width = "200px";
        divE.style.height = "200px";
        divE.style.border = "2px solid black";
        divE.style.backgroundColor = "brown";
        document.body.appendChild(divE);
    }
    console.log(event.key)

    
})

var negro1 = document.getElementById("key1")
var negro2 = document.getElementById("key2")
var negro3 = document.getElementById("key3")
var negro4 = document.getElementById("key4")    

negro1.addEventListener("onclick", pintar1);
negro2.addEventListener("onclick", pintar2);
negro3.addEventListener("onclick", pintar3);
negro4.addEventListener("onclick", pintar4);

function pintar1(){
    if (negro1.style.backgroundColor != 'black')
        negro1.style.backgroundColor = 'black';
    else
    negro1.style.backgroundColor = 'blue';
}
function pintar2(){
    if (negro2.style.backgroundColor != 'black')
        negro2.style.backgroundColor = 'black';
    else
    negro2.style.backgroundColor = 'red';
}
function pintar3(){
    if (negro3.style.backgroundColor != 'black')
        negro3.style.backgroundColor = 'black';
    else
    negro3.style.backgroundColor = 'green';
}
function pintar4(){
    if (negro4.style.backgroundColor != 'black')
        negro4.style.backgroundColor = 'black';
    else
    negro4.style.backgroundColor = 'yellow';
}