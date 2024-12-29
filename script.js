let container = document.querySelector(".container")

for(let i = 1 ; i <= 256 ; i++){
    let div  = document.createElement("div")
    div.textContent = i;
    container.appendChild(div)
    console.log(i)
}