let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let clearEl = document.getElementById("save-el")

function counter() {
    count = count + 1
    countEl.textContent = count
}

function save() {
   saveEl.textContent += count + " • "
   countEl.textContent = 0
   count = 0
}

function clearLog() {
    clearEl.textContent = ""
 }