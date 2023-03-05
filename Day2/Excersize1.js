const divs = document.querySelectorAll("div")
divs.forEach(function (div){return div.style.backgroundColor = "red"})
const button1 = document.createElement("button")
button1.textContent = "Click me"
document.body.appendChild(button1)
button1.addEventListener("click", function (){
    document.getElementById("box1").style.color = "red"
    document.getElementById("box2").style.color = "blue"
    document.getElementById("box3").style.color = "green"
})


console.log("valid")