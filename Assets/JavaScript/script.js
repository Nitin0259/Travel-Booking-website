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

// dark-light mode btn
const btn = document.getElementById("myToggleBtn")
const toggle = document.getElementById("theme_icon")

btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")

    if(document.documentElement.classList.contains("dark")) {
        toggle.classList.remove("fa-moon", "text-slate-600")
        toggle.classList.add("fa-sun", "text-yellow-400")
    }
    else{
        toggle.classList.remove("fa-sun", "text-yellow-400")
        toggle.classList.add("fa-moon", "text-slate-600")
    }
})

// Menu-bar
const menu_btn = document.getElementById("menu-btn")
const menu_icon = document.getElementById("menu-icon")

menu_btn.addEventListener("click", () => {
    menu_icon.classList.toggle("fa-bars")
    menu_icon.classList.toggle("fa-xmark")
})





