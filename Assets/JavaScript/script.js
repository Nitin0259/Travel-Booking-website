window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500)
    }, 800)
})

