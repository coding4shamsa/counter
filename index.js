let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0



function increment(){
    count = count+1
    countEl.textContent = count
}

increment()


function save(){
    let countrStr = count + " - "
    saveEl.textContent += countrStr
    countEl.textContent = 0
    count = 0
    
}

save()