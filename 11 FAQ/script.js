const toggles = document.querySelectorAll(".faq-tonggle")

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
})

