window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500)
    }, 800)
})

// dropdowns
document.querySelectorAll(".menus").forEach(menuItem => {
    const dropdown = menuItem.querySelector(".dropdown-menus")

    menuItem.addEventListener("mouseenter", () => {
        dropdown.classList.remove("hidden")
    })

    menuItem.addEventListener("mouseleave", () => {
        dropdown.classList.add("hidden")
    })

})








