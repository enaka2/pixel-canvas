const container = document.querySelector(".container")
const clear = document.querySelector(".clear")
const newGrid = document.querySelector(".newGrid")
const red = document.querySelector(".red")
const orange = document.querySelector(".orange")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const purple = document.querySelector(".purple")
const pink = document.querySelector(".pink")
const white = document.querySelector(".white")

let color = "white"
let length = 16

function createGrid(length) {
    container.replaceChildren()
    for(let i = 0; i < length**2; i++) {
        const div = document.createElement("div")
        div.style.border = "0.5px solid black"
        div.style.width = `${500/length - 1}px`
        div.style.height = `${500/length - 1}px`
        div.style.backgroundColor = "white"

        div.addEventListener("mousedown", () => {
            div.style.backgroundColor = color
        })

        div.addEventListener("mouseover", (event) => {
            if (event.buttons === 1) {
                div.style.backgroundColor = color
            }
        })

        container.appendChild(div)
    }
}

clear.addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to clear your drawing?")

    if (confirmed) {
        createGrid(length)
    }
})

newGrid.addEventListener("click", () => {
    const input = prompt(
        "Enter the number of squares per side for the new grid."
    )

    // Cancel or empty input: keep the current grid
    if (input === null || input.trim() === "") {
        return
    }

    // Reject non-numeric input
    const num = Number(input)

    if (!Number.isInteger(num)) {
        alert("Please enter a valid whole number.")
        return
    }

    if (num < 0 || num > 100) {
        num = 100
    }

    length = num
    createGrid(length)
})

red.addEventListener("click", () => {
    color = "crimson"
})

orange.addEventListener("click", () => {
    color = "orange"
})

yellow.addEventListener("click", () => {
    color = "gold"
})

green.addEventListener("click", () => {
    color = "limegreen"
})

blue.addEventListener("click", () => {
    color = "dodgerblue"
})

purple.addEventListener("click", () => {
    color = "darkmagenta"
})

pink.addEventListener("click", () => {
    color = "hotpink"
})

white.addEventListener("click", () => {
    color = "white"
})


createGrid(length)