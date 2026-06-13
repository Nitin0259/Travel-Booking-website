// Website loader
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

// Testimonials
let activeTab = 0;

const testimonilas = document.querySelectorAll('.testimonial');
const buttons = document.querySelectorAll(".testimonial-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        activeTab = Number(button.dataset.tab)

        testimonilas.forEach(item => {
            item.classList.add("hidden")
        })
   
        // Show active testimonial
        document.getElementById(`testimonial-${activeTab}`).classList.remove("hidden")

        // Update button styles
        buttons.forEach(btn => {
            btn.classList.remove("bg-skyBlue", "w-6")
            btn.classList.add("bg-slate-300", "dark:bg-slate-600", "w-2")
        })

        button.classList.remove("bg-slate-300", "dark:bg-slate-600", "w-2")
        button.classList.add("bg-skyBlue", "w-6")
    })
})



