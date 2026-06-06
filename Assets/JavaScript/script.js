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
document.querySelectorAll(".myToggleBtn").forEach(toggleBtn => {

    toggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark")

        document.querySelectorAll(".theme_icon").forEach(icon => {
            if (document.documentElement.classList.contains("dark")) {
                icon.classList.remove("fa-moon", "text-slate-600")
                icon.classList.add("fa-sun", "text-yellow-400")
            }
            else {
                icon.classList.remove("fa-sun", "text-yellow-400")
                icon.classList.add("fa-moon", "text-slate-600")
            }
        })
    })
})

// Mobile-menu-bar
const menu_btn = document.getElementById("menu-btn")
const menu_icon = document.getElementById("menu-icon")
const mobileMenu = document.getElementById("mobile-menu")

menu_btn.addEventListener("click", () => {
   mobileMenu.classList.toggle("hidden");

   if(mobileMenu.classList.contains("hidden")){
    menu_icon.classList.replace("fa-xmark", "fa-bars")
   }
   else{
    menu_icon.classList.replace("fa-bars", "fa-xmark")
   }
})





