const progress = document.getElementById("progress")
const prev  = document.getElementById("prev")
const next = document.getElementById("next")
const cirle = document.querySelectorAll(".cirle");

let currentActive = 1

next.addEventListener("click", () => {
    currentActive++

    if (currentActive > cirle.length) {
        currentActive = cirle.length
    }

    update()
})

prev.addEventListener("click", () => {
    currentActive--

    if (currentActive > cirle.length) {
        currentActive = cirle.length
    }

    update()
})

function update () {
    cirle.forEach ((e, i) => {
        if (i < currentActive) {
            e.classList.add("active")
        } else {
            e.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length - 1) / (cirle.length - 1) * 100 + "%"

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === cirle.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}