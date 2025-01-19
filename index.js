// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countpro= " "+ count + " - "
    saveEl.textContent += countpro
    
    
    console.log(count)
    count=0
    countEl.textContent = count
}

function reset() {
    saveEl.textContent="Previous entries:"
}


