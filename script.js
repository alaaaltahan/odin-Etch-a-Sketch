let container = document.querySelector(".container")

for(let i = 1 ; i <= 256 ; i++){
    let div  = document.createElement("div")
    div.textContent = i;
    container.appendChild(div)   
}

function changeGrid(){
    let gridNumber = prompt("enter number between 1 and 100")
    gridNumber = parseInt(gridNumber)
    if (gridNumber > 100 || gridNumber < 1){
        alert("please enter number between 1 and 100")
    } else {
        while(container.firstChild){
            container.removeChild(container.lastChild)
        }

        for(let i = 1 ; i <= gridNumber * gridNumber ; i++){
            let div  = document.createElement("div")
            div.style.cssText = `
                width: calc(100vw/${gridNumber});
                height: calc(100vw/${gridNumber});
                flex: 0 0 calc(100vw/${gridNumber}) ;
                
            `
            div.style.opacity = 0.1
            div.addEventListener("mouseover", ()=>{
            div.style.cssText = `background-color:rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)});
                 width: calc(100vw/${gridNumber});
                height: calc(100vw/${gridNumber});
                flex: 0 0 calc(100vw/${gridNumber}) ;`

           } )
            container.appendChild(div)           
        }
    }
}

let button = document.querySelector("#button")
button.addEventListener("click", changeGrid)
