const mobileMenu = document.getElementById("mobile-menu")
const storesContainer = document.getElementById("stores_container")
const contentInner = document.getElementById("content_inner")
document.getElementById("burger").addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open")
        storesContainer.classList.remove("closed")
        contentInner.classList.remove("closed")
    } else {
        mobileMenu.classList.add("open")
        storesContainer.classList.add("closed")
        contentInner.classList.add("closed")
    }
    console.log(mobileMenu)
})