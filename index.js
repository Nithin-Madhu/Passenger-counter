let countElement = document.getElementById("count-element")
let saveElement = document.getElementById("save-element")
let count = 0

function increment() {
    count += 1
    countElement.textContent = count

}

function save() {

    let countString = count + " - "
    saveElement.textContent += countString
    countElement.textContent = 
    count = 0
}